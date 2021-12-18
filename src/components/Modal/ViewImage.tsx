import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  return (
    <Modal isOpen={ isOpen } onClose={ onClose } isCentered={ true }>
      <ModalOverlay />
      <ModalContent
        mx="auto"
        w="auto"
        h="auto"
        bg="pGray.800"
        maxW={ ['450px', '750px', '900px'] }
        maxH={ ['300px', '500px', '600px'] }
      >
        <ModalBody padding="0">
          <Image src={ imgUrl }></Image>
        </ModalBody>
        <ModalFooter backgroundColor="pGray.800" borderBottomRadius="1rem" w="full" justifyContent="flex-start">
          <Link href={ imgUrl } target="_blank" isExternal>Abrir original</Link>
        </ModalFooter>
      </ModalContent>
    </Modal >
  )
}
