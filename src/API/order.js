import axios from 'axios';
axios.defaults.withCredentials = true;

class orderAPI {
  constructor() {
    this.url = 'https://second-love.onrender.com';
  }

  orderCart(userID, total) {
    return axios
      .get(this.url + `/cart/${userID}`)
      .then((result) => result.data);
  }

  addToCart(productID, userID) {
    return axios.post(this.url + `/cart/${productID}/${userID}`);
  }

  deleteFromCart(productID, userID) {
    return axios.delete(this.url + `/cart/${productID}/${userID}`);
  }
}

export default orderAPI;
