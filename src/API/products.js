import axios from "axios";
axios.defaults.withCredentials = true;

class productsAPI {
  constructor() {
    this.url = "http://localhost:3001";
  }

  getProducts(category) {
    return axios
      .get(this.url + `/products/${category}`)
      .then((result) => result.data);
  }

  getOneProduct(name) {
    return axios
      .get(this.url + `/products/${name}`)
      .then((result) => result.data);
  }
}

export default productsAPI;
