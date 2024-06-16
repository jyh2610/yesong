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
import { useToast } from '@/app/_providers/ToastProvider';
import { tokenController } from '@/shared';
import { postLoginData } from './api';

export function LoginModal() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [id, setId] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { showToast } = useToast();

  const accessToken = tokenController.getAccessToken();

  const postLoginUserData = async (onClose: () => void) => {
    try {
      const res = await postLoginData({ id, password });
      const { accessToken, refreshToken } = res;

      tokenController.setTokens({ accessToken, refreshToken });
      setId('');
      setPassword('');
      onClose();
      showToast({
        type: 'success',
        message: '로그인에 성공하였습니다.'
      });
    } catch {
      showToast({
        type: 'fail',
        message: '아이디 또는 비밀번호가 틀렸습니다.'
      });
    }
  };

  const handleLogout = () => {
    tokenController.clearTokens();
    showToast({
      type: 'success',
      message: '로그아웃 되었습니다.'
    });
  };

  return (
    <>
      <span
        onClick={accessToken ? handleLogout : onOpen}
        className="text-brandSize font-medium"
      >
        {!accessToken ? '관리자' : '로그아웃'}
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
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  닫기
                </Button>
                <Button
                  color="primary"
                  onClick={() => {
                    postLoginUserData(onClose);
                  }}
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
