import WeekSelector, { WeekDayType } from './WeekSelector';
import { optionsKnob as options, withKnobs } from '@storybook/addon-knobs';
import { OptionsKnobOptions } from '@storybook/addon-knobs/dist/components/types';
import React from 'react';
import styled from 'styled-components';

export default {
  title: 'components|WeekSelector',
  component: WeekSelector,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: '정보를 효율적이게 전달해주는 "카드" 컴포넌트',
  },
};

type Option = {
  [key in WeekDayType]: WeekDayType;
};
const valuesObj = {
  ALL: 'ALL',
  MON: 'MON',
  TUE: 'TUE',
  WED: 'WED',
  THU: 'THU',
  FRI: 'FRI',
  SAT: 'SAT',
  SUN: 'SUN',
  TEN: 'TEN',
} as Option;
const optionsObj: OptionsKnobOptions = {
  display: 'inline-radio',
};
const defaultValue: WeekDayType = 'ALL';

export function standard(): React.ReactElement {
  const selectedItem = options<WeekDayType>(
    'WeekDays',
    valuesObj,
    defaultValue,
    optionsObj,
  );
  return <WeekSelector selectedItem={selectedItem} />;
}

standard.story = {
  name: 'Default',
};
