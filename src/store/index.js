import productStore from "./product";
import searchStore from "./search";
export default class Store {
  constructor() {
    this.product = productStore;
    this.search = searchStore;
  }
}
