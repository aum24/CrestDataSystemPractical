import React, { useContext } from "react";
import DataContext from "../Context/dataContext";

const Product = () => {
  const context = useContext(DataContext);

  return (
    <div style={{ paddingTop: 100 }} className="container list-group">
      {context.products.map((product) => (
        <div className="list-group-item" key={product.id}>
          {product.name} - Rs {product.price}
          <button
            className="btn btn-link"
            onClick={() => {
              context.updateCart(product.id);
            }}
          >
            Add
          </button>
        </div>
      ))}
    </div>
  )
};
export default Product;