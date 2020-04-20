import { css } from 'styled-components';

export const Typhography = {
  H1: css`
    font-family: Roboto;
    font-size: 96px;
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -1.5px;
    color: ${({ theme }): string => theme.fontColor};
  `,
  H2: css`
    font-family: Roboto;
    font-size: 60px;
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.5px;
    color: ${({ theme }): string => theme.fontColor};
  `,
  H3: css`
    font-family: Roboto;
    font-size: 48px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: ${({ theme }): string => theme.fontColor};
  `,
  H4: css`
    font-family: Roboto;
    font-size: 34px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: 0.25px;
    color: ${({ theme }): string => theme.fontColor};
  `,
  H5Bold: css`
    font-family: Roboto;
    font-size: 24px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: 0.15px;
    color: ${({ theme }): string => theme.fontColor};
  `,
  H5Medium: css`
    font-family: Roboto;
    font-size: 24px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: 0.15px;
    color: ${({ theme }): string => theme.fontColor};
  `,
  H5Regular: css`
    font-family: Roboto;
    font-size: 24px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: ${({ theme }): string => theme.fontColor};
  `,
  H6Bold: css`
    font-family: Roboto;
    font-size: 20px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: 0.15px;
    color: ${({ theme }): string => theme.fontColor};
  `,
  H6Medium: css`
    font-family: Roboto;
    font-size: 20px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.6;
    letter-spacing: 0.15px;
    color: ${({ theme }): string => theme.fontColor};
  `,
  H6Regular: css`
    font-family: Roboto;
    font-size: 20px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.6;
    letter-spacing: 0.15px;
    color: ${({ theme }): string => theme.fontColor};
  `,
  Body1Bold: css`
    font-family: Roboto;
    font-size: 18px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.56;
    letter-spacing: 0.5px;
    color: ${({ theme }): string => theme.fontColor};
  `,
  Body1Medium: css`
    font-family: Roboto;
    font-size: 18px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.56;
    letter-spacing: 0.5px;
    color: ${({ theme }): string => theme.fontColor};
  `,
  Body1Regular: css`
    font-family: Roboto;
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.56;
    letter-spacing: 0.5px;
    color: ${({ theme }): string => theme.fontColor};
  `,
  Body2Bold: css`
    font-family: Roboto;
    font-size: 14px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.43;
    letter-spacing: 0.25px;
    color: ${({ theme }): string => theme.fontColor};
  `,
  Body2Medium: css`
    font-family: Roboto;
    font-size: 14px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.43;
    letter-spacing: 0.25px;
    color: ${({ theme }): string => theme.fontColor};
  `,
  Body2Regular: css`
    font-family: Roboto;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.43;
    letter-spacing: 0.25px;
    color: ${({ theme }): string => theme.fontColor};
  `,
  SubTitle1: css`
    font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: 0.15px;
    color: ${({ theme }): string => theme.fontColor};
  `,
  SubTitle2: css`
    font-family: Roboto;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    color: ${({ theme }): string => theme.fontColor};
  `,
  ButtonPrimary: css`
    font-family: Roboto;
    font-size: 20px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.6;
    letter-spacing: 0.15px;
    color: ${({ theme }): string => theme.btnPrimaryFont};
  `,
  ButtonPrimaryLight: css`
    font-family: Roboto;
    font-size: 20px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.6;
    letter-spacing: 0.15px;
    color: ${({ theme }): string => theme.btnPrimaryLightFont};
  `,
  TinyBold: css`
    font-family: Roboto;
    font-size: 10px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.6;
    letter-spacing: 0.4px;
    color: ${({ theme }): string => theme.fontColor};
  `,
  TinyMedium: css`
    font-family: Roboto;
    font-size: 10px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.6;
    letter-spacing: 0.4px;
    color: ${({ theme }): string => theme.fontColor};
  `,
  TinyRegular: css`
    font-family: Roboto;
    font-size: 10px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.6;
    letter-spacing: 0.4px;
    color: ${({ theme }): string => theme.fontColor};
  `,
  CaptionBold: css`
    font-family: Roboto;
    font-size: 12px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.33;
    letter-spacing: 0.4px;
    color: ${({ theme }): string => theme.fontColor};
  `,
  CaptionMedium: css`
    font-family: Roboto;
    font-size: 12px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.33;
    letter-spacing: 0.4px;
    color: ${({ theme }): string => theme.fontColor};
  `,
  CaptionRegular: css`
    font-family: Roboto;
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.33;
    letter-spacing: 0.4px;
    color: ${({ theme }): string => theme.fontColor};
  `,
};
