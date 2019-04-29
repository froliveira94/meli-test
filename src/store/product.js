import { observable, action } from "mobx";

class ProductStore {
  @action
  teste = () => {
    console.log("ae");
  };
}

const productStore = new ProductStore();

export default productStore;
export { ProductStore };
