import React from 'react';
import styled, { keyframes } from 'styled-components';

const textAni = keyframes`
    0% {
      transform: translateY(-50px);
      opacity: 0;
      clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 80%);
  }
  20% {
      transform: translateY(0);
      opacity: 1;
      clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 15%);
  }
  80% {
       transform: translateY(0);
       opacity: 1;
      clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 15%);
  }
  100% {
       transform: translateY(50px);
       opacity: 0;
      clip-path: polygon(100% 0, 100% -0%, 0 100%, 0 100%);
    
  }
`;

const textAni02 = keyframes`
  0% {
    transform: translateY(-50px);
    opacity: 0;
    clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 80%);
    }
  20% {
    transform: translateY(0);
    opacity: 1;
    clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 15%);
  }
  80% {
    transform: translateY(0);
    opacity: 1;
    clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 15%);
  }
  100% {
    transform: translateY(0);
    opacity: 1;
    clip-path: polygon(100% 0,100% 100%,0 100%,0 0%)
  }
`;

const MobileMain = styled.aside`
  width: 100%;
  position: absolute;
  top: 8.5rem;
  left: 7.5rem;
  z-index: 5;

  @media only screen and (max-width: 640px) {
    top: 12.5rem;
    left: 3.333rem;
  }
`;

const TitText = styled.h3`
  font-size: 2.708rem;
  line-height: 3.75rem;
  position: absolute;
  top: 0;
  left: 0;
  span {
    width: 100%;
    text-align: left;
    display: block;
    color: ${({ theme }) => theme.primaryColor};
    clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 80%);
    transform: translateY(-50px);
    opacity: 0;
    animation-timing-function: ease;
    animation-duration: 4s;
    animation-fill-mode: forwards;
    font-weight: 900;
    &.titTop {
      animation-name: ${textAni};
      animation-delay: 0.6s;

      &:first-child {
        animation-delay: 0.7s;
      }
      &:last-child {
        color: ${({ theme }) => theme.subColor};
        animation-delay: 0.5s;
      }
    }

    &.titBottom {
      animation-name: ${textAni02};
      animation-delay: 5.1s;
      &:first-child {
        animation-delay: 5.2s;
      }
      &:last-child {
        color: ${({ theme }) => theme.subColor};
        animation-delay: 5s;
      }
    }
  }
`;

function TypingMobile() {
  return (
    <MobileMain>
      <TitText>
        <span className="titTop">HI,</span>
        <span className="titTop">KIM EUNG GIL</span>
        <span className="titTop">PROFILE</span>
      </TitText>
      <TitText>
        <span className="titBottom">I'M</span>
        <span className="titBottom">WEB FRONTEND</span>
        <span className="titBottom">DEVELOPER</span>
      </TitText>
    </MobileMain>
  );
}

export default TypingMobile;
