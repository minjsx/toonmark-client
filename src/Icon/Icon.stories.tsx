import React, { ReactElement } from 'react';
import Icon from './Icon';

export default {
  component: Icon,
  title: 'components|Icon',
};

export const icon = (): ReactElement => <Icon icon="favorFill" />;

icon.story = {
  name: 'Default',
};

export const customSize = (): ReactElement => (
  <Icon icon="favorFill" size="4rem" />
);

export const customColor = (): ReactElement => (
  <Icon icon="favorFill" color="red" />
);

export const customizedWithStyle = (): ReactElement => (
  <Icon icon="favorFill" css={{ color: 'red', width: '4rem' }} />
);
