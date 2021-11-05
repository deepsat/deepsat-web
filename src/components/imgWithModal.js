import React from "react";

import { useClickable } from "@chakra-ui/clickable";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  useDisclosure,
  Img,
} from "@chakra-ui/react";

const ImgWithModal = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const clickable = useClickable({
    onClick: onOpen,
  });
  return (
    <>
      <Img {...props} {...clickable} />

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent maxW="95vw" maxH="95vh">
          <ModalCloseButton top="-3em" color="white" />
          <Img src={props.src} alt={props.alt} />
        </ModalContent>
      </Modal>
    </>
  );
};

export default ImgWithModal;
