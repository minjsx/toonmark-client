import React, { ReactElement } from 'react';
import styled, { FlattenInterpolation, ThemeProps } from 'styled-components';
import { Typhography } from '../../Typhography';

export type FontType = keyof typeof Typhography;

const Span = styled.span<{
  fontStyle: FlattenInterpolation<ThemeProps<FontType>>;
  color?: string;
}>`
  ${(props): FlattenInterpolation<ThemeProps<FontType>> =>
    props.fontStyle && props.fontStyle};
  color: ${(props): string => props.color && props.color};
`;

interface Props {
  text?: string;
  fontType?: FontType;
  color?: string;
}

function Label({ fontType, text, color }: Props): ReactElement {
  const fontStyle: FlattenInterpolation<ThemeProps<FontType>> =
    Typhography[fontType];
  return (
    <Span fontStyle={fontStyle} color={color}>
      {text}
    </Span>
  );
}

Label.defaultProps = {
  text: 'Label',
  fontType: 'H6Medium',
  color: 'black',
} as Partial<Props>;

export default Label;
