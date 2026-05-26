import { apiRequest } from "../utils/api";
import { LoginAuthDto } from "./dto/login.dto";

export interface LoginResponse {
  success: boolean;
  message: string;
  data: {
    id: number;
    username: string;
  };
}

export const authService = {
  login: async (credentials: LoginAuthDto): Promise<LoginResponse> => {
    return apiRequest<LoginResponse>("/auth/login", {
      method: "POST",
      body: JSON.stringify(credentials),
    });
  },
};
