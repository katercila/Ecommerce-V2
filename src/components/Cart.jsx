// import React from 'react';
// import "../styling/Cart.css";

// export default function Cart({ cart, setCart }) {
//   const getTotalSum = () => {
//     return cart.reduce(
//       (sum, { cost, quantity }) => sum + cost * quantity,
//       0
//     );
//   };

//   const clearCart = () => { // define function to clear cart
//     setCart([]);
//   };

//   const setQuantity = (product, amount) => {
//     const newCart = [...cart]; // create copy of cart array
//     newCart.find(
//       (item) => item.name === product.name // find the item in cart with the same name as the product
//     ).quantity = amount;
//     setCart(newCart);
//   };

//   const removeFromCart = (productToRemove) => {
//     setCart(
//       cart.filter((product) => product !== productToRemove)
//     );
//   };

//   return (
//     <>
//       <h1>Cart</h1>
//       {cart.length > 0 && (
//         <div className='ClearButton'>
//           <button onClick={clearCart}>Clear Cart</button>
//         </div>
//       )}
//       <div className="products">
//         {cart.map((product, idx) => (
//           <div className="product" key={idx}>
//             <h3>{product.name}</h3>
//             <h4>${product.cost}</h4>
//             <input
//               value={product.quantity}
//               onChange={(e) =>
//                 setQuantity(
//                   product,
//                   parseInt(e.target.value) // onChange event to call setQuantity function to update product quantity in cart
//                 )
//               }
//             />
//             <img src={product.image} alt={product.name} />
//             <div className='RemoveButton'>
//               <button onClick={() => removeFromCart(product)}>
//                 Remove
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className='Cost'>
//       <div>Total Cost: ${getTotalSum()}</div>
//       </div>
//     </>
//   );
// }; // added semicolon at the end of the function
import React from 'react';

export default function Cart({ cart, setCart }) {
  const getTotalSum = () => {
    return cart.reduce(
      (sum, { cost, quantity }) => sum + cost * quantity,
      0
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const setQuantity = (product, amount) => {
    const newCart = [...cart];
    newCart.find(
      (item) => item.name === product.name
    ).quantity = amount;
    setCart(newCart);
  };

  const removeFromCart = (productToRemove) => {
    setCart(
      cart.filter((product) => product !== productToRemove)
    );
  };

  return (
    <>
      <h1>Cart</h1>
      {cart.length > 0 && (
        <button onClick={clearCart}>Clear Cart</button>
      )}
      <div className="products">
        {cart.map((product, idx) => (
          <div className="product" key={idx}>
            <h3>{product.name}</h3>
            <h4>${product.cost}</h4>
            <input
              value={product.quantity}
              onChange={(e) =>
                setQuantity(
                  product,
                  parseInt(e.target.value)
                )
              }
            />
            <img src={product.image} alt={product.name} />
            <button onClick={() => removeFromCart(product)}>
              Remove
            </button>
          </div>
        ))}
      </div>

      <div>Total Cost: ${getTotalSum()}</div>
    </>
  );
}