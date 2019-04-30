import { observable, action } from "mobx";

import ProductModel from "./../module/product";

class ProductStore {
  @observable isFetchingAll;
  @observable isFetchingById;
  @observable data;
  @observable categories;
  @observable product;

  constructor(props) {
    this.isFetchingAll = false;
    this.isFetchingById = false;
    this.data = [];
    this.categories = [];
    this.product = {};
  }

  @action
  getAll = async query => {
    this.isFetchingAll = true;
    const data = await ProductModel.get(query);
    this.categories = data.allProducts.categories;
    this.data = data.allProducts.items;
    this.isFetchingAll = false;
  };

  @action
  getById = async id => {
    this.isFetchingById = true;
    const data = await ProductModel.getById(id);
    this.product = data.product;
    this.isFetchingById = false;
  };
}

const productStore = new ProductStore();

export default productStore;
export { ProductStore };
