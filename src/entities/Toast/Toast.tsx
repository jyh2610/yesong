import { ModalContent, Modal, ModalBody } from '@nextui-org/react';

interface Props {
  text: string;
  type?: 'success' | 'fail';
  visible: boolean;
}

export function Toast({ text, type, visible }: Props) {
  return (
    <Modal isOpen={visible} placement="bottom" backdrop="transparent">
      <ModalContent>
        <>
          <ModalBody>
            <p>{text}</p>
          </ModalBody>
        </>
      </ModalContent>
    </Modal>
  );
}
