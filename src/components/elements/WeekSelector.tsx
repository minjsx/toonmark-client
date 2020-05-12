import React, { ReactElement } from 'react';
import Button from './Button';
import { Weekday } from '../../types';
import styled from 'styled-components';

interface Props {
  selectedItem?: WeekDayType;
}

export type WeekDayType = 'ALL' | keyof typeof Weekday;

type WeekDays = {
  key: WeekDayType;
  title: string;
};

const weekdays: WeekDays[] = [
  { key: 'ALL', title: '전체' },
  { key: 'MON', title: '월요일' },
  { key: 'TUE', title: '화요일' },
  { key: 'WED', title: '수요일' },
  { key: 'THU', title: '목요일' },
  { key: 'FRI', title: '금요일' },
  { key: 'SAT', title: '토요일' },
  { key: 'SUN', title: '일요일' },
  { key: 'TEN', title: '열흘' },
];

const Templete = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  width: 66.25rem;
  height: 2.5rem;
`;

export default function WeekSelector({ selectedItem }: Props): ReactElement {
  return (
    <Templete>
      {weekdays.map(({ key, title }) => (
        <Button
          key={key}
          text={title}
          theme={key === selectedItem ? 'Primary' : 'PrimaryLight'}
        />
      ))}
    </Templete>
  );
}

WeekSelector.defaultProps = {
  selectedItem: 'ALL',
} as Partial<Props>;
