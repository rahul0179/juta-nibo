import React from "react";
import "../Product/Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
const Product = (props) => {
  const { handleAddToCart, product } = props;
  let { name, seller, img, price, rating } = product;
  //console.log(props.handleAddToCart);

  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <p className="product-name">{name}</p>
        <p>Price: ${price}</p>
        <p>
          <small>Seller: {seller}</small>
        </p>
        <p>
          <small>Rating: {rating}</small>
        </p>
      </div>
      <button onClick={() => handleAddToCart(product)} className="btn-cart">
        <p className="btn-text">Add To Cart</p>
        <FontAwesomeIcon
          className="icon"
          icon={faShoppingCart}
        ></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Product;
