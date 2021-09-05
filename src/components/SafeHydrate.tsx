import React from 'react';

interface SafeHydrateProps {
  children: JSX.Element | JSX.Element[];
}
const SafeHydrate: React.VFC<SafeHydrateProps> = (props) => (
  <>{props.children}</>
);

export default SafeHydrate;
