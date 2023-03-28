import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
  const {img,name,price,seller,ratings} = props.product;
  const hendelCart = props.hendelCart;
  

  return (
    <div className='single-product'>
      <img src={img} alt="" />
      <div className='product-details'>
        <h6>{name}</h6>
        <h2>Price: ${price}</h2>
        <p>Manufacturer: {seller}</p>
        <p>Ratings: {ratings}</p>
      </div>
      <button onClick={()=>hendelCart(props.product)} className='add-to-cart' href="#">
        Add-to-cart
        <FontAwesomeIcon icon={faShoppingCart} />
        </button>
    </div>
  );
};

export default Product;