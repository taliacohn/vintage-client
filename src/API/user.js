import axios from "axios";
axios.defaults.withCredentials = true;

class userAPI {
  constructor() {
    this.url = "http://localhost:3001";
  }

  signup(firstName, lastName, email, password) {
    return axios.post(this.url + "/account/signup", {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    });
  }

  login(email, password) {
    return axios.post(this.url + "/users/login", {
      email,
      password,
    });
  }

  async isLoggedIn() {
    const result = await axios.get(this.url + "/login");
    console.log(result);
    return result.data;
  }
}

export default userAPI;
