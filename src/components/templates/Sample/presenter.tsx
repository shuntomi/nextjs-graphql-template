import React from 'react';
import styled from 'styled-components';
import { Container } from '@mui/material';

export const Presenter: React.VFC = () => (
  <StyledContainer>
    <h1>サンプルページ</h1>

    <div>
      <ul>
        <li>Material UI</li>
        <li>Styled Component</li>
      </ul>
    </div>
  </StyledContainer>
);

const StyledContainer = styled(Container)`
  width: 80vw;
  height: 50vh;
  margin: auto;
  padding: 0;
  background-color: white;
`;
