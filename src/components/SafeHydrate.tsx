import React from 'react';

// NOTE: NextJSをCSRするためのコンポーネント
// See: https://ryotarch.com/javascript/react/next-js-with-csr/

interface SafeHydrateProps {
  children: JSX.Element | JSX.Element[];
}
const SafeHydrate = (props: SafeHydrateProps) => <>{props.children}</>;

export { SafeHydrate };
