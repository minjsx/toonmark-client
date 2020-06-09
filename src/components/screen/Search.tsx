import React, { Fragment, ReactElement, useState, useEffect } from 'react';
import styled from 'styled-components';
import Axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { IWebtoon } from '../../types';
import HeaderTemplate from '../templete/HeaderTemplate';
import { useInput } from '../../hooks';
import { RouteComponentProps } from 'react-router-dom';
import Label from '../atoms/Label';
import { getString } from '../../../STRINGS';
import { useAppContext } from '../../providers/AppProvider';
import Card from '../elements/Card';

interface MatchParams {}

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

const EmptyTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;
  justify-content: center;
  align-self: stretch;
  overflow: visible;
`;

const baseURL = '/api/webtoon/search/';

export default function Search({
  history,
  location,
}: RouteComponentProps<MatchParams>): ReactElement {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);
  const { text, onChange: onChangeText } = useInput(''); // 임시로 달아놓음 추후 부모로 옮겨야함
  const [response, setResponse] = useState<IWebtoon[]>([]);

  const {
    state: { favorWebtoons },
    setFavorWebtoon,
  } = useAppContext();

  useEffect(() => {
    const delayDebounceSearch = setTimeout(async () => {
      history.push(`/search?query=${text}`);
      await fetchData(baseURL + text);
    }, 475);
    return () => clearTimeout(delayDebounceSearch);
  }, [text]);

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
      <HeaderTemplate isSearch text={text} onChangeText={onChangeText} />
      <ContentWrapper>
        <TitleWrapper>
          {response.length > 0 ? (
            <Fragment>
              <Label text="총" fontType="H6Medium" />
              <Label text={` ${response.length}개`} fontType="H6Bold" />
              <Label text="의 웹툰을 찾았습니다" fontType="H6Medium" />
            </Fragment>
          ) : (
            <Label text="검색" fontType="H5Medium" />
          )}
        </TitleWrapper>
        <CardSection>
          {response.map((webtoon, idx, array) => (
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

Search.defaultProps = {} as Partial<MatchParams>;
