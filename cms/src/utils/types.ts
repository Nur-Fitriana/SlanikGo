export interface ApiResponse<T = any> {
  success: boolean;
  message?: string;
  data?: T;
}

export interface User {
  id: number;
  username: string;
}

export interface AuthResponse {
  accessToken: string;
  user: User;
}
