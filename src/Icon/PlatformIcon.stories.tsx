import PlatformIcon, { PlatformIconTypes } from './PlatformIcon';
import React, { ReactElement } from 'react';
import styled from 'styled-components';

export default {
  component: PlatformIcon,
  title: 'components|PlatformIcon',
};

const IconListWrapper = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  li {
    box-sizing: border-box;
    width: 25%;
    padding: 1rem;
    display: flex;
    align-items: center;
    img {
      margin-right: 1rem;
    }
  }
`;

export const platformIcon = (): ReactElement => <PlatformIcon icon="naver" />;

platformIcon.story = {
  name: 'Default',
};

export const customSize = (): ReactElement => (
  <PlatformIcon icon="naver" size="2rem" />
);

export const listOfPlatformIcons = (): ReactElement => {
  return (
    <IconListWrapper>
      {PlatformIconTypes.map((icon) => (
        <li key={icon}>
          <PlatformIcon icon={icon} />
          {icon}
        </li>
      ))}
    </IconListWrapper>
  );
};
