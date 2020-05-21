import React, { ReactElement, useState } from 'react';
import { Link } from 'react-router-dom';

import { colors, device } from '../../theme';
import HeaderLayout from '../layouts/HeaderLayout';

import Label from '../atoms/Label';
import SearchBar from '../elements/SearchBar';
import Switch from 'react-switch';
import styled from 'styled-components';
import { useThemeContext } from '../../providers/ThemeProvider';
import { ThemeType } from '../../types';
import PlatformNavigation from '../elements/PlatformNavigation';

interface Props {
  isSearch?: boolean;
}

const ThemeToggleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`;

const Container = styled.div``;

const TitleWrapper = styled.div`
  cursor: pointer;
  padding-left: 1vw;
`;

const HeaderLeft = styled.div`
  display: flex;
  width: 30vw;
  padding-left: 10vw;
  align-items: flex-end;

  @media ${device.tablet} {
  }
  @media ${device.laptop} {
    width: 30vw;
  }
  @media ${device.laptopL} {
    width: 45vw;
  }
  @media ${device.desktop} {
    width: 25vw;
  }
`;

const HeaderRight = styled.nav`
  display: grid;
  align-items: center;
  width: 20vw;
  height: 100%;
  padding-right: 10vw;
  @media ${device.tablet} {
    width: 50vw;
  }
  @media ${device.laptop} {
    width: 40vw;
  }
  @media ${device.laptopL} {
    width: 30vw;
  }
  @media ${device.desktop} {
    width: 20vw;
  }
`;

export default function HeaderTemplate({ isSearch }: Props): ReactElement {
  const { changeThemeType, themeType } = useThemeContext();
  const [themeSwitch, setThemeSwitch] = useState<boolean>(
    themeType !== ThemeType.LIGHT,
  );
  const onHandleThemeChange = (checked: boolean): void => {
    changeThemeType();
    setThemeSwitch(checked);
  };
  return (
    <HeaderLayout>
      <HeaderLeft>
        <Switch
          uncheckedIcon={
            <ThemeToggleWrapper>
              <Label text="L" fontType="Body2Bold" />
            </ThemeToggleWrapper>
          }
          checkedIcon={
            <ThemeToggleWrapper>
              <Label text="D" fontType="Body2Bold" />
            </ThemeToggleWrapper>
          }
          onColor={colors.gray1}
          offColor={colors.gray5}
          onChange={onHandleThemeChange}
          checked={themeSwitch}
        />
        <TitleWrapper>
          <Label text="TOONMARK" color="white" fontType="H5Bold" />
        </TitleWrapper>
      </HeaderLeft>
      <HeaderRight>
        {isSearch ? <SearchBar /> : <PlatformNavigation />}
      </HeaderRight>
    </HeaderLayout>
  );
}

HeaderTemplate.defaultProps = {
  isSearch: false,
} as Partial<Props>;
