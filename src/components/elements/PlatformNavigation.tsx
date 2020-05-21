import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import PlatformIcon, { PlatformIconTypes } from '../../Icon/PlatformIcon';
import Icon from '../../Icon/Icon';

interface Props {}

const Wrapper = styled.ul`
  display: flex;
  flex-direction: row;
  margin: 0;
  list-style-type: none;
  justify-content: space-between;
  align-items: center;
`;

const List = styled.li`
  border-radius: 1.25rem;
`;

const IconWrapper = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.5rem;
  height: 2.5rem;
  cursor: pointer;
  background: rgba(0, 0, 0, 0.5);
  outline: none;
  border-radius: 50%;
`;

function PlatformNavigation({}: Props): ReactElement {
  return (
    <Wrapper>
      <IconWrapper>
        <Icon icon="Search" color="white" size={16} />
      </IconWrapper>
      {PlatformIconTypes.map((platform, index) => (
        <List key={index}>
          <Link to={`/platform/${platform.toLowerCase()}`}>
            <PlatformIcon icon={platform} size={40} IsEllipse />
          </Link>
        </List>
      ))}
    </Wrapper>
  );
}

PlatformNavigation.defaultProps = {} as Partial<Props>;

export default PlatformNavigation;
