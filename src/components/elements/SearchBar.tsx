import React, { ReactElement } from 'react';
import Icon from '../../Icon/Icon';
import { Typhography } from '../../Typhography';
import { colors } from '../../theme';
import styled from 'styled-components';
import { useInput } from '../../hooks';

interface Props {
  placeholder?: string;
  text?: string;
  onChange?: (event?: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: (event?: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

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

const Templete = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 2.5rem;
  width: 30rem;
  border-radius: 0.625rem;
  background: ${(props): string => props.theme.secondaryBackground};
  padding-left: 1.125rem;
  padding-right: 0.75rem;
`;

export default function SearchBar({
  placeholder,
  text,
  onChange,
  onClick,
}: Props): ReactElement {
  const { text: value, onChange: onChangeText } = useInput(); // 임시로 달아놓음 추후 부모로 옮겨야함
  return (
    <Templete>
      <Input
        onClick={onClick}
        placeholder={placeholder}
        value={value}
        onChange={onChangeText}
      />
      <Icon icon="Search" size={'1rem'} />
    </Templete>
  );
}

SearchBar.defaultProps = {
  placeholder: '구독할 웹툰을 검색해보세요',
} as Partial<Props>;