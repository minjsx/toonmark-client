import { text, withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import SearchBar from './SearchBar';
import styled from 'styled-components';

export default {
  title: 'components|SearchBar',
  component: SearchBar,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: '정보를 효율적이게 전달해주는 "카드" 컴포넌트',
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
