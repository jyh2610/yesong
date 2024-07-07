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
import { useEffect, useState } from 'react';
import { useAuth } from '@/app/_providers/AuthProvider';
import { useToast } from '@/app/_providers/ToastProvider';
import { tokenController } from '@/shared';
import { postLoginData } from './api';

export function LoginModal() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [id, setId] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { showToast } = useToast();
  const { isLogin, setIsLogin } = useAuth();

  const postLoginUserData = async (onClose: () => void) => {
    try {
      const res = await postLoginData({ id, password });
      const { accessToken, refreshToken } = res;

      tokenController.setTokens({ accessToken, refreshToken });
      setId('');
      setPassword('');
      setIsLogin(true);
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
    setIsLogin(false);
    showToast({
      type: 'success',
      message: '로그아웃 되었습니다.'
    });
  };

  if (isLogin === null) {
    return null;
  }

  const currentLoginState = isLogin ? '로그아웃' : '관리자';

  return (
    <>
      <span
        onClick={isLogin ? handleLogout : onOpen}
        className="text-brandSize font-medium"
      >
        {currentLoginState}
      </span>
      <Modal
        aria-label="login modal"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="top-center"
      >
        <ModalContent>
          {onClose => (
            <form
              onSubmit={e => {
                e.preventDefault();
                postLoginUserData(onClose);
              }}
            >
              <ModalHeader className="flex flex-col gap-1">로그인</ModalHeader>
              <ModalBody>
                <Input
                  autoFocus
                  value={id}
                  onChange={e => setId(e.target.value)}
                  label="ID"
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
                <div className="w-full h-11 flex justify-between gap-3 font-normal text-base leading-5 text-white">
                  <button
                    className="w-full rounded-xl bg-gray-500"
                    onClick={onClose}
                  >
                    닫기
                  </button>
                  <button
                    className="w-full rounded-xl bg-brand-500"
                    onClick={() => {
                      postLoginUserData(onClose);
                    }}
                  >
                    로그인
                  </button>
                </div>
              </ModalFooter>
            </form>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
