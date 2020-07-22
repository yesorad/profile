import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  MdHome,
  MdLocalPostOffice,
  MdAccountCircle,
  MdWork,
} from 'react-icons/md';
import { AiFillGithub } from 'react-icons/ai';
import styled from 'styled-components';

const HeaderBlock = styled.div`
  position: fixed;
  height: 100%;
  right: 0;
  z-index: 100;
`;

const HeaderPc = styled.header`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 4.166rem;
  display: block;
  transition: all 0.3s;
`;

const NavBlock = styled.ul`
  li {
    height: 2.083rem;
    line-height: 2.083rem;
    text-align: right;
    margin: 0.416rem 0;
    white-space: nowrap;
    position: relative;

    span {
      font-size: 0.625rem;
      display: inline-block;
      color: #fff;
      background: ${({ theme }) => theme.subColor};
      border-radius: 1.25rem 0 0 1.25rem;
      padding: 0 1.041rem 0 1.25rem;
      position: absolute;
      top: 0.083rem;
      right: 1.041rem;
      opacity: 0;
      height: 2.083rem;
      transition: 0.3s;
    }
    a {
      width: 2.083rem;
      height: 2.083rem;
      background: ${({ theme }) => theme.menuBg};
      text-align: center;
      border-radius: 50%;
      color: ${({ theme }) => theme.menuColor};
      font-size: 0.833rem;
      display: inline-block;
      z-index: 10;
      position: relative;
      transition: 0.3s;

      &.active {
        color: #fff;
        background: ${({ theme }) => theme.subColor};
      }

      svg {
        vertical-align: middle;
      }
    }
    &:hover {
      a {
        color: #fff;
        background: ${({ theme }) => theme.subColor};
      }
      span {
        opacity: 1;
      }
    }
  }
`;

function Header() {
  return (
    <HeaderBlock>
      <HeaderPc>
        <NavBlock>
          <li>
            <span>HOME</span>
            <NavLink to="/" activeClassName="active" exact>
              <MdHome />
            </NavLink>
          </li>
          <li>
            <span>ABOUT</span>
            <a
              href="//drive.google.com/file/d/1IpGu_HEqTY-tYilR8Tw6IM8IuwwvEphi/view"
              target="blank"
            >
              <MdAccountCircle />
            </a>
          </li>
          <li>
            <span>PORTFOLIO</span>
            <NavLink to="/work" activeClassName="active">
              <MdWork />
            </NavLink>
          </li>
          <li>
            <span>CONTACT</span>
            <NavLink to="/contact" activeClassName="active">
              <MdLocalPostOffice />
            </NavLink>
          </li>
          <li>
            <span>GITHUB</span>
            <a href="//github.com/yesorad" target="blank">
              <AiFillGithub />
            </a>
          </li>
        </NavBlock>
      </HeaderPc>
    </HeaderBlock>
  );
}

export default Header;
