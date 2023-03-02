import axios from 'axios';
axios.defaults.withCredentials = true;

class userAPI {
  constructor() {
    this.url = 'https://second-love.onrender.com';
  }

  signup(firstName, lastName, email, password) {
    return axios.post(this.url + '/users/signup', {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    });
  }

  login(email, password) {
    return axios.post(this.url + '/users/login', {
      email,
      password,
    });
  }

  async isLoggedIn() {
    const result = await axios.get(this.url + '/login');
    console.log(result);
    return result.data;
  }

  logout() {
    console.log('logging out..');
    return axios.post(this.url + '/users/logout');
  }

  updateUser(
    userId,
    firstName,
    lastName,
    mainImg,
    streetNumber,
    streetName,
    city,
    country,
    postalCode
  ) {
    return axios
      .post(`${this.url}/users/${userId}`, {
        firstName,
        lastName,
        mainImg,
        streetNumber,
        streetName,
        city,
        country,
        postalCode,
      })
      .then((response) => {
        return response;
      })
      .catch((error) => {
        throw error;
      });
  }
}

export default userAPI;
