import Label, { FontType } from './Label';
import { radios, select, withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import { Typhography } from '../../Typhography';

export default {
  title: 'Atoms|Label',
  component: Label,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: 'Text를 나타내는 Label Components',
  },
};

const selectOptions: FontType[] = Object.keys(Typhography) as FontType[];
const defaultSelectValue: FontType = 'H6Medium';

const colorOptions = {
  black: '#000000',
  white: '#ffffff',
};
const defaultColorValue = colorOptions.black;

export const standard = (): React.ReactElement => {
  const selectValue = select(
    'fontType',
    selectOptions,
    defaultSelectValue,
    'Group-ID1',
  );
  const colorValue = radios(
    'color',
    colorOptions,
    defaultColorValue,
    'Group-ID1',
  );
  return <Label fontType={selectValue} color={colorValue} />;
};

standard.story = {
  name: 'Default',
};
