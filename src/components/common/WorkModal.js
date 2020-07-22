import React from 'react';
import styled from 'styled-components';
import { GrClose } from 'react-icons/gr';

const ModalBlock = styled.article`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalInner = styled.div`
  max-width: calc(100% - 2.083rem);
  max-height: 29.166rem;
  border: 1px solid #fcfcfc;
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
  top: 0.416rem;
  right: 0.416rem;
  cursor: pointer;

  svg {
    width: 1.666rem;
    height: 1.666rem;
  }
`;

function WorkModal({ works, item, onHide }) {
  const modal = works[item.key - 1];
  return (
    <ModalBlock>
      <ModalInner>
        <img src={modal.modalImg} alt={modal.title} />
        <Close onClick={onHide}>
          <GrClose />
        </Close>
      </ModalInner>
    </ModalBlock>
  );
}

export default WorkModal;
