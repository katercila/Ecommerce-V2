import React, { useState } from 'react';
import '../styling/Items.css';
import Products from '../components/Products';
import Cart from '../components/Cart'; // import the Cart component

const PAGE_PRODUCTS = 'products';
const PAGE_CART = 'cart';

function Items() {
  const [cart, setCart] = useState([]); //items will be added here in empty array
  const [page, setPage] = useState(PAGE_PRODUCTS);

  const navigateTo = (nextPage) => {
    setPage(nextPage);
  };
// adds number is items added to cart
  const getCartTotal = () => {
    return cart.reduce(
      (sum, { quantity }) => sum + quantity,
      0
    );
  };

 
  return (
    <div className="App">
      {page === PAGE_PRODUCTS && (
        <>
          <Products cart={cart} setCart={setCart} />
          <div className='ProductButton'>
            <button onClick={() => navigateTo(PAGE_CART)}>
              Cart ({getCartTotal()})
            </button>
            <button onClick={() => navigateTo(PAGE_PRODUCTS)}>
              View Products
            </button>
          </div>
        </>
      )}
      {page === PAGE_CART && (
        <>
          <Cart cart={cart} setCart={setCart} />
          <div className='ProductButton'>
            <button onClick={() => navigateTo(PAGE_PRODUCTS)}>
              Continue Shopping
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Items;