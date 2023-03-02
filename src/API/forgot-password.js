import axios from 'axios';
axios.defaults.withCredentials = true;

class forgotPasswordAPI {
  constructor() {
    this.url = 'https://second-love.onrender.com';
  }

  submitEmail(email) {
    return axios.post(this.url + '/forgot-password/submit-email', {
      email: email,
    });
  }
}

export default forgotPasswordAPI;
