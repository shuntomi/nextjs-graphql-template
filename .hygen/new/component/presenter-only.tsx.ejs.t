---
to: "<%= have_container ? null : `${targetDir}/presenter.tsx` %>"
---

import React from 'react';
import styled from 'styled-components';

type IProps = {
  name: string;
};

export const Presenter = (props: IProps): JSX.Element => {
  const { name } = props;

  return (
    <>
      <Title>{`Hello ${name}!`}</Title>

      {/* NOTE: 子コンポーネントへのバケツリレーサンプル */}
      {/* <ChildComponent */}
      {/* count={props.count}  */}
      {/* /> */}
    </>
  );
};

// NOTE: styled-component
const Title = styled.h2`
  font-weight: bold;
`;
