import React, { useEffect, useState } from "react";
import "../Shop/Shop.css";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import { addToDb, getStoredCart } from "../../utilities/fakedb";

const Shop = () => {
  //product useState
  const [products, setProduct] = useState([]);
  //cart
  const [cart, setCart] = useState([]);

  //product loded
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  //cart useEffect
  useEffect(() => {
    const storedCart = getStoredCart();
    const saveCart = [];

    for (const id in storedCart) {
      const addProduct = products.find((product) => product.id === id);

      if (addProduct) {
        const quantity = storedCart[id];
        addProduct.quantity = quantity;
        saveCart.push(addProduct);
      }
    }
    setCart(saveCart);
  }, [products]);

  //handelin cart
  const handleAddToCart = (selectedProduct) => {
    console.log("click after", selectedProduct);
    let newCart = [];
    const exists = cart.find((product) => product.id === selectedProduct.id);
    if (!exists) {
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct];
    } else {
      const rest = cart.filter((product) => product.id !== selectedProduct.id);
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
    }
    setCart(newCart);
    addToDb(selectedProduct.id);
  };

  return (
    <div className="shop-container">
      <div className="product-container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          ></Product>
        ))}
      </div>
      <div className="order-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
