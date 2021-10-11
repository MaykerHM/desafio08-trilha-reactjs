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
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalBody padding="0">
          <Image src={imgUrl} w="full" ></Image>
        </ModalBody>
        <ModalFooter>
          <Link href={imgUrl} target="_blank"  isExternal>Abrir original</Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
