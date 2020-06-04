import React, { ReactElement, useState, useEffect } from 'react';
import Axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { RouteComponentProps } from 'react-router-dom';
import styled from 'styled-components';

import { getString } from '../../../STRINGS';
import { IWebtoon } from '../../types';
import { cardDummies } from '../../utils/Constants';

import HeaderTemplate from '../templete/HeaderTemplate';
import CardTemplate from '../templete/CardTemplate';

import Label from '../atoms/Label';
import WeekSelector, { WeekDayType } from '../elements/WeekSelector';
import Card from '../elements/Card';
import { useAppContext } from '../../providers/AppProvider';
import { getWeekday } from '../../utils/Functions';

interface MatchParams {
  platform: string;
}

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  align-self: stretch;
  overflow: scroll;
  background: ${(props): string => props.theme.background};
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0 12.85vw;
  height: 100%;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-self: stretch;
  padding: 2.5rem 0;
  overflow: visible;
`;

const CardSection = styled.div`
  width: 100%;
  padding: 2.5rem 0;
  display: grid;
  justify-content: center;
  align-content: flex-start;
  grid-gap: 1.25rem 1rem;
  grid-template-columns: repeat(auto-fill, 13.375rem);
  grid-auto-rows: minmax(20.25rem, auto);
`;

const baseURL = '/api/webtoon/';

function Platform({
  match,
  location,
}: RouteComponentProps<MatchParams>): ReactElement {
  const { platform } = match.params;
  //TODO: contextAPI로 global State로 변경하기
  const {
    state: { favorWebtoons },
    setFavorWebtoon,
  } = useAppContext();
  const [loading, setLoading] = useState<boolean>(false);
  const [selectedDay, setSelectedDay] = useState<WeekDayType>(getWeekday());
  const [response, setResponse] = useState<IWebtoon[]>([]);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    let source = Axios.CancelToken.source();
    const url =
      selectedDay !== 'ALL'
        ? platform.concat('/').concat(selectedDay.toLowerCase())
        : platform;
    fetchData(baseURL + url, { cancelToken: source.token });
    return () => {
      source.cancel();
    };
  }, [platform, selectedDay]);

  async function fetchData(
    url: string,
    options?: AxiosRequestConfig,
  ): Promise<void> {
    const baseOptions: AxiosRequestConfig = {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'x-dsi-restful': '1',
      }),
      ...options,
    };
    try {
      setLoading(true);
      const res: AxiosResponse<IWebtoon[]> = await Axios(url, baseOptions);
      const data = (await res.data) as IWebtoon[];
      setResponse(
        (prevData) =>
          prevData
            .concat(data)
            .map((e) => e.id)
            .map((e, i, final) => final.indexOf(e) === i && i)
            .filter((e) => data[e])
            .map((e) => data[e]),
        // .sort((a, b) => (a.title > b.title ? 1 : a.title < b.title ? -1 : 0)),
      );
    } catch (error) {
      if (Axios.isCancel(error)) {
        console.log('caught cancel :: ', loading);
      } else {
        setError(error);
        throw error;
      }
    } finally {
      setLoading(false);
    }
  }

  const handleDayClick = (day: WeekDayType) => async (): Promise<void> => {
    setSelectedDay(day);
  };

  const onCardClick = (link: string) => (
    event?: React.MouseEvent<HTMLElement, MouseEvent>,
  ): void => {
    event.preventDefault();
    window.open(link);
    window.focus();
  };

  const onHeartClick = (webtoon: IWebtoon) => (
    event?: React.MouseEvent<SVGSVGElement, MouseEvent>,
  ): void => {
    event.preventDefault();
    setFavorWebtoon(webtoon);
  };

  return (
    <Container>
      <HeaderTemplate />
      <ContentWrapper>
        <TitleWrapper>
          <Label text={getString(platform.toUpperCase())} fontType="H5Medium" />
        </TitleWrapper>
        <WeekSelector
          selectedItem={selectedDay}
          handleClick={handleDayClick}
          currentPlatform={platform}
        />
        <CardSection>
          {loading
            ? cardDummies.map((key) => <CardTemplate key={key} />)
            : response.map((webtoon, idx, array) => (
                <Card
                  key={webtoon.id}
                  platform={webtoon.platform}
                  thumbnail={webtoon.thumbnail}
                  title={webtoon.title}
                  onCardClick={onCardClick(webtoon.link)}
                  onHeartClick={onHeartClick(webtoon)}
                  favor={favorWebtoons.some((data) => data.id === webtoon.id)}
                />
              ))}
        </CardSection>
      </ContentWrapper>
    </Container>
  );
}

Platform.defaultProps = {} as Partial<MatchParams>;

export default Platform;
