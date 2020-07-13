import React from 'react';
import styled from 'styled-components';

const WorkBlock = styled.article`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 0.416rem;

  @media only screen and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (max-width: 640px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const WorkItem = styled.div`
  width: 100%;
  height: 8.333rem;
  background: #ff0;
  border-radius: 0.208rem;
  margin-bottom: 3%;
`;

function Portfolio() {
  return (
    <WorkBlock>
      <WorkItem />
      <WorkItem />
      <WorkItem />
      <WorkItem />
      <WorkItem />
    </WorkBlock>
  );
}

export default Portfolio;
