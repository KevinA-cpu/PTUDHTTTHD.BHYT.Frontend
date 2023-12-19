import axios from "axios";
axios.defaults.baseURL = "https://localhost:7275/api/";
class DataSevice {
  async getUserRole(username: string) {
    return await this.callGetApi("user/role", { username: `${username}` });
  }
  async callGetApi(endpoint: string, params: any) {
    try {
      const token = JSON.parse(localStorage.getItem("token") ?? "{}");
      return axios
        .get(endpoint, {
          headers: { Authorization: `Bearer ${token}` },
          params: params,
        })
        .then(
          (response) => {
            console.log("tesst", response.data);
            return response.data;
          },
          (error) => {
            console.log(error);
          }
        );
    } catch (error) {
      console.log(error);
    }
  }

  async callGetApiWithoutParams(endpoint: string) {
    try {
      const token = JSON.parse(localStorage.getItem("token") ?? "{}");
      return axios
        .get(endpoint, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then(
          (response) => response.data,
          (error) => {
            console.log(error);
          }
        );
    } catch (error) {
      console.log(error);
    }
  }

  async callPostApi(endpoint: string, body: any) {
    try {
      const token = JSON.parse(localStorage.getItem("token") ?? "{}");
      return axios
        .post(endpoint, body, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          return response;
        });
    } catch (error) {
      console.log(error);
    }
  }

  async callDeleteApi(endpoint: string, params: any) {
    try {
      const token = JSON.parse(localStorage.getItem("token") ?? "{}");
      return axios
        .delete(endpoint, {
          headers: { Authorization: `Bearer ${token}` },
          params: params,
        })
        .then(
          (response) => response.data,
          (error) => {
            console.log(error);
          }
        );
    } catch (error) {
      console.log(error);
    }
  }
}

export default new DataSevice();
