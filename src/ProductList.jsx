import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/CartSlice";
import CartItem from "./CartItem";
import plantsArray from "../data/plantsArray";

function ProductList() {
    const dispatch = useDispatch();
    const [showCart, setShowCart] = useState(false);

    const handleAddToCart = (plant) => {
        dispatch(addItem(plant));
    };

    const handleContinueShopping = () => {
        setShowCart(false);
    };

    return (
        <div className="product-list-container">

            {!showCart ? (
                <div className="product-grid">

                    {plantsArray.map((category, index) => (
                        <div key={index}>
                            <h2 className="category-title">{category.category}</h2>

                            <div className="category-grid">
                                {category.plants.map((plant, idx) => (
                                    <div key={idx} className="product-card">
                                        <img
                                            src={plant.image}
                                            alt={plant.name}
                                            className="product-image"
                                        />

                                        <h3>{plant.name}</h3>
                                        <p>{plant.description}</p>
                                        <p className="cost">{plant.cost}</p>

                                        <button
                                            className="add-btn"
                                            onClick={() => handleAddToCart(plant)}
                                        >
                                            Add to Cart
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}</div>
            ) : (
                <CartItem onContinueShopping={handleContinueShopping} />
            )}
            </div>
    );
}

export default ProductList;

