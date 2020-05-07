import styled from 'styled-components';

export const ButtonPrimary = styled('button')`
  display: flex;
  /* width: 100%;
  height: 100%; */
  width: 7.5rem;
  height: 2.5rem;

  border-radius: 1rem;
  border-width: 0px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: ${(props): string => props.theme.btnPrimary};
  opacity: 1;
  /* transition: opacity 0.2s; */

  &:hover {
    opacity: 0.5;
  }
  &:active {
    opacity: 0.5;
  }
`;

export const ButtonPrimaryLight = styled('button')`
  display: flex;
  /* width: 100%;
  height: 100%; */
  width: 7.5rem;
  height: 2.5rem;

  border-radius: 1rem;
  border-width: 0px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: ${(props): string => props.theme.btnPrimaryLight};
  opacity: 1;
  /* transition: opacity 0.2s; */

  &:hover {
    opacity: 0.5;
  }
  &:active {
    opacity: 0.5;
  }
`;
