import React, { ReactElement, useState } from 'react';
import Switch from 'react-switch'; // light them 및 dark theme 변경 switch
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useThemeContext } from '../../providers/ThemeProvider';
import { ThemeType } from '../../types';
import { colors, device } from '../../theme';

import HeaderLayout from '../layouts/HeaderLayout';
import PlatformNavigation from '../elements/PlatformNavigation';
import SearchBar from '../elements/SearchBar';
import Label from '../atoms/Label';

interface Props {
  isSearch?: boolean;
  text?: string;
  onChangeText?: (event?: React.ChangeEvent<HTMLInputElement>) => void;
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

export default function HeaderTemplate({
  isSearch,
  text,
  onChangeText,
}: Props): ReactElement {
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
          <Link to="/">
            <Label text="TOONMARK" color="white" fontType="H5Bold" />
          </Link>
        </TitleWrapper>
      </HeaderLeft>
      <HeaderRight>
        {isSearch ? (
          <SearchBar text={text} onChange={onChangeText} />
        ) : (
          <PlatformNavigation />
        )}
      </HeaderRight>
    </HeaderLayout>
  );
}

HeaderTemplate.defaultProps = {
  isSearch: false,
} as Partial<Props>;
