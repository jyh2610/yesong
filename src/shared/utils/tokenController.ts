import { setCookie, getCookie, deleteCookie } from 'cookies-next';

interface IToken {
  accessToken: string;
  refreshToken: string;
}

export class tokenController {
  static setTokens({ accessToken, refreshToken }: IToken) {
    setCookie('accessToken', accessToken, {
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 7 * 24 * 60 * 60 // 7 days
    });
    setCookie('refreshToken', refreshToken, {
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 7 * 24 * 60 * 60 // 7 days
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
