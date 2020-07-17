import React from 'react';
import { AiOutlineWarning } from 'react-icons/ai';
import styled from 'styled-components';

const WarningBlock = styled.article`
  text-align: center;
  padding-top: 5rem;
  svg {
    width: 5rem;
    height: 5rem;
    color: ${({ theme }) => theme.subColor};
  }
  p {
    font-size: 3.75rem;
    font-weight: bold;
    padding-top: 1.25rem;
    color: ${({ theme }) => theme.primaryColor};
    span {
      color: ${({ theme }) => theme.subColor};
    }
  }
`;

function NotFound() {
  return (
    <WarningBlock>
      <AiOutlineWarning />
      <p>
        <span>NOT</span> FOUND
      </p>
    </WarningBlock>
  );
}

export default NotFound;
