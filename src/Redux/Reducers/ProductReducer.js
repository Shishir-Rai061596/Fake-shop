import ACTIONS from "../ActionTypes.json";

const initialProductState = {
  products: [],
};

const ProductReducer = (state = initialProductState, action) => {
  switch (action.type) {
    case ACTIONS.SET_PRODUCTS:
      return setProducts(state, action.payload.products);
    case ACTIONS.SELECTED_PRODUCT:
      return selectedProduct(state, action.payload.product);
    case ACTIONS.REMOVE_SELECTED_PRODUCT:
      return removeSelectedProduct(state, action.payload.id);
    default:
      return state;
  }
};

const setProducts = (ProductState, products) => {
  const newProductState = {
    ...ProductState,
    products,
  };

  return newProductState;
};

const selectedProduct = (ProductState, product) => {
  return ProductState;
};

const removeSelectedProduct = ProductState => {
  return ProductState;
};

export default ProductReducer;
