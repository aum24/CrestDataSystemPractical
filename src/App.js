import React, { useState } from "react";
import './App.css';
import Header from "./Common/Header";
import DataContext from "./Context/dataContext";
import { productList } from "./Data/ProductList";
import { inventory } from "./Data/Inventory";
import Product from "./Components/Product";
import Cart from "./Components/Cart";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [inventoryState, setInventoryState] = useState(inventory);
  const [cartState, setCartState] = useState([]);

  const addProductQty = (productId) => {
    const inventoryItem = inventoryState.find(a => a.productId === productId);
    const cartItem = cartState.find(a => a.productId === productId);
    if (inventoryItem.qty > 0) {
      if (inventoryItem.limit > cartItem.qty) {
        setCartState(
          cartState.map((cartItem) => {
            if (cartItem.id === productId) {
              return { ...cartItem, qty: cartItem.qty + 1 };
            }
            else {
              return { ...cartItem };
            }
          })
        );
        setInventoryState(
          inventoryState.map((product) => {
            return product.id === productId
              ? { ...product, qty: product.qty - 1 }
              : { ...product };
          })
        );
      }
    }
  };

  const removeProductQty = (productId) => {
    const cartItem = cartState.find((a) => a.id === productId);
    if (cartItem.qty - 1 > 0) {
      setCartState(
        cartState.map((item) => {
          return item.id === productId
            ? { ...item, qty: item.qty - 1 }
            : { ...item };
        })
      );
    } else {
      setCartState(
        cartState.filter((cartItem) => {
          return cartItem.id !== productId;
        })
      );
    }

    setInventoryState(
      inventoryState.map((product) => {
        return product.id === productId
          ? { ...product, qty: product.qty + 1 }
          : { ...product };
      })
    );
  };

  const updateCart = (productId) => {
    const productItem = productList.find((a) => a.id === productId);
    const inventoryItem = inventoryState.find(a => a.productId === productId);
    const cartItem = cartState.find((a) => a.id === productId);

    if (inventoryItem.qty > 0) {
      if (cartItem === undefined || inventoryItem.limit > cartItem.qty) {
        setCartState(
          cartItem
            ? cartState.map((item) => {
              return item.id === productId
                ? { ...item, qty: item.qty + 1 }
                : { ...item };
            })
            : [...cartState, { ...productItem, ...inventoryItem, qty: 1 }]
        );

        setInventoryState(
          inventoryState.map((product) => {
            return product.id === productId
              ? { ...product, qty: product.qty - 1 }
              : { ...product };
          })
        );
      }
    }
  };

  return (
    <div className="row">
      <DataContext.Provider
        value={{
          products: productList,
          cart: cartState,
          addProductQty: addProductQty,
          removeProductQty: removeProductQty,
          updateCart: updateCart
        }}
      >
        <Router>
          <Header />
          <Switch>
            <Route path="/" component={Product} exact />
            <Route path="/Cart" component={Cart} exact />
          </Switch>
        </Router>
      </DataContext.Provider>
    </div>
  );
}

export default App;
