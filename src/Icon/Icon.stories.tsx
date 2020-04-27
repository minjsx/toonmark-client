import Icon, { iconTypes } from './Icon';
import React, { ReactElement } from 'react';
import styled from 'styled-components';

export default {
  component: Icon,
  title: 'components|Icon',
};

const IconList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  li {
    box-sizing: border-box;
    width: 25%;
    padding: 1rem;
    display: flex;
    align-items: center;
    svg {
      margin-right: 1rem;
    }
  }
`;

export const icon = (): ReactElement => <Icon icon="FavorFill" />;

icon.story = {
  name: 'Default',
};

export const customSize = (): ReactElement => (
  <Icon icon="FavorFill" size="1rem" />
);

export const customColor = (): ReactElement => (
  <Icon icon="FavorFill" color="red" />
);

export const customizedWithStyle = (): ReactElement => (
  <Icon icon="FavorFill" color="blue" size="4rem" />
);

export const listOfIcons = (): ReactElement => {
  return (
    <IconList>
      {iconTypes.map((icon) => (
        <li key={icon}>
          <Icon icon={icon} />
          {icon}
        </li>
      ))}
    </IconList>
  );
};
