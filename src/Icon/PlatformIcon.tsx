import React, { ReactElement } from 'react';
import styled from 'styled-components';

// 스토리에서 불러오기 위함
const icons = {
  NAVER:
    'https://pbs.twimg.com/profile_images/1162296345173975042/DHZimJgv_400x400.jpg',
  DAUM: 'https://u1.daumcdn.net/webtoon/op/webtoon_home_text_ver_20190514.png',
  KAKAO:
    'https://dn-img-page.kakao.com/download/resource?kid=b6iau6/hydtsoiYqF/0gzoOvKflPuGyFDWXNDZJ1',
  LEZHIN:
    'https://socialdotlezhindotcom.files.wordpress.com/2017/02/cropped-cropped-blog1.png?w=200',
  TOOMICS:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS5KP0Yiis1Q2uImHTndaVsZ1O8GTZLMXT2HvYvCLHcTC_MwrOK&usqp=CAU',
  TOPTOON: 'https://smurfs.toptoon.com/assets/favicon/apple-icon-180x180.png',
  MISTERBLUE:
    'https://pbs.twimg.com/profile_images/958625612129685506/7uVmsqEG_400x400.jpg',
};

type PlatformIconType = keyof typeof icons;

export const PlatformIconTypes = Object.keys(icons) as PlatformIconType[];

export type PlatformIconProps = {
  /** 사용 할 아이콘 타입 */
  icon: PlatformIconType;
  /** px기반의 size width와 height 모두 맞춰집니다. */
  size?: number;
  /** true라면 아이콘을 둥글게 표현, 아니라면 squere 형식으로 표현
   */
  IsEllipse?: boolean;
};

const defaultProps: Partial<PlatformIconProps> = {
  icon: 'NAVER',
  size: 24,
};

type ImageProps = {
  size?: number;
  IsEllipse?: boolean;
};

const Image = styled('img')<ImageProps>`
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  &:hover {
    cursor: pointer;
  }
  width: ${(props): number => props.size || 24}px;
  height: ${(props): number => props.size || 24}px;
  border-radius: ${(props): number => (props.IsEllipse ? 50 : 0)}%;
`;

/** 아이콘을 보여주고 싶을 땐 `Icon` 컴포넌트를 사용하세요.
 *
 * 이 컴포넌트는 svg 형태로 아이콘을 보여주며, props 또는 스타일을 사용하여 아이콘의 색상과 크기를 정의 할 수 있습니다.
 *
 * 스타일로 모양새를 설정 할 때에는 `color`로 색상을 설정하고 `size`로 크기를 설정하세요.
 */
const PlatformIcon = ({
  icon,
  size,
  IsEllipse,
}: PlatformIconProps): ReactElement => {
  const url = icons[icon];
  return <Image src={url} size={size} IsEllipse={IsEllipse} />;
};

PlatformIcon.defaultProps = defaultProps;

export default PlatformIcon;
