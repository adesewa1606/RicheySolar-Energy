// ProductCard.jsx

import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./ProductCard.css";

const ProductCard = ({ product }) => {

    const { addToCart } = useContext(CartContext);

    return (

        <div className="product-card">

            {/* IMAGE */}
            <div className="product-image-container">
                <img
                    src={product.image}
                    alt={product.name}
                    className="product-image"
                />
            </div>

            {/* CONTENT */}
            <div className="product-content">

                <h3 className="product-title">
                    {product.name}
                </h3>

                <p className="product-price">
                    {product.price}
                </p>

                <button
                    className="add-cart-btn"
                    onClick={() => addToCart(product)}
                >
                    Add To Cart
                </button>

            </div>

        </div>

    );
};

export default ProductCard;