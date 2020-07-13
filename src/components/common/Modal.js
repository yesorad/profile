import React from 'react';
import styled, { keyframes } from 'styled-components';

const modalAni = keyframes`
  0% {
    transform: scale(0.8);
    opacity: 0;
  }
  40% {
    transform: scale(1.15);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

const Background = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  animation-duration: 0.5s;
  animation-timing-function: ease-in-out;
  animation-name: ${modalAni};
  animation-fill-mode: forwards;
`;

const DialogBlock = styled.div`
  max-width: 14.583rem;
  width: 100%;
  padding: 1.874rem 0.833rem 0.833rem;
  background: #fff;
  border-radius: 0.208rem;
  text-align: center;
  box-shadow: 10px 0px 22px 0px rgba(0, 0, 0, 0.3);
  p {
    font-size: 1.083rem;
  }
`;

const ButtonGroup = styled.div`
  margin-top: 1.666rem;
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  width: 4.166rem;
  line-height: 1.458rem;
  background: ${({ theme }) => theme.subColor};
  border: none;
  border-radius: 4px;
  color: ${({ theme }) => theme.primaryColor};
  font-size: 0.75rem;
  cursor: pointer;
`;

function Modal({ text, onToggle }) {
  return (
    <Background>
      <DialogBlock>
        <p>{text}</p>
        <ButtonGroup>
          <Button onClick={() => onToggle()}>확인</Button>
        </ButtonGroup>
      </DialogBlock>
    </Background>
  );
}

export default Modal;
