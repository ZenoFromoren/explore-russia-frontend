export type TPost = {
  id: number;
  createdAt: Date;
  city: string;
  title: string;
  image: string;
  text: string;
};

export type TPostCard = Omit<TPost, 'text'>;

export type TUser = {
  username: string;
  city: string;
  email: string;
  about: string;
  createdAt: string;
  avatar: string;
};

export type TLoginData = {
  email: string;
  password: string;
};

export type TRefreshResponse = {
  refreshToken: string;
  accessToken: string;
};

export type TAuthResponse = {
  accessToken: string;
  user: TUser;
};

export type TRegisterData = TLoginData & {
  username: string;
  city: string;
  about?: string | null;
};

export type TUpdateData = {
  username?: string;
  city?: string;
  about?: string;
  avatar?: string;
  password?: string;
};

export type TCodeResonse = {
  user: TRegisterData;
  code: string;
}
