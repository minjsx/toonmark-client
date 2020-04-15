import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import Button from './Button';
import React from 'react';
import { action } from '@storybook/addon-actions';

export default {
  title: 'components|shared/Button',
  component: Button,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: '사용자와의 인터렉션의 기본 "버튼" 컴포넌트',
  },
};

export const standard = (): React.ReactElement => {
  const onClick = action('onClickAction');
  const isLoading = boolean('loading', false);
  const buttonText = text('text', 'Storybook');
  return <Button text={buttonText} isLoading={isLoading} onClick={onClick} />;
};

standard.story = {
  name: 'Standard',
};

export const loading = (): React.ReactElement => <Button isLoading />;

export const withLeftIcon = (): React.ReactElement => (
  <Button
    imgSrc="https://img.favpng.com/15/7/19/start-menu-button-windows-key-png-favpng-P045drMQczE17EaAWHQ1BT7d0.jpg"
    text="withLeftIcon"
  />
);
