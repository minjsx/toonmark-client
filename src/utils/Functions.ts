import { WeekDayType } from '../components/elements/WeekSelector';

const getStorage = (key: string): string | null => {
  return localStorage.getItem(key);
};

const setStorage = (key: string, value: string): void => {
  return localStorage.setItem(key, value);
};

const destroyStorage = (key: string): void => {
  return localStorage.removeItem(key);
};

const getSessionStorage = (key: string): string | null => {
  return sessionStorage.getItem(key);
};

const setSessionStorage = (key: string, value: string): void => {
  return sessionStorage.setItem(key, value);
};

const destroySessionStorage = (key: string): void => {
  return sessionStorage.removeItem(key);
};

const getWeekday = (): WeekDayType => {
  const weekdays: WeekDayType[] = [
    'MON',
    'TUE',
    'WED',
    'THU',
    'FRI',
    'SAT',
    'SUN',
  ];
  const currentDate = new Date();
  return weekdays[currentDate.getDay()];
};

export {
  getStorage,
  setStorage,
  destroyStorage,
  getSessionStorage,
  setSessionStorage,
  destroySessionStorage,
  getWeekday,
};
