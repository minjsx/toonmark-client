import { RouteComponentProps } from 'react-router-dom';
import React, { ReactElement } from 'react';
import styled from 'styled-components';

import HeaderTemplate from '../templete/HeaderTemplate';

interface MatchParams {
  platform: string;
}

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  align-self: stretch;
  overflow: scroll;
  background: ${(props): string => props.theme.background};
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

function Platform({
  match,
  location,
}: RouteComponentProps<MatchParams>): ReactElement {
  const { platform } = match.params;
  return (
    <Container>
      <HeaderTemplate />
      <span>{platform}</span>
    </Container>
  );
}

Platform.defaultProps = {} as Partial<MatchParams>;

export default Platform;
