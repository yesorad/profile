import React from 'react';
import styled from 'styled-components';

const TitleBlock = styled.aside`
  position: relative;
  text-align: center;
  height: 4.583rem;
  margin-bottom: 1.25rem;

  span {
    font-size: 4.166rem;
    color: ${({ theme }) => theme.titleBg};
    font-weight: 900;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    letter-spacing: 0.4rem;
  }
  h2 {
    font-size: 2.333rem;
    font-weight: 900;
    line-height: 4.583rem;
    color: ${({ theme }) => theme.primaryColor};

    strong {
      color: ${({ theme }) => theme.subColor};
    }
  }
`;
function PageTitle({ title, colorTitle, subTitle }) {
  return (
    <TitleBlock>
      <h2>
        {title} <strong>{colorTitle}</strong>
      </h2>
      <span>{subTitle}</span>
    </TitleBlock>
  );
}

export default PageTitle;
