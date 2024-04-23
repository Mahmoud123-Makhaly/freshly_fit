'use client';

import React from 'react';
import { Modal, ModalBody } from 'reactstrap';

interface IModalProps {
  children: React.ReactNode;
  toggleShow: boolean;
  size?: 'sm' | 'lg' | 'xl' | 'md';
}
const Modals = (props: IModalProps) => {
  const { children, toggleShow, size } = props;

  return (
    <Modal isOpen={toggleShow} centered className="modal" size={size}>
      <ModalBody>{children}</ModalBody>
    </Modal>
  );
};

export default Modals;
