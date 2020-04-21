export interface User {
  displayName: string;
  age: number;
  job: string;
}

export enum ThemeType {
  LIGHT = 'LIGHT',
  DARK = 'DARK',
}

export enum Platform {
  NAVER = 'naver', //  네이버 웹툰
  DAUM = 'daum', //  다음 웹툰
  KAKAO = 'kakao', //  카카오 페이지 웹툰
  LEZHIN = 'lezhin', //  레진 코믹스
  TOOMICS = 'toomics', //  투믹스
  TOPTOON = 'toptoon', // 탑툰
  MISTERBLUE = 'misterblue', //  미스터블루
}

export enum Weekday {
  MON = 'mon', //  월
  TUE = 'tue', //  화
  WED = 'wed', //  수
  THU = 'thu', //  목
  FRI = 'fri', //  금
  SAT = 'sat', //  토
  SUN = 'sun', //  일
  TEN = 'ten', //  열흘(일부 플랫폼만)
}
