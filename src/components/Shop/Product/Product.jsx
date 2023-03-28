import React from 'react';
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
      <button onClick={()=>hendelCart(props.product)} className='add-to-cart' href="#">Add-to-cart</button>
    </div>
  );
};

export default Product;