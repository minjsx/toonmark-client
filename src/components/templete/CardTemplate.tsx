import React, { ReactElement } from 'react';
import styled from 'styled-components';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { colors } from '../../theme';
interface Props {}

export default function CardTemplate(props: Props): ReactElement {
  return (
    <SkeletonTheme color={colors.gray4} highlightColor={colors.gray5}>
      <Skeleton duration={1.5} width={'13.375rem'} height={'20.25rem'} />
    </SkeletonTheme>
  );
}

CardTemplate.defaultProps = {} as Partial<Props>;
