import axios from 'axios';
axios.defaults.withCredentials = true;

class forgotPasswordAPI {
  constructor() {
    this.url = 'http://localhost:3001';
  }

  submitEmail(email) {
    return axios.post(this.url + '/forgot-password/submit-email', {
      email: email,
    });
  }
}

export default forgotPasswordAPI;
