import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./Cart.css";

const Cart = () => {

    const { cartItems, addToCart, removeFromCart, decreaseQty, clearCart } =
        useContext(CartContext);

    const total = cartItems.reduce(
        (sum, item) => sum + item.qty * parseFloat(item.price.replace(/[^0-9.]/g, "")),
        0
    );

    const handleCheckout = () => {

        const selected = document.querySelector('input[name="payment"]:checked');
        const method = selected ? selected.value : "Pay on Delivery";

        alert(`Order placed successfully!\nPayment: ${method}\nTotal: $${total.toFixed(2)}`);

        clearCart();

    };

    if (cartItems.length === 0) {
        return (
            <section className="cart-page">
                <h1>Your Cart</h1>
                <p className="cart-empty">Your cart is empty.</p>
            </section>
        );
    }

    return (
        <section className="cart-page">
            <h1>Your Cart</h1>

            <div className="cart-layout">
                <div className="cart-items">
                    {cartItems.map((item) => (
                        <div className="cart-item" key={item.id}>
                            <img src={item.image} alt={item.name} />
                            <div className="cart-item-details">
                                <h3>{item.name}</h3>
                                <p className="cart-item-price">{item.price}</p>
                                <div className="qty-controls">
                                    <button onClick={() => decreaseQty(item.id)}>-</button>
                                    <span>{item.qty}</span>
                                    <button onClick={() => addToCart(item)}>+</button>
                                </div>
                                <button
                                    className="remove-btn"
                                    onClick={() => removeFromCart(item.id)}
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="cart-summary">
                    <h2>Order Summary</h2>
                    <div className="summary-row">
                        <span>Total</span>
                        <span className="total-price">${total.toFixed(2)}</span>
                    </div>

                    <div className="payment-section">
                        <h3>Payment Method</h3>
                        <label className="payment-option">
                            <input type="radio" name="payment" value="Pay on Delivery" defaultChecked />
                            Pay on Delivery
                        </label>
                        <label className="payment-option">
                            <input type="radio" name="payment" value="Bank Transfer" />
                            Bank Transfer
                        </label>
                        <label className="payment-option">
                            <input type="radio" name="payment" value="Pay with Card" />
                            Pay with Card
                        </label>
                    </div>

                    <button className="checkout-btn" onClick={handleCheckout}>Proceed to Checkout</button>
                </div>
            </div>
        </section>
    );
};

export default Cart;
