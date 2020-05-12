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
  TOPTOON:
    'https://image.winudf.com/v2/image1/bmV0LnRvcHRvb24uYW5kcm9pZC5hcHBzX2ljb25fMTU1Mzc4MDk5N18wMTc/icon.png?w=&fakeurl=1',
  MISTERBLUE:
    'https://pbs.twimg.com/profile_images/958625612129685506/7uVmsqEG_400x400.jpg',
};

type PlatformIconType = keyof typeof icons;

export const PlatformIconTypes = Object.keys(icons) as PlatformIconType[];

export type PlatformIconProps = {
  /** 사용 할 아이콘 타입 */
  icon: PlatformIconType;
  /** px, rem 등 단위를 포함한 css size */
  size?: string;
};

const defaultProps: Partial<PlatformIconProps> = {
  icon: 'NAVER',
  size: 24,
};

type ImageProps = {
  size?: string;
};

const Image = styled('img')<ImageProps>`
  &:hover {
    cursor: pointer;
  }
  width: ${(props): string => props.size || '1rem'};
  height: ${(props): string => props.size || '1rem'};
`;

/** 아이콘을 보여주고 싶을 땐 `Icon` 컴포넌트를 사용하세요.
 *
 * 이 컴포넌트는 svg 형태로 아이콘을 보여주며, props 또는 스타일을 사용하여 아이콘의 색상과 크기를 정의 할 수 있습니다.
 *
 * 스타일로 모양새를 설정 할 때에는 `color`로 색상을 설정하고 `size`로 크기를 설정하세요.
 */
const PlatformIcon = ({ icon, size }: PlatformIconProps): ReactElement => {
  const url = icons[icon];
  return <Image src={url} size={size} />;
};

PlatformIcon.defaultProps = defaultProps;

export default PlatformIcon;
