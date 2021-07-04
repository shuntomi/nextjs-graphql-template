import styled from 'styled-components';
import React from 'react';

export default function Index(): JSX.Element {
  return (
    <>
      <Title>ログイン画面</Title>
    </>
  );
}

// NOTE: styled-component
const Title = styled.h1`
  color: slategray;
  font-size: xx-large;
`;
