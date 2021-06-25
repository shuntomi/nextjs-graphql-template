---
to: "<%= have_container ? `${targetDir}/presenter.tsx` : null %>"
---

import React from 'react';
import styled from 'styled-components';

type IProps = {
  incrementNumber: number;
  count: number;
  onClick: () => void;
};

export const Presenter = (props: IProps): JSX.Element => {
  const { incrementNumber, count, onClick } = props;

  return (
    <>
      <Title>{`count number: ${count}`}</Title>
      <button onClick={onClick} type={'button'}>{`+${incrementNumber}`}</button>

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
