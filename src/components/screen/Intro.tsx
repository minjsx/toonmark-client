import React, { ReactElement, useState } from 'react';
import { RouteComponentProps, useHistory } from 'react-router-dom';
import styled from 'styled-components';

import { colors } from '../../theme';
import { getString } from '../../../STRINGS';
import { getWeekday } from '../../utils/Functions';
import { IWebtoon } from '../../types';
import { useAppContext } from '../../providers/AppProvider';
import HeaderTemplate from '../templete/HeaderTemplate';

import Card from '../elements/Card';
import Label from '../atoms/Label';
import WeekSelector, { WeekDayType } from '../elements/WeekSelector';
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

const TitleWrapper = styled.div`
  display: flex;
  align-self: stretch;
  padding: 2.5rem 0;
  overflow: visible;
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

function Intro({ match }: RouteComponentProps<MatchParams>): ReactElement {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const history = useHistory();
  const [selectedDay, setSelectedDay] = useState<WeekDayType>(getWeekday());

  const handleDayClick = (key: WeekDayType) => () => {
    setSelectedDay(key);
  };

  const {
    state: { favorWebtoons },
    setFavorWebtoon,
  } = useAppContext();

  const navigate = (): void => {
    const location: object = {
      pathname: '/404',
      state: {},
    };
    history.push(location);
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
          <Label text={getString('MYTOONMARK')} fontType="H5Medium" />
        </TitleWrapper>
        <WeekSelector selectedItem={selectedDay} handleClick={handleDayClick} />
        {favorWebtoons.length > 0 ? (
          <CardSection>
            {favorWebtoons
              .filter((value) =>
                selectedDay !== 'ALL'
                  ? value.weekday.toUpperCase() === selectedDay
                  : value,
              )
              .map((webtoon, idx, array) => (
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
        ) : (
          <EmptyTextWrapper>
            <Label
              text={getString('EMPTY_FAVOR_WEBTOON')}
              fontType="H6Regular"
              color={colors.gray3}
            />
            <Label
              text={getString('EMPTY_FAVOR_WEBTOON_LINK')}
              fontType="H6Regular"
              color={colors.gray3}
            />
          </EmptyTextWrapper>
        )}
      </ContentWrapper>
    </Container>
  );
}

export default Intro;
