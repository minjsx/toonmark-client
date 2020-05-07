import Header from './Header';
import Label from '../atoms/Label';
import React from 'react';

import { action } from '@storybook/addon-actions';
import styled from 'styled-components';

export default {
  title: 'layouts|Header',
  component: Header,
  parameters: {
    componentSubtitle: 'Desktop의 기본 Header Layouts',
  },
};

export const layout = (): React.ReactElement => {
  return <Header />;
};

export const withLogo = (): React.ReactElement => {
  return (
    <Header>
      <Label text="TOONMARK" color="white" fontType="H5Bold" />
    </Header>
  );
};

layout.story = {
  name: 'Default',
};
