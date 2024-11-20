import React from 'react';

const Cart = ({ cart, removeFromCart, updateQuantity }) => {
    // If cart is empty, display a message
    if (cart.length === 0) {
        return <div>Your cart is empty.</div>;
    }

    return (
        <div className="cart-container">
            <h2>Your Cart</h2>
            <div className="cart-items">
                {cart.map((item, index) => (
                    <div key={index} className="cart-item">
                        <img src={item.image} alt={item.name} className="cart-item-image" />
                        <div className="cart-item-info">
                            <h3>{item.name}</h3>
                            <p>Price: ${item.price}</p>
                            <p>Size: {item.size}</p>
                            <p>Color: {item.color}</p>

                            <div className="cart-item-quantity">
                                <label>Quantity:</label>
                                <input
                                    type="number"
                                    value={item.quantity}
                                    min="1"
                                    onChange={(e) =>
                                        updateQuantity(item.id, parseInt(e.target.value))
                                    }
                                />
                            </div>

                            <button onClick={() => removeFromCart(item.id)}>
                                Remove from Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="cart-total">
                <h3>Total: ${cart.reduce((total, item) => total + item.price * item.quantity, 0)}</h3>
            </div>
        </div>
    );
};

export default Cart;
