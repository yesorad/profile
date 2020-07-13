import React from 'react';
import styled from 'styled-components';

const Template = styled.section`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  overflow: hidden;
  background-color: ${({ theme }) => theme.bgColor};
  position: relative;
  transition: background-color 0.3s;
`;

function Layout({ children }) {
  return <Template>{children}</Template>;
}

export default Layout;
