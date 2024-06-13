'use client';

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Checkbox,
  Input,
  Link
} from '@nextui-org/react';
import { useState } from 'react';
import { postLoginData } from './api';

export function LoginModal() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [id, setId] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const postLoginUserData = async (onClose: () => void) => {
    await postLoginData({ id, password });
    onClose();
  };

  return (
    <>
      <span onClick={onOpen} className=" text-brandSize font-medium">
        관리자
      </span>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
        <ModalContent>
          {onClose => (
            <>
              <ModalHeader className="flex flex-col gap-1">로그인</ModalHeader>
              <ModalBody>
                <Input
                  autoFocus
                  value={id}
                  onChange={e => setId(e.target.value)}
                  label="id"
                  placeholder="아이디를 입력하세요."
                  variant="bordered"
                />
                <Input
                  label="Password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="비밀번호를 입력하세요"
                  type="password"
                  variant="bordered"
                />
                {/* 개인정보찾기 */}
                {/* <div className="flex py-2 px-1 justify-between">
                  <Checkbox
                    classNames={{
                      label: 'text-small'
                    }}
                  >
                    Remember me
                  </Checkbox>
                  <Link color="primary" href="#" size="sm">
                    Forgot password?
                  </Link>
                </div> */}
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  닫기
                </Button>
                <Button
                  color="primary"
                  onClick={() => postLoginUserData(onClose)}
                >
                  로그인
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
