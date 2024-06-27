import { setCookie, deleteCookie, getCookie } from 'cookies-next';

interface IToken {
  accessToken: string;
  refreshToken: string;
}

export class tokenController {
  static setTokens({ accessToken, refreshToken }: IToken) {
    setCookie('accessToken', accessToken, {
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 30 * 60
    });
    setCookie('refreshToken', refreshToken, {
      sameSite: 'strict',
      maxAge: 24 * 60 * 60
    });
  }

  static setAccessToken(accessToken: string) {
    setCookie('accessToken', accessToken, {
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 30 * 60
    });
  }

  static clearTokens() {
    deleteCookie('accessToken');
    deleteCookie('refreshToken');
  }

  static getAccessToken() {
    return getCookie('accessToken');
  }

  static getRefreshToken() {
    return getCookie('refreshToken');
  }
}
