import {
  Avatar,
  Box,
  Button,
  Flex,
  HStack,
  Image,
  Link,
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
import { useRef } from "react";

const TeamMember = ({ name, image, description, job }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const src = image.fields.file.url;
  const ref = useRef();
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
            src={src}
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
              <Avatar src={src} />
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
TeamMember.defaultProps = {
  image: { fields: { file: { url: null } } },
};
export default TeamMember;
