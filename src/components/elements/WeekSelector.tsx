import React, { ReactElement } from 'react';

import Button from './Button';
import { Weekday, Platform } from '../../types';
import styled from 'styled-components';
import { useWIndowDemensions } from '../../hooks';
import { size } from '../../theme';

interface Props {
  selectedItem?: WeekDayType;
  handleClick?: (key: WeekDayType) => () => void;
  currentPlatform?: string;
}

export type WeekDayType = 'ALL' | keyof typeof Weekday;

type WeekDays = {
  key: WeekDayType;
  title: string;
  shortTitle: string;
};

const weekdays: WeekDays[] = [
  { key: 'ALL', title: '전체', shortTitle: '전체' },
  { key: 'MON', title: '월요일', shortTitle: '월' },
  { key: 'TUE', title: '화요일', shortTitle: '화' },
  { key: 'WED', title: '수요일', shortTitle: '수' },
  { key: 'THU', title: '목요일', shortTitle: '목' },
  { key: 'FRI', title: '금요일', shortTitle: '금' },
  { key: 'SAT', title: '토요일', shortTitle: '토' },
  { key: 'SUN', title: '일요일', shortTitle: '일' },
  { key: 'TEN', title: '열흘', shortTitle: '열흘' },
];

const Section = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  max-height: 3.5rem;
`;

export default function WeekSelector({
  selectedItem,
  handleClick,
  currentPlatform,
}: Props): ReactElement {
  const { width } = useWIndowDemensions();
  const filteredWeekdays =
    currentPlatform === 'lezhin'
      ? weekdays
      : currentPlatform === 'toomics'
      ? weekdays
      : weekdays.slice(0, weekdays.length - 2);
  return (
    <Section>
      {filteredWeekdays.map(({ key, title, shortTitle }) => (
        <Button
          key={key}
          onClick={handleClick(key)}
          text={width > parseInt(size.laptop, 10) ? title : shortTitle}
          theme={key === selectedItem ? 'Primary' : 'PrimaryLight'}
        />
      ))}
    </Section>
  );
}

WeekSelector.defaultProps = {
  selectedItem: 'ALL',
  handleClick: (key) => {},
} as Partial<Props>;
