import { boolean, radios, text, withKnobs } from '@storybook/addon-knobs';
import Card from './Card';
import React from 'react';
import { action } from '@storybook/addon-actions';
import styled from 'styled-components';

export default {
  title: 'components|shared/Card',
  component: Card,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: '정보를 효율적이게 전달해주는 "카드" 컴포넌트',
  },
};

const Wrapper = styled.div`
  height: 324px;
  width: 214px;
`;

export const standard = (): React.ReactElement => {
  const onClick = action('onClickAction');
  const theme = radios(
    'theme',
    { Primary: 'Primary', PrimaryLight: 'PrimaryLight' },
    'Primary',
  );
  const CardText = text('text', '월요일');
  const isLoading = boolean('loading', false);

  return <Wrapper><Card /></Wrapper>;
};

standard.story = {
  name: 'Standard',
};
