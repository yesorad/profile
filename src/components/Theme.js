import React from 'react';
import styled from 'styled-components';
import { RiMoonClearLine, RiSunLine } from 'react-icons/ri';

const ThemeBlock = styled.aside`
  width: 2.5rem;
  height: 1.25rem;
  border-radius: 4.166rem;
  background: ${({ theme }) => theme.subColor};
  position: absolute;
  top: 2.083rem;
  right: 4.166rem;
  box-sizing: border-box;
  cursor: pointer;
`;

const ModeIcon = styled.div`
  width: 100%;
  height: 100%;

  svg {
    color: #000;
    width: 0.833rem;
    height: 0.833rem;
    padding: 0.208rem;
    background: #fff;
    border-radius: 50%;
    transform: ${({ theme }) => theme.position};
  }
`;

function Theme({ theme, ToggleTheme }) {
  return (
    <ThemeBlock onClick={ToggleTheme}>
      <ModeIcon>{theme.isDark ? <RiMoonClearLine /> : <RiSunLine />}</ModeIcon>
    </ThemeBlock>
  );
}

export default Theme;
