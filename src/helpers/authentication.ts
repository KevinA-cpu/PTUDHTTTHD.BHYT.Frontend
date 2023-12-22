import axios from "axios";
import DataSevice from "./api_data";

//axios.defaults.baseURL = "https://localhost:7275/api/";

function utf8_to_b64(str: string): string {
  return window.btoa(unescape(encodeURIComponent(str)));
}

interface LoginResponseData {
  message: string;
  token: {
    accessToken: string;
    refreshToken: string;
    issuedAt: Date;
    expiredAt: Date;
  };
}

class AuthService {
  async login(Username: string, Password: string) {
    const data = {
      Username,
      Password,
    };
    return axios.post<LoginResponseData>("login", data).then(async (response) => {
      const token: string = JSON.stringify(response.data.token.accessToken);
      const refreshToken: string = JSON.stringify(response.data.token.refreshToken);
      const expiredAt: string = JSON.stringify(response.data.token.expiredAt);
      if (response.data) {
        localStorage.setItem("token", token);
        localStorage.setItem("expiredAt", expiredAt);
        localStorage.setItem("username", utf8_to_b64(Username));
        localStorage.setItem("refreshToken", refreshToken);
      }
      const userRole: { role: string } = await DataSevice.getUserRole(Username);
      localStorage.setItem("role", utf8_to_b64(userRole.role));
      return response;
    });
  }
  logout() {
    localStorage.removeItem("token");
    localStorage.clear();
  }

  getUser() {
    const userStr = localStorage.getItem("token");
    if (userStr) {
      return JSON.parse(userStr);
    }
    return null;
  }
}

export default new AuthService();
