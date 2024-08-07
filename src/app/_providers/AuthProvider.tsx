'use client';

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
  useMemo
} from 'react';
import { postRefreshAuthToken, tokenController } from '@/shared'; // tokenController는 앞서 설명한 것처럼 쿠키 관리

type ContextType = {
  isLogin: boolean;
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
};

const AuthContext = createContext<ContextType>({
  isLogin: false,
  setIsLogin: () => undefined
});

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isLogin, setIsLogin] = useState<boolean>(false);

  useEffect(() => {
    const token = tokenController.getAccessToken();
    const refreshToken = tokenController.getRefreshToken();

    const checkTokens = async () => {
      if (!token && refreshToken) {
        try {
          const newTokens = await postRefreshAuthToken(refreshToken);
          if (newTokens) {
            tokenController.setAccessToken(newTokens.accessToken);
            setIsLogin(true);
          } else {
            setIsLogin(false);
            tokenController.clearTokens();
          }
        } catch (error) {
          setIsLogin(false);
          tokenController.clearTokens();
        }
      } else {
        setIsLogin(!!token);
      }
    };

    if (refreshToken) {
      checkTokens();
    } else {
      tokenController.clearTokens();
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isLogin, setIsLogin }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

export default AuthProvider;
