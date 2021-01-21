import React from 'react';
import styled from 'styled-components';
import { FiMonitor } from 'react-icons/fi';
import { BsLink45Deg } from 'react-icons/bs';

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
  height: auto;
  border-radius: 0.208rem;
  margin-bottom: 3%;
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    display: block;
    transition: all 0.3s;
    transform: scale(1);
  }

  aside {
    background: rgba(0, 255, 255, 0.6);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: all 0.3s;
    opacity: 0;

    figure {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;

      strong {
        font-size: 18px;
        display: block;
        padding-bottom: 0.833rem;
        color: #fff;
      }

      svg {
        width: 24px;
        height: 24px;
        color: #fff;
        padding: 5px;
        display: inline-block;
        margin: 0 5px;
        border: 1px solid #fff;
        border-radius: 0.208rem;
        cursor: pointer;
      }
    }
  }

  &:hover {
    img {
      transform: scale(1.2);
    }
    aside {
      opacity: 1;
    }
  }
`;

function Work({ works, onItem }) {
  return (
    <WorkBlock>
      {works.map((work) => (
        <WorkItem key={work.id}>
          <img src={work.thumb} alt={work.title} />
          <aside>
            <figure>
              <strong>{work.title}</strong>
              <FiMonitor onClick={() => onItem(work.id)} />
              {work.link && (
                <a href={work.link} target="blank">
                  <BsLink45Deg />
                </a>
              )}
            </figure>
          </aside>
        </WorkItem>
      ))}
    </WorkBlock>
  );
}

export default Work;
