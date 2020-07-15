import React from 'react';
import styled, { keyframes } from 'styled-components';

const typingAni = keyframes`
    from{width: 0; height: 0.916rem;}
    to{width: 100%; height: 0.916rem;}
`;

const TypingBlock = styled.aside`
  position: absolute;
  top: 70%;
  left: 65%;
  transition: 1s ease-in-out;
`;

const TypingList = styled.ul`
  li {
    font-size: 0.708rem;
    color: ${({ theme }) => theme.typingColor};
    line-height: 100%;
    letter-spacing: 1px;
    width: 0;
    height: 0;
    overflow: hidden;
    white-space: nowrap;
    animation-name: ${typingAni};
    animation-duration: 3s;
    animation-timing-function: steps(50);
    animation-fill-mode: forwards;

    &:nth-child(1) {
      animation-delay: 0.5s;
    }

    &:nth-child(2) {
      animation-delay: 5.5s;
      padding-left: 0.833rem;
    }
    &:nth-child(3) {
      animation-delay: 9s;
      padding-left: 0.833rem;
    }
    &:nth-child(4) {
      animation-delay: 12.5s;
      padding-left: 1.666rem;
    }
    &:nth-child(5) {
      animation-delay: 16s;
      padding-left: 1.666rem;
    }
    &:nth-child(6) {
      animation-duration: 3.5s;
      animation-delay: 19.5s;
      animation-timing-function: steps(55);
      padding-left: 1.666rem;
    }
    &:nth-child(7) {
      animation-delay: 10.5s;
      padding-left: 0.833rem;
    }
    &:nth-child(8) {
      animation-delay: 4s;
    }

    strong {
      color: ${({ theme }) => theme.typingCode};
      font-weight: normal;
      &::after {
        content: '>';
        color: ${({ theme }) => theme.typingColor};
      }
      &::before {
        content: '<';
        color: ${({ theme }) => theme.typingColor};
      }
      &.end::before {
        content: '</';
      }
    }

    span {
      color: ${({ theme }) => theme.typingTit};
    }

    i {
      color: ${({ theme }) => theme.typingName};
    }
  }
`;

function Typing({ moveX, moveY }) {
  return (
    <TypingBlock style={{ transform: `translate( ${moveX}, ${moveY})` }}>
      {/* // <TypingBlock style={{ marginLeft: moveX, marginTop: moveY }}> */}
      <TypingList>
        <li>
          <strong>
            YesRoad <span>name</span>=<i>"Kim Eung Gil"</i>
          </strong>
        </li>
        <li>I am a Frontend developer</li>
        <li>
          <strong>SkillSet</strong>
        </li>
        <li>
          <strong>JavaScript</strong> ES6{' '}
          <strong className="end">JavaScript</strong>
        </li>
        <li>
          <strong>React</strong> React, Redux, Hooks{' '}
          <strong className="end">React</strong>
        </li>
        <li>
          <strong>Other</strong> Webpack4, Html5, Sass, Jquery{' '}
          <strong className="end">Other</strong>
        </li>
        <li>
          <strong className="end">SkillSet</strong>
        </li>
        <li>
          <strong className="end">YesRoad</strong>
        </li>
      </TypingList>
    </TypingBlock>
  );
}

export default Typing;
