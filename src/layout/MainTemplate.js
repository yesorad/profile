import React from 'react';
import styled from 'styled-components';

const MainLayout = styled.section`
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

function MainTemplate({ children }) {
  return <MainLayout>{children}</MainLayout>;
}

export default MainTemplate;
