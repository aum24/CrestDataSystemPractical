import React, { useContext } from "react";
import DataContext from "../Context/dataContext";

const Cart = () => {
  const context = useContext(DataContext);
  let total = 0;

  return (
    <div style={{ paddingTop: 100 }} className="container">
      <table className="table table-hover table-condensed">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {context.cart.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.qty * product.price}</td>
              <td>
                <button
                  onClick={() => {
                    context.addProductQty(product.id);
                  }}
                >
                  +
                </button>
                <input type="text" value={product.qty} onChange={() => { }} />
                <button
                  onClick={() => {
                    context.removeProductQty(product.id);
                  }}
                >
                  -
                </button>
              </td>
            </tr>
          ))}
          <tr>
            <td>Total{context.cart.forEach(a => {
              total = total + (a.qty * a.price);
            })}</td>
            <td>{total}</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>)
};
export default Cart;