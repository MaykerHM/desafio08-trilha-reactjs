import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link,
} from '@chakra-ui/react';
import { Card } from '../Card';

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
  // TODO MODAL WITH IMAGE AND EXTERNAL LINK
  return (
    <Modal isOpen={ isOpen } onClose={ onClose } isCentered={ true }>
      <ModalOverlay />
      <ModalContent width="fit-content" height="fit-content">
        <ModalBody padding="0" >
          <Image maxH="600px" maxW="900px" src={ imgUrl }></Image>
        </ModalBody>
        <ModalFooter backgroundColor="pGray.800">
          <Link href={ imgUrl } target="_blank" justifyContent="flex-start" w="full" isExternal>Abrir original</Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
