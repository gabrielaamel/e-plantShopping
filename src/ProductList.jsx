import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice.jsx';
import CartItem from './CartItem.jsx';
import './ProductList.css';

function ProductList() {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart.items);
    const [showCart, setShowCart] = useState(false);
    const [addedToCart, setAddedToCart] = useState({});

    const plantsArray = [
        {
            category: "Air Purifying Plants",
            plants: [
                {
                    name: "Snake Plant",
                    image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg",
                    cost: "$15",
                    description: "Produces oxygen at night, improving air quality."
                },
                {
                    name: "Spider Plant",
                    image: "https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg",
                    cost: "$12",
                    description: "Resilient plant that filters toxins from the air."
                },
                {
                    name: "Peace Lily",
                    image: "https://cdn.pixabay.com/photo/2018/02/21/20/39/peace-lily-3171339_1280.jpg",
                    cost: "$18",
                    description: "Beautiful blooms that help clean indoor air."
                },
                {
                    name: "Boston Fern",
                    image: "https://cdn.pixabay.com/photo/2020/04/30/19/52/fern-5114194_1280.jpg",
                    cost: "$14",
                    description: "Adds lush green foliage and acts as a natural humidifier."
                },
                {
                    name: "Rubber Plant",
                    image: "https://cdn.pixabay.com/photo/2020/02/15/11/49/flower-4850729_1280.jpg",
                    cost: "$20",
                    description: "Features glossy leaves that absorb indoor pollutants."
                },
                {
                    name: "Aloe Vera",
                    image: "https://cdn.pixabay.com/photo/2018/04/02/07/42/leaf-3283175_1280.jpg",
                    cost: "$10",
                    description: "Soothing gel inside leaves helps heal minor burns."
                }
            ]
        },
        {
            category: "Aromatic Fragrant Plants",
            plants: [
                {
                    name: "Lavender",
                    image: "https://cdn.pixabay.com/photo/2016/04/19/08/15/lavender-1338072_1280.jpg",
                    cost: "$20",
                    description: "Calming scent, used in aromatherapy."
                },
                {
                    name: "Jasmine",
                    image: "https://cdn.pixabay.com/photo/2017/05/29/21/20/jasmine-2355325_1280.jpg",
                    cost: "$18",
                    description: "Sweet fragrance that blooms mostly at night."
                },
                {
                    name: "Rosemary",
                    image: "https://cdn.pixabay.com/photo/2019/10/11/07/36/rosemary-4541241_1280.jpg",
                    cost: "$15",
                    description: "Herbal scent and great for cooking."
                },
                {
                    name: "Mint",
                    image: "https://cdn.pixabay.com/photo/2016/01/07/18/09/mint-1126282_1280.jpg",
                    cost: "$9",
                    description: "Refreshing aroma and easy to grow."
                },
                {
                    name: "Lemon Balm",
                    image: "https://cdn.pixabay.com/photo/2018/09/16/09/41/lemon-balm-3681140_1280.jpg",
                    cost: "$11",
                    description: "Citrusy scent known to reduce stress."
                },
                {
                    name: "Hyacinth",
                    image: "https://cdn.pixabay.com/photo/2019/04/07/20/20/hyacinth-4110726_1280.jpg",
                    cost: "$22",
                    description: "Stunning vibrant flowers with a rich fragrance."
                }
            ]
        },
        {
            category: "Insect Repellent Plants",
            plants: [
                {
                    name: "Oregano",
                    image: "https://cdn.pixabay.com/photo/2017/04/19/13/44/oregano-2241857_1280.jpg",
                    cost: "$10",
                    description: "Contains compounds that deter certain pests."
                },
                {
                    name: "Marigold",
                    image: "https://cdn.pixabay.com/photo/2022/02/21/16/24/marigold-7026767_1280.jpg",
                    cost: "$8",
                    description: "Natural pest deterrent with bright orange flowers."
                },
                {
                    name: "Geraniums",
                    image: "https://cdn.pixabay.com/photo/2018/04/26/16/03/geranium-3352891_1280.jpg",
                    cost: "$12",
                    description: "Pleasant scent that keeps mosquitoes away."
                },
                {
                    name: "Basil",
                    image: "https://cdn.pixabay.com/photo/2016/08/05/18/48/basil-1573887_1280.jpg",
                    cost: "$9",
                    description: "Repels flies and mosquitoes while doubling as a herb."
                },
                {
                    name: "Catnip",
                    image: "https://cdn.pixabay.com/photo/2015/07/02/20/37/catnip-829681_1280.jpg",
                    cost: "$13",
                    description: "Repels mosquitoes and appeals to felines."
                },
                {
                    name: "Citronella Grass",
                    image: "https://cdn.pixabay.com/photo/2019/03/24/19/27/lemon-grass-4078711_1280.jpg",
                    cost: "$16",
                    description: "Famous natural insect-repelling plant."
                }
            ]
        }
    ];

    const handleAddToCart = (plant) => {
        dispatch(addItem(plant));
        setAddedToCart((prevState) => ({
            ...prevState,
            [plant.name]: true,
        }));
    };

    const handleCartClick = (e) => {
        e.preventDefault();
        setShowCart(true);
    };

    const handleContinueShopping = (e) => {
        e.preventDefault();
        setShowCart(false);
    };

    const totalCartItems = cart.reduce((total, item) => total + item.quantity, 0);

    return (
        <div>
            {/* Navbar */}
            <div className="navbar">
                <div className="tag">
                    <div className="luxury">
                        <img src="https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_1280.png" alt="" />
                        <a href="/" style={{ textDecoration: 'none' }}>
                            <div>
                                <h3 style={{ color: 'white' }}>Paradise Nursery</h3>
                                <i style={{ color: 'white' }}>Where Green Meets Serenity</i>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="style_ul">
                    <div>
                        <a href="#" onClick={(e) => handleContinueShopping(e)} style={{ color: 'white', fontSize: '20px', textDecoration: 'none' }}>
                            Plants
                        </a>
                    </div>
                    <div>
                        <a href="#" onClick={(e) => handleCartClick(e)} style={{ color: 'white', fontSize: '34px', textDecoration: 'none' }}>
                            <h1 className="cart">
                                <span className="cart_quantity_count">{totalCartItems}</span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" height="68" width="68">
                                    <rect width="156" height="156" fill="none"></rect>
                                    <circle cx="80" cy="216" r="12"></circle>
                                    <circle cx="184" cy="216" r="12"></circle>
                                    <path d="M42.3,72H221.7l-26.4,92.4A15.8,15.8,0,0,1,179.9,176H84.1a15.8,15.8,0,0,1-15.4-11.6L32.5,37.6A8,8,0,0,0,24.8,32H8" fill="none" stroke="#faf9f9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                                </svg>
                            </h1>
                        </a>
                    </div>
                </div>
            </div>

            {!showCart ? (
                <div className="product-grid">
                    {plantsArray.map((category, index) => (
                        <div key={index}>
                            <h1>{category.category}</h1>
                            <div className="product-list">
                                {category.plants.map((plant, plantIndex) => (
                                    <div className="product-card" key={plantIndex}>
                                        <img className="product-image" src={plant.image} alt={plant.name} />
                                        <div className="product-title">{plant.name}</div>
                                        <div className="product-price">{plant.cost}</div>
                                        <div>{plant.description}</div>
                                        <button
                                            className={`product-button ${addedToCart[plant.name] ? 'added-to-cart' : ''}`}
                                            onClick={() => handleAddToCart(plant)}
                                            disabled={addedToCart[plant.name]}
                                        >
                                            {addedToCart[plant.name] ? 'Added to Cart' : 'Add to Cart'}
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <CartItem onContinueShopping={handleContinueShopping} />
            )}
        </div>
    );
}

export default ProductList;