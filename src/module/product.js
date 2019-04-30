import ProductProvider from "./../provider/product";

class ProductModel {
  get = async query => {
    try {
      const response = await ProductProvider.get(query);
      return response.data;
    } catch (err) {
      return { error: err };
    }
  };
  getById = async id => {
    try {
      const response = await ProductProvider.getById(id);
      return response.data;
    } catch (err) {
      return { error: err };
    }
  };
}

const productModel = new ProductModel();

export default productModel;
export { productModel };
