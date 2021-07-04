import React, { useCallback, useState } from 'react';
import { Presenter } from './presenter';

type IProps = {
  incrementNumber: number;
};

export const Container: React.VFC<IProps> = (props) => {
  const { incrementNumber } = props;

  // NOTE: Add business logic
  const [count, setCount] = useState(0);
  const onClick = useCallback(
    () => setCount(count + incrementNumber),
    [count, incrementNumber]
  );

  return (
    <Presenter
      count={count}
      incrementNumber={incrementNumber}
      onClick={onClick}
    />
  );
};
