import { ModalContent, Modal, ModalBody } from '@nextui-org/react';

interface Props {
  text: string;
  type?: 'success' | 'fail';
  visible: boolean;
}

export function Toast({ text, type, visible }: Props) {
  return (
    <Modal
      aria-label="toast modal"
      isOpen={visible}
      placement="bottom"
      backdrop="transparent"
    >
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
