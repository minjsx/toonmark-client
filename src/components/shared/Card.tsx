import { ButtonPrimary, ButtonPrimaryLight } from '../ui/Buttons';
import React, { CSSProperties, ReactElement } from 'react';
import Icon from '../../Icon/Icon';
import { Platform } from '../../types';
import { Typhography } from '../../Typhography';
import styled from 'styled-components';

type WebtoonPlatform = keyof typeof Platform;

interface Props {
  id?: string;
  style?: CSSProperties;
  thumbnail?: string;
  title?: string;
  platform?: WebtoonPlatform;
  favor?: boolean;
  link?: string;
  onClick?: () => void;
}

const CardContainer = styled('button')`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  outline: none;
  border: none;
  box-sizing: border-box;
  padding: 0;
  height: 324px;
  width: 214px;
  border-radius: 1.25rem;
  background: ${(props): string => props.theme.secondaryBackground};
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  &:focus {
    opacity: 0.5;
  }
  &:hover {
    opacity: 0.5;
  }
  &:active {
    opacity: 0.5;
  }
`;

const CardImage = styled('img')`
  display: flex;
  height: 180px;
  width: 214px;
  object-fit: cover;
  border-radius: 1.25rem 1.25rem 0 0;
`;

const TextWrapper = styled('div')`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 1rem 0.75rem;
`;

const CardTitle = styled('p')`
  ${Typhography.Body2Regular}
  text-align: left;
  margin: 0;
`;

const CardFooter = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const PlatformIcon = styled('img')``;

function Card(props: Props): ReactElement {
  const { style, thumbnail, title, platform, favor, link, onClick } = props;
  return (
    <CardContainer>
      <CardImage src={thumbnail} />
      <TextWrapper>
        <CardTitle>{title}</CardTitle>
        <CardFooter>
          <div css={{ display: 'flex', flex: 1 }}>
            <Icon icon="naver" />
          </div>
          <div css={{ display: 'flex', flex: 1 }}>
            <Icon icon="favorFill" />
          </div>
        </CardFooter>
      </TextWrapper>
    </CardContainer>
  );
}

Card.defaultProps = {
  theme: 'Primary',
  title: '오늘부터 0촌! - 진돌&히디의 우당탕 결혼일기',
  thumbnail:
    'https://image-comic.pstatic.net/webtoon/event/thumbnail/2/upload_20200330163500/626907_m.jpg',
};

export default Card;
