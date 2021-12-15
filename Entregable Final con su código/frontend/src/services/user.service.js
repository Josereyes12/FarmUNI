import axios from "axios";
import authHeader from "./auth-heard";

const API_URL = "http://localhost:8080/api/test/";

class UserService {
  getPublicContent() {
    return axios.get(API_URL + "all");
  }

  getUserBoard() {
    return axios.get(API_URL + "user", { headers: authHeader() });
  }

  getAdminBoard() {
    return axios.get(API_URL + "admin", { headers: authHeader() });
  }

  getClienteBoard() {
    return axios.get(API_URL + "cliente", { headers: authHeader() });
  }
}

export default new UserService();
