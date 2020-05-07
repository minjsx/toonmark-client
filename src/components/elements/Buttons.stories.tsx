import { boolean, radios, text, withKnobs } from '@storybook/addon-knobs';
import Button from './Button';
import React from 'react';
import { action } from '@storybook/addon-actions';
import styled from 'styled-components';

export default {
  title: 'components|shared/Button',
  component: Button,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: '사용자와의 인터렉션의 기본 "버튼" 컴포넌트',
  },
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const standard = (): React.ReactElement => {
  const onClick = action('onClickAction');
  const theme = radios(
    'theme',
    { Primary: 'Primary', PrimaryLight: 'PrimaryLight' },
    'Primary',
  );
  const buttonText = text('text', '월요일');
  const isLoading = boolean('loading', false);

  return (
    <Button
      text={buttonText}
      isLoading={isLoading}
      onClick={onClick}
      theme={theme}
    />
  );
};

standard.story = {
  name: 'Standard',
};

export const loading = (): React.ReactElement => (
  <Wrapper>
    <Button style={{ marginRight: 10 }} isLoading theme={'Primary'} />
    <Button isLoading theme={'PrimaryLight'} />
  </Wrapper>
);

export const withIcon = (): React.ReactElement => (
  <Wrapper>
    <Button
      style={{ marginRight: 10 }}
      imgSrc="https://cdn4.iconfinder.com/data/icons/contact-us-19/48/35-512.png"
      text="완료"
      theme={'Primary'}
    />
    <Button
      style={{ marginRight: 10 }}
      imgSrc="https://cdn4.iconfinder.com/data/icons/contact-us-19/48/35-512.png"
      text="완료"
      theme={'PrimaryLight'}
    />
  </Wrapper>
);
