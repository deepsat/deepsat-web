import React from "react";

import {
  Avatar,
  Box,
  Flex,
  HStack,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { useClickable } from "@chakra-ui/clickable";
import RTF from "./rtf";

const TeamMember = ({name, description, image, job}) => {
  const imgProps = {...image.gatsbyImageData.images.sources[0], src: image.gatsbyImageData.images.fallback.src , title: image.title}

  const { isOpen, onOpen, onClose } = useDisclosure();
  
  const clickable = useClickable({
    transition: "transform ease-in-out 200ms",
    _hover: { transform: "scale(1.1)", zIndex: "docked" },
    _active: { transform: "scale(1.1)", zIndex: "docked" },
    onClick: onOpen,
  });
  return (
    <>
      <Box {...clickable}>
        <Stack
          direction={{ base: "row", md: "column" }}
          align="center"
          shadow="lg"
          spacing="4"
          padding="4"
          bg="white"
          borderRadius="base"
          w="full"
          h="full"
        >
          <Image
            {...imgProps}
            w={{ base: 24, md: 48 }}
            objectFit="cover"
            borderRadius="full"
            shadow="lg"
          />
          <VStack spacing="2" w="full">
            <Text fontSize="lg" textAlign="center">
              {name}
            </Text>
            <Text color="grey" textAlign="center">
              {job}
            </Text>
          </VStack>
        </Stack>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <HStack spacing="4">
              <Avatar {...imgProps} />
              <Flex direction="column">
                <Text fontSize="lg" fontWeight="initial">
                  {name}
                </Text>
                <Text color="grey" fontSize="initial" fontWeight="normal">
                  {job}
                </Text>
              </Flex>
            </HStack>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <RTF>{description}</RTF>
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default TeamMember;
