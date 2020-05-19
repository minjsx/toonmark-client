import React from 'react';
import { colors } from '../../theme';
import styled from 'styled-components';

const Layout = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  height: 3.75rem;
  background-color: ${colors.orange1};
`;

interface Props {
  children?: React.ReactNode;
}

export default function HeaderLayout({ children }: Props): React.ReactElement {
  return <Layout>{children}</Layout>;
}
