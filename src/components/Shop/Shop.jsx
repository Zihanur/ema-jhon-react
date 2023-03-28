import React, { useEffect, useState } from 'react';
import Product from './Product/Product';
import './Shop.css'

const Shop = () => {
  const [products,setProducts] = useState([]);
  const [cart,setCart] = useState([]);
  
  

  useEffect(()=>{
    fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
    .then(res=>res.json())
    .then(data=>setProducts(data));
  },[]);

  const hendelCart = (product)=>{
    const newCart = [...cart,product];
    setCart(newCart);
  }

  return (
    <div className='shop-container'>
      <div className='product-container'>
        {
          products.slice(0,9).map(product=><Product 
            key={product.id}
            product={product}
            hendelCart={hendelCart}
            ></Product>)
        }
      </div>
      <div className='cart-container'>
        <h1>Order Summary</h1>
        <p>Selected Items: {cart.length}</p>
      </div>
    </div>
  );
};

export default Shop;