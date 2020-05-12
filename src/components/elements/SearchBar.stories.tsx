import { text, withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import SearchBar from './SearchBar';
import styled from 'styled-components';

export default {
  title: 'components|SearchBar',
  component: SearchBar,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: '검색을 제공하는 Search Bar 컴포넌트',
  },
};

const Templete = styled.div`
  background: #f2994a;
  padding: 10px;
`;

export function standard(): React.ReactElement {
  return (
    <Templete>
      <SearchBar />
    </Templete>
  );
}

standard.story = {
  name: 'Default',
};
