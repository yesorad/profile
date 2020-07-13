import React from 'react';
import styled from 'styled-components';

const MainBlock = styled.section`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  position: relative;
  z-index: 0;
`;

const ColorBlock = styled.aside`
  background: ${({ theme }) => theme.subColor};
  position: fixed;
  height: 200%;
  width: 100%;
  transform: rotate(-15deg);
  left: -83%;
  top: -50%;
`;
const TemplateBlock = styled.article`
  width: calc(100% - 3.75rem);
  height: calc(100vh - 3.75rem);
  background: ${({ theme }) => theme.gradient};
  z-index: 111;
  border-radius: 0.937rem;
  position: absolute;
  top: 50%;
  left: 1.875rem;
  transform: translateY(-50%);
  box-shadow: ${({ theme }) => theme.shadow};
`;

function Main() {
  return (
    <MainBlock>
      <ColorBlock />
      <TemplateBlock />
    </MainBlock>
  );
}

export default Main;
