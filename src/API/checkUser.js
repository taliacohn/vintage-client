import axios from "axios";

export function checkLoggedIn() {
  return axios.post("http://localhost:3001/userpage");
}
