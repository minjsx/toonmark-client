import PlatformIcon, { PlatformIconTypes } from '../../Icon/PlatformIcon';
import HeaderLayout from './HeaderLayout';
import Icon from '../../Icon/Icon';
import Label from '../atoms/Label';
import React from 'react';

import SearchBar from '../elements/SearchBar';
import { action } from '@storybook/addon-actions';
import styled from 'styled-components';

export default {
  title: 'layouts|HeaderLayout',
  component: HeaderLayout,
  parameters: {
    componentSubtitle: 'Desktop의 기본 Header Layouts',
  },
};

const TitleWrapper = styled.div`
  cursor: pointer;
`;

const SearchIconWrapper = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.5rem;
  height: 2.5rem;
  cursor: pointer;
  background: rgba(0, 0, 0, 0.5);
  outline: none;
  border-radius: 50%;
`;

const HeaderLeft = styled.div`
  display: flex;
  width: 40.25rem;
  justify-content: space-between;
  align-items: center;
`;

const HeaderRight = styled.nav`
  width: 27.5rem;
`;
const ListWrapper = styled.ul`
  display: flex;
  flex-direction: row;
  margin: 0;
  list-style-type: none;
  justify-content: space-between;
  align-items: center;
`;
const List = styled.li`
  border-radius: 1.25rem;
`;

export const layout = (): React.ReactElement => {
  return <HeaderLayout />;
};

export const withSearchBar = (): React.ReactElement => {
  return (
    <HeaderLayout>
      <HeaderLeft>
        <TitleWrapper>
          <Label text="TOONMARK" color="white" fontType="H5Bold" />
        </TitleWrapper>
        <SearchBar />
      </HeaderLeft>
      <HeaderRight>
        <ListWrapper>
          {PlatformIconTypes.map((platform, index) => (
            <List key={index}>
              <PlatformIcon icon={platform} size={40} IsEllipse />
            </List>
          ))}
        </ListWrapper>
      </HeaderRight>
    </HeaderLayout>
  );
};

export const withNoSearchBar = (): React.ReactElement => {
  return (
    <HeaderLayout>
      <TitleWrapper>
        <Label text="TOONMARK" color="white" fontType="H5Bold" />
      </TitleWrapper>
      <HeaderRight>
        <ListWrapper>
          <SearchIconWrapper>
            <Icon icon="Search" color="white" size={16} />
          </SearchIconWrapper>
          {PlatformIconTypes.map((platform, index) => (
            <List key={index}>
              <PlatformIcon icon={platform} size={40} IsEllipse />
            </List>
          ))}
        </ListWrapper>
      </HeaderRight>
    </HeaderLayout>
  );
};

layout.story = {
  name: 'Default',
};
