import axios from "axios";

export default class ApiClient {
  static createInstance(route, token = "") {
    return axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}/${route}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: token !== "" ? `Bearer ${token}` : "",
      },
    });
  }
}
