import axios from "axios";
import LoginService from "./authentication";
import StorageUtil from "./localStorage";

interface TokenReponse {
  message: string;
  success: boolean;
  data: {
    token: string;
    issuedAt: Date;
    expiredAt: Date;
    refreshToken: string;
  };
}

class TokenService {
  // check if the token is still valid or not
  checkValidToken() {
    const token = StorageUtil.getFromLocalStorage("token");
    const expiredAt = StorageUtil.getFromLocalStorage("expiredAt");

    const currentDate = new Date();
    if (token && expiredAt && currentDate.toISOString() < expiredAt) {
      return true;
    } else {
      return false;
    }
  }
  //Get the new token from the API using refresh token
  async refreshToken() {
    const accessToken = StorageUtil.getFromLocalStorage("token");
    const refreshToken = StorageUtil.getFromLocalStorage("refreshToken");
    const body = {
      accessToken: accessToken,
      refreshToken: refreshToken,
    };

    try {
      const response = await axios.post<TokenReponse>("login/RenewToken", body).then((response) => {
        return response.data;
      });
      if (response.success == true) {
        StorageUtil.setToLocalStorage("token", response.data.token);
        StorageUtil.setToLocalStorage("expiredAt", response.data.refreshToken);
        StorageUtil.setToLocalStorage("refreshToken", response.data.expiredAt);
        alert("Renew Token successfully");
      } else {
        console.log(response.message);
      }
    } catch (error) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      alert(error.response.data.message);
      LoginService.logout();
    }
  }
}

export default new TokenService();
