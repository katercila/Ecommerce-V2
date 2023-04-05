import React, { useState, useEffect } from 'react';
// import '../styling/Items.css';

export default function Products({ setCart, cart }) {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/api/products')
    // fetch('/api/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.log(err));
  }, []);

  const addToCart = (product) => {
    let newCart = [...cart];
    let itemInCart = newCart.find(
      (item) => product.name === item.name
    );
    if (itemInCart) {
      itemInCart.quantity++;
    } else {
      itemInCart = {
        ...product,
        quantity: 1,
      };
      newCart.push(itemInCart);
    }
    setCart(newCart);
  };

  const getFilteredProducts = () => {
    return products.filter(
      (product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  return (
    <>
      <h1>RECORDABLES</h1>
      <input
        type="text"
        placeholder="Search products"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="products">
        {getFilteredProducts().map((product, idx) => (
          <div className="product" key={idx}>
            <h3>{product.name}</h3>
            {/* <h4>${product.cost}</h4> */}
            <img src={product.image} alt={product.name} />
            <p>Product description here.</p>
            <h4>${product.cost}</h4>
            <div className="CartButton">
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          </div>
          
          
        ))}
      </div>
    </>
  );
}



