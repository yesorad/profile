import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

const MoHeader = styled.header`
  position: absolute;
  top: 2.2rem;
  right: 1.041rem;
  z-index: 10;
  width: 3.333rem;
  border-radius: 5px;
  height: 3.333rem;
  background: ${({ theme }) => theme.menuBg};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Menu = styled.div`
  position: static;
  cursor: pointer;
  right: 0.625rem;
  transition: all 0.3s;
  border-radius: 5px;
  z-index: 100;
  span {
    width: 2.5rem;
    height: 0.312rem;
    background: #fff;
    display: block;
    transition: all 0.3s;
    border-radius: 0.312rem;
    & + span {
      margin-top: 0.416rem;
    }
    ${(props) =>
      props.open &&
      css`
        &:nth-child(1) {
          transform-origin: 0.25rem 0;
          transform: rotate(45deg) translate(5px, -3px);
          background: ${({ theme }) => theme.subColor};
        }
        &:nth-child(2) {
          transform: rotate(135deg) translate(1px, 1px);
          background: ${({ theme }) => theme.subColor};
        }
        &:nth-child(3) {
          transform-origin: bottom right;
          transform: rotate(45deg);
          opacity: 0;
          background: ${({ theme }) => theme.subColor};
        }
      `}
  }
`;

const Navi = styled.nav`
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 1;
  position: fixed;
  background: rgba(0, 0, 0, 0.7);
  transition: all 0.3s;
  display: none;
  opacity: 0;
  justify-content: center;
  align-items: center;
  text-align: center;

  ${(props) =>
    props.open &&
    css`
      display: fixed;
      opacity: 1;
    `}
  ul li {
    line-height: 3.125rem;
    font-size: 1.562rem;
    transition: all 0.3s;
    font-weight: bold;
    a {
      color: #fff;
      text-decoration: none;
      transition: all 0.5s;
      &:hover,
      &.active {
        color: ${({ theme }) => theme.subColor};
      }
    }
  }
`;

function HeaderMobile() {
  const [open, setOpen] = useState(false);
  const onToggle = () => setOpen(!open);
  return (
    <>
      <MoHeader>
        <Menu open={open} onClick={onToggle}>
          <span></span>
          <span></span>
          <span></span>
        </Menu>
      </MoHeader>
      <Navi open={open}>
        <ul onClick={onToggle}>
          <li>
            <NavLink to="/" activeClassName="active" exact>
              HOME
            </NavLink>
          </li>
          <li>
            <a href="#;">ABOUT</a>
          </li>
          <li>
            <NavLink to="/portfolio" activeClassName="active">
              PORTFOLIO
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName="active">
              CONTACT
            </NavLink>
          </li>
          <li>
            <a href="//github.com/yesorad">GITHUB</a>
          </li>
        </ul>
      </Navi>
    </>
  );
}

export default HeaderMobile;
