import React, { ReactElement } from 'react';
import Icon from '../../Icon/Icon';
import { Typhography } from '../../Typhography';
import { colors, device } from '../../theme';
import styled from 'styled-components';
import { useInput } from '../../hooks';

interface Props {
  placeholder?: string;
  text?: string;
  onChange?: (event?: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: (event?: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

const Templete = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 2.5rem;
  width: 100%;
  border-radius: 0.625rem;
  background: ${(props): string => props.theme.secondaryBackground};
  padding-left: 1rem;
  padding-right: 0.5rem;
`;

const Input = styled('input')`
  ${Typhography.SubTitle2};
  background: ${(props): string => props.theme.secondaryBackground};
  border-style: unset;
  border-width: 0;
  outline: none;
  box-sizing: border-box;
  height: 2.5rem;
  width: 22.5rem;
  ::placeholder {
    color: ${colors.gray3};
  }
`;

const IconWrapper = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
  background: transparent;
  border-width: initial;
  border-style: none;
  border-color: initial;
  border-image: initial;
  outline: none;
  border-radius: 50%;
`;

export default function SearchBar({
  placeholder,
  text,
  onChange,
  onClick,
}: Props): ReactElement {
  return (
    <Templete>
      <Input
        autoFocus
        onClick={onClick}
        placeholder={placeholder}
        value={text}
        onChange={onChange}        
      />
      <IconWrapper>
        <Icon icon="Search" size={16} />
      </IconWrapper>
    </Templete>
  );
}

SearchBar.defaultProps = {
  placeholder: '구독할 웹툰을 검색해보세요',
} as Partial<Props>;
