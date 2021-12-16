import ACTIONS from "../ActionTypes.json";

const setProducts = products => {
  return {
    type: ACTIONS.SET_PRODUCTS,
    payload: {
      products,
    },
  };
};

const selectedProduct = product => ({
  type: ACTIONS.SELECTED_PRODUCT,
  payload: {
    product,
  },
});

const removeSelectedProduct = id => ({
  type: ACTIONS.REMOVE_SELECTED_PRODUCT,
  payload: {
    id,
  },
});

export { setProducts, selectedProduct, removeSelectedProduct };
