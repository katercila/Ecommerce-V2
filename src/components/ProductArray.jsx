import React, { useState } from 'react';

const ALL = 'all';


export default function Products({ setCart, cart }) {
  const [products] = useState([
    {
      category: ALL, 
      name: 'Record',
      cost: 149.99,
      image:
        'Images/record1.png',
    },
    {
      category: ALL,
      name: 'Record 1',
      cost: 229.99,
      image:
        'Images/recordp2.png',
    },
    {
        category: ALL,
        name: 'Record 2',
        cost: 219.99,
        image:
          'Images/recordp3.png',
      },
      {
        category: ALL,
        name: 'Record 3',
        cost: 180.99,
        image:
          'Images/recordp4.png',
      },
      {
        category: ALL,
        name: 'Record 4',
        cost: 369.99,
        image:
          'Images/recordp5.png',
      },
      {
        category: ALL,
        name: 'Record 5',
        cost: 319.99,
        image:
          'Images/recordp6.png',
      },
      {
        category: ALL,
        name: 'Record 6',
        cost: 259.99,
        image:
          'Images/recordp7.png',
      },
      {
        category: ALL,
        name: 'Record 7',
        cost: 189.99,
        image:
          'Images/recordp8.png',
      },
      {
        category: ALL,
        name: 'Record 8',
        cost: 85.99,
        image:
          'Images/recordp9.png',
      },
      {
        category: ALL,
        name: 'Record 9',
        cost: 39.99,
        image:
          'Images/recordp10.png',
      },
      {
        category: ALL,
        name: 'Record 11',
        cost: 79.99,
        image:
          'Images/recordp11.png',
      },
      {
        category: ALL,
        name: 'Record 12',
        cost: 219.99,
        image:
          'Images/recordp12.png',
      },
      
  ]);
// for loop adds product to empty array
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

  const [searchTerm, setSearchTerm] = useState('');

  const getFilteredProducts = () => {
    return products.filter(
      (product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  return (
    <>
      <h1>Recordables</h1>
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
      <h4>${product.cost}</h4>
      <img src={product.image} alt={product.name} />
      <div className="CartButton">
        <button onClick={() => addToCart(product)}>Add to Cart</button>
      </div>
    </div>
  ))}
</div>
</>
);
}