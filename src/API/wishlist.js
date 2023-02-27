import axios from "axios";
axios.defaults.withCredentials = true;

class wishlistAPI {
  constructor() {
    this.url = "http://localhost:3001";
  }

  getWishlist(userID) {
    return axios
      .get(this.url + `/wishlist/${userID}`)
      .then((result) => result.data);
  }

  addToWishlist(productID, userID) {
    return axios.post(this.url + `/wishlist/${productID}/${userID}`);
  }

  deleteFromWishlist(productID, userID) {
    return axios.delete(this.url + `/wishlist/${productID}/${userID}`);
  }
}

export default wishlistAPI;
