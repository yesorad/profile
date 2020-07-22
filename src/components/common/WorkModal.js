import React from 'react';
import styled from 'styled-components';
import { GrClose } from 'react-icons/gr';

const ModalBlock = styled.article`
  max-width: 33.333rem;
  width: calc(100% - 2.083rem);
  transform: translateX(-50%);
  max-height: 29.166rem;
  position: fixed;
  top: 0;
  left: 50%;
`;

const ModalInner = styled.div`
  width: 100%;
  max-height: 29.166rem;
  top: 6.25rem;
  border: 1px solid #1c1c1c;
  border-radius: 0.208rem;
  position: relative;
  overflow-y: auto;
  z-index: 50;

  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;

const Close = styled.span`
  position: absolute;
  top: 6.85rem;
  right: 1.25rem;
  cursor: pointer;
  z-index: 100;

  svg {
    width: 25px;
    height: 25px;
  }
`;

function WorkModal({ works, item, onHide }) {
  const modal = works[item.key - 1];
  return (
    <ModalBlock>
      <ModalInner>
        <img src={modal.modalImg} alt={modal.title} />
      </ModalInner>
      <Close onClick={onHide}>
        <GrClose />
      </Close>
    </ModalBlock>
  );
}

export default WorkModal;
