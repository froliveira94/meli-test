import { baseUrl } from "./../constants";

const axios = require("axios");

const options = {
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json"
  }
};

class ProductProvider {
  get = query => {
    const request = axios.create(options);
    return request.get(`/items?q=${query}`);
  };
  getById = id => {
    const request = axios.create(options);
    return request.get(`/items/${id}`);
  };
}

const productProvider = new ProductProvider();

export default productProvider;
export { ProductProvider };
