import React, { ReactElement, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import HeaderTemplate from '../templete/HeaderTemplate';
import { device } from '../../theme';
import { getString } from '../../../STRINGS';
import { cardDummies } from '../../utils/Constants';

import styled from 'styled-components';
import { useAppContext } from '../../providers/AppProvider';
import { useHistory } from 'react-router-dom';
import { useThemeContext } from '../../providers/ThemeProvider';
import Label from '../atoms/Label';
import WeekSelector, { WeekDayType } from '../elements/WeekSelector';
import CardTemplate from '../templete/CardTemplate';

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

const TopSection = styled.div`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 2.5rem 0;
  border: solid 1px black;
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

const ButtonWrapper = styled.div`
  position: absolute;
  flex-direction: column;

  @media ${device.mobileS} {
    bottom: 40px;
    width: 85vw;
    align-self: center;
  }

  @media ${device.tablet} {
    width: 50vw;
    right: 60px;
    align-self: center;
    top: 400px;
  }
`;

const Text = styled.span`
  font-size: 18px;
  line-height: 1.5;
  font-family: sans-serif;
  color: ${(props): string => props.theme.fontColor};
`;

function Intro({ match }: RouteComponentProps<MatchParams>): ReactElement {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const history = useHistory();
  const [selectedDay, setSelectedDay] = useState<WeekDayType>('ALL');

  const handleDayClick = (key: WeekDayType) => () => {
    setSelectedDay(key);
  };

  const { state, setUser, resetUser } = useAppContext();
  const { changeThemeType } = useThemeContext();

  const navigate = (): void => {
    const location: object = {
      pathname: '/404',
      state: {},
    };
    history.push(location);
  };

  return (
    <Container>
      <HeaderTemplate />
      <ContentWrapper>
        <TitleWrapper>
          <Label text={getString('MYTOONMARK')} fontType="H5Medium" />
        </TitleWrapper>
        <WeekSelector selectedItem={selectedDay} handleClick={handleDayClick} />
        <CardSection>
          {cardDummies.map((key) => (
            <CardTemplate key={key} />
          ))}
        </CardSection>
      </ContentWrapper>
    </Container>
  );
}

export default Intro;
