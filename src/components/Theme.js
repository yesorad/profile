import React from 'react';
import styled from 'styled-components';
import { RiMoonClearLine, RiSunLine } from 'react-icons/ri';

const ThemeBlock = styled.aside`
  width: 60px;
  height: 30px;
  border-radius: 50px;
  background: ${({ theme }) => theme.subColor};
  position: absolute;
  top: 2.083rem;
  right: 4.166rem;
  left: auto;
  box-sizing: border-box;
  transition: all 0.3s;
  cursor: pointer;
  z-index: 10;

  @media only screen and (max-width: 960px) {
    left: 2.566rem;
    right: auto;
    width: 50px;
    height: 30px;
    top: 2.5rem;
  }
`;

const ModeIcon = styled.div`
  width: 100%;
  height: 100%;
  text-align: ${({ theme }) => theme.position};

  svg {
    color: #000;
    width: 20px;
    height: 20px;
    padding: 5px;
    background: #fff;
    border-radius: 50%;

    @media only screen and (max-width: 960px) {
      width: 25px;
      height: 25px;
      padding: 2px;
    }
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
