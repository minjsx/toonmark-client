import React from 'react';
import { colors } from '../../theme';
import styled from 'styled-components';

const HeaderLayout = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 3.75rem;
  padding-left: 8.75rem;
  background-color: ${colors.orange1};
`;

interface Props {
  children?: React.ReactNode;
}

export default function Header({ children }: Props): React.ReactElement {
  return <HeaderLayout>{children}</HeaderLayout>;
}
