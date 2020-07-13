import React from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import styled, { keyframes } from 'styled-components';

const LoadingAni = keyframes`
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  to {
    transform: translate(-50%, -50%) rotate(359deg);
  }
`;

const LoadingBlock = styled.aside`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation-duration: 2s;
  animation-timing-function: ease-in-out;
  animation-name: ${LoadingAni};
  animation-iteration-count: infinite;

  svg {
    width: 2.916rem;
    height: 2.916rem;
    color: #fff;
  }
`;

function Loading() {
  return (
    <LoadingBlock>
      <AiOutlineLoading3Quarters />
    </LoadingBlock>
  );
}

export default Loading;
