import { boolean, number, text, withKnobs } from '@storybook/addon-knobs';
import Card from './Card';
import React from 'react';
import { action } from '@storybook/addon-actions';
import styled from 'styled-components';

export default {
  title: 'components|Card',
  component: Card,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: '정보를 효율적이게 전달해주는 "카드" 컴포넌트',
  },
};

const Wrapper = styled.div`
  height: 20.25rem;
  width: 13.375rem;
`;

const Layout = styled.div`
  display: grid;
  grid-gap: 1.25rem 1rem;
  grid-template-columns: repeat(4, 13.375rem);
  grid-auto-rows: minmax(20.25rem, auto);
`;

export const standard = (): React.ReactElement => {
  const onCardClick = action('CardClick');
  const onHeartIconClick = action('HeartClick');
  const title = text('Title', '오늘부터 0촌! - 진돌히디의 우당탕 결혼일기');
  const favor = boolean('Favor', false);
  return (
    <Wrapper>
      <Card
        title={title}
        onCardClick={onCardClick}
        onHeartClick={onHeartIconClick}
        favor={favor}
      />
    </Wrapper>
  );
};

function makeArrayForCount(count: number): number[] {
  const array: number[] = [];
  if (count > 0) {
    for (let i = 0; i < count; i++) {
      array.push(i);
    }
  }
  return array;
}

export const widthLayout = (): React.ReactElement => {
  const cardCount = number('Card Count', 8);
  const arr = makeArrayForCount(cardCount);
  return (
    <Layout>
      {arr.map((idx) => (
        <Card key={idx} />
      ))}
    </Layout>
  );
};

standard.story = {
  name: 'Default',
};
