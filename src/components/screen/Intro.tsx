import React, { ReactElement, useState } from 'react';

import HeaderTemplate from '../templete/HeaderTemplate';
import { User } from '../../types';
import { device } from '../../theme';
import { getString } from '../../../STRINGS';
import styled from 'styled-components';
import { useAppContext } from '../../providers/AppProvider';
import { useHistory } from 'react-router-dom';
import { useThemeContext } from '../../providers/ThemeProvider';
import Label from '../atoms/Label';
import WeekSelector, { WeekDayType } from '../elements/WeekSelector';
import Card from '../elements/Card';
import { fetchData } from '../../apis/sample';

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

function Intro(): ReactElement {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let timer: any;
  const history = useHistory();
  const [selectedDay, setSelectedDay] = useState<WeekDayType>('ALL');

  const handleDayClick = (key: WeekDayType) => () => {
    setSelectedDay(key);
    getWebtoonData('daum', key);
  };

  const { state, setUser, resetUser } = useAppContext();
  const { changeThemeType } = useThemeContext();
  const [isLoggingIn, setIsLoggingIn] = React.useState(false);

  const getWebtoonData = async (
    platform: string,
    weekday: string,
  ): Promise<void> => {
    const data = await fetchData(`/${platform}/${weekday.toLowerCase()}`).then(
      (res) => res.ok && res.json(),
    );
    console.log(data);
  };

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
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </CardSection>
      </ContentWrapper>
    </Container>
  );
}

export default Intro;

//  <ContentWrapper>
//   <Text>{state.user.displayName}</Text>
//   <Text>{state.user.age ? state.user.age : ''}</Text>
//   <Text>{state.user.job}</Text>
//  </ContentWrapper>
//  <ButtonWrapper>
//   <Button
//     imgSrc={IC_GOOGLE_W}
//     isLoading={isLoggingIn}
//     onClick={(): void => onLogin()}
//     text={getString('LOGIN')}
//   />
//   <Button onClick={(): void => navigate()} text={getString('NAVIGATE')} />
//   <Button
//     onClick={(): void => changeThemeType()}
//     text={getString('CHANGE_THEME')}
//   />
// </ButtonWrapper>
