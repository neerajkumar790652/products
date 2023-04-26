import React from 'react';

function CartPage({ cartItems, removeFromCart }) {
  return (
    <>
    <div>
    <h2>Add to Cart:</h2>
    <div className="cart-items">
        {
           cartItems.map((item)=>{
            return(
                <>
                <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <p>Price: ${item.price}</p>
            <p>Category: {item.category}</p>
            <button onClick={() => removeFromCart(item)}>Remove</button>
            </div>
                </>
            )
           })
        }
        </div>
    </div>
    </>
        )}
        export default CartPage;