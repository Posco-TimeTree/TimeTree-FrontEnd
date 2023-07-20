import React from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';

const ModalCom = ({isOpen, toggle, body, size}) => {
  return (
    <Modal 
      isOpen={isOpen} 
      toggle={toggle} 
      size={size}
      centered>
      <ModalHeader toggle={toggle}>Time Tree</ModalHeader>
      <ModalBody>{body}</ModalBody>
    </Modal>
  );
};

export default ModalCom;