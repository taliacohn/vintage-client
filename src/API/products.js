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

  getOneProduct(id) {
    return axios
      .get(this.url + `/products/product/${id}`)
      .then((result) => result.data);
  }

  getSearchProducts(searchQuery) {
    return axios
      .post(this.url + `/products/search`, {
        searchQuery,
      })
      .then((result) => result.data);
  }
}

export default productsAPI;
