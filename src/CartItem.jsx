import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "./CartSlice.jsx";

function CartItem({ onContinueShopping }) {
    const dispatch = useDispatch();
    const items = useSelector((state) => state.cart.items);

    // Calculate subtotal for each item
    const calculateTotalCost = (item) => {
        const price = parseFloat(item.cost.substring(1)); // remove "$"
        const quantity = item.quantity || 1;
        return price * quantity;
    };

    // Calculate total for all items
    const calculateTotalAmount = () => {
        return items.reduce((total, item) => {
            return total + calculateTotalCost(item);
        }, 0);
    };

    // Continue shopping
    const handleContinueShopping = (e) => {
        onContinueShopping(e);
    };

    // Checkout placeholder
    const handleCheckoutShopping = () => {
        alert("Functionality to be added for future reference");
    };

    // Increment quantity
    const handleIncrement = (item) => {
        const newAmount = (item.quantity || 1) + 1;
        dispatch(updateQuantity({ name: item.name, amount: newAmount }));
    };

    // Decrement quantity
    const handleDecrement = (item) => {
        const currentAmount = item.quantity || 1;

        if (currentAmount > 1) {
            dispatch(updateQuantity({ name: item.name, amount: currentAmount - 1 }));
        } else {
            dispatch(removeItem(item.name));
        }
    };

    // Remove item completely
    const handleRemove = (name) => {
        dispatch(removeItem(name));
    };

    return (
        <div className="cart-container">
            <h2>Your Cart</h2>

            {items.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div className="cart-items">
                    {items.map((item, index) => (
                        <div key={index} className="cart-item">
                            <img
                                src={item.image}
                                alt={item.name}
                                className="cart-image"
                            />

                            <div className="cart-details">
                                <h3>{item.name}</h3>
                                <p>{item.description}</p>
                                <p className="cost">{item.cost}</p>

                                <div className="quantity-controls">
                                    <button onClick={() => handleDecrement(item)}>-</button>

                                    <span>{item.quantity || 1}</span>

                                    <button onClick={() => handleIncrement(item)}>+</button>
                                </div>

                                <p className="subtotal">
                                    Subtotal: ${calculateTotalCost(item).toFixed(2)}
                                </p>

                                <button
                                    className="remove-btn"
                                    onClick={() => handleRemove(item.name)}
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))}

                    <h3 className="total-amount">
                        Total: ${calculateTotalAmount().toFixed(2)}
                    </h3>

                    <button className="checkout-btn" onClick={handleCheckoutShopping}>
                        Checkout
                    </button>
                </div>
            )}

            <button className="continue-btn" onClick={handleContinueShopping}>
                Continue Shopping
            </button>
        </div>
    );
}

export default CartItem;




 