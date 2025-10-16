import type { UserResponse } from 'utils/apiType';

export interface ApiResponse {
  data: UserResponse[];
  total: number;
}

export interface EditUserForSingUpProps {
  firstName: string;
  lastName: string;
  img: string | null;
}

export interface UpdateUserAuthProps {
  firstName: string;
  lastName: string;
  bio: string;
  location: string;
  address: string;
  username: string;
  day: number;
  month: string;
  years: number;
  country: string;
}
