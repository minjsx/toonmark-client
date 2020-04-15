import React, { CSSProperties, ReactElement } from 'react';

import { ButtonPrimary } from '../ui/Buttons';
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
}

const ButtonWrapper = styled.div`
  flex: 1;
  height: 100%;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const PrimaryText = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }): string => theme.btnPrimaryFont};
  margin: auto;
`;

const LogoImg = styled.img`
  position: absolute;
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
  const { onClick, imgSrc, text, style, isLoading } = props;
  return (
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
  );
}

Button.defaultProps = {
  style: { display: 'flex', height: '60px' },
};

export default Button;
