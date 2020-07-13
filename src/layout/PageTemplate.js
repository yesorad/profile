import React from 'react';
import styled from 'styled-components';

const PageBlock = styled.section`
  max-width: 33.333rem;
  width: calc(100% - 2.083rem);
  margin: 0 auto;
  padding-top: 3.333rem;
  box-sizing: border-box;
`;

function PageTemplate({ children }) {
  return <PageBlock>{children}</PageBlock>;
}

export default PageTemplate;
