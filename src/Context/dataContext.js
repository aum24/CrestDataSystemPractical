import React from "react";

let state = {
  products: [],
  cart: [],
  updateCart: productId => {},
  addProductQty: productId => {},
  removeProductQty: productId => {}
};

export default React.createContext(state);
