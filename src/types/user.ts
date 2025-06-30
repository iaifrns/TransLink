import { UserStatus } from '../enum/UserStatus';

export interface User {
  name: string;
  username: string;
  email: string;
  position: UserStatus;
  image?: string;
}

export interface AuthUser {
  id: number;
  fullName: string;
  username: string;
  enterpriseCode: number;
  active: boolean;
  access_toke: string;
}
