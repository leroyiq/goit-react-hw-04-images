import { Overlay, ModalContainer } from './Modal.styled';
import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ addImg, toggleModal }) => {
  useEffect(() => {
    window.addEventListener('keydown', addKeyDown);
    return () => {
      window.removeEventListener('keydown', addKeyDown);
    };
  });

  const addKeyDown = evt => {
    if (evt.code === 'Escape') {
      toggleModal();
    }
  };
  const addOverlay = evt => {
    if (evt.currentTarget === evt.target) {
      toggleModal();
    }
  };

  return createPortal(
    <Overlay onClick={addOverlay}>
      <ModalContainer>
        <img src={addImg} alt="Img" />
      </ModalContainer>
    </Overlay>,
    modalRoot
  );
};

Modal.prototype = {
  toggleModal: PropTypes.func.isRequired,
  addImg: PropTypes.string.isRequired,
};
