import { ButtonPrimary, ButtonPrimaryLight } from '../atoms/Buttons';
import React, { CSSProperties, ReactElement } from 'react';
import { Typhography } from '../../Typhography';
import styled from 'styled-components';

interface Props {
  id?: string;
  style?: CSSProperties;
  /** 버튼 좌측에 삽입할 이미지의 URL */
  imgSrc?: string;
  /** 보여주고 싶은 이름 */
  text?: string;
  /** 버튼을 누를 때 호출할 함수 */
  onClick?: () => void;
  /** 이 값을 `true` 로 설정하면 loading ActivityIndicator가 적용됩니다 */
  isLoading?: boolean;
  /** 이 값에 따라 버튼의 Theme를 결정합니다. */
  theme?: 'Primary' | 'PrimaryLight';
}

const ButtonWrapper = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

const PrimaryText = styled.span`
  ${Typhography.ButtonPrimary}
  margin: auto;
`;

const PrimaryLightText = styled.span`
  ${Typhography.ButtonPrimaryLight}
  margin: auto;
`;

const LogoImg = styled.img`
  left: 20px;
  height: 20px;
  width: 20px;
  object-fit: cover;
`;

const Spinner = styled.div`
  border: 4px solid #f3f3f3; /* Light grey */
  border-top: 4px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 24px;
  height: 24px;
  animation: spin 1s linear infinite;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

function Button(props: Props): ReactElement {
  const { onClick, imgSrc, text, style, isLoading, theme } = props;
  return theme === 'Primary' ? (
    <ButtonPrimary style={style} onClick={onClick}>
      {isLoading ? (
        <Spinner id="spinner" />
      ) : (
        <ButtonWrapper>
          {imgSrc ? <LogoImg src={imgSrc} /> : null}
          <PrimaryText>{text}</PrimaryText>
        </ButtonWrapper>
      )}
    </ButtonPrimary>
  ) : (
    <ButtonPrimaryLight style={style} onClick={onClick}>
      {isLoading ? (
        <Spinner id="spinner" />
      ) : (
        <ButtonWrapper>
          {imgSrc ? <LogoImg src={imgSrc} /> : null}
          <PrimaryLightText>{text}</PrimaryLightText>
        </ButtonWrapper>
      )}
    </ButtonPrimaryLight>
  );
}

Button.defaultProps = {
  theme: 'Primary',
};

export default Button;
