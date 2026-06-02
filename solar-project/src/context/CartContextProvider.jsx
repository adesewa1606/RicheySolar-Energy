import { useState } from "react";
import { CartContext } from "./CartContext";

// CREATE PROVIDER
const CartContextProvider = ({ children }) => {

    // STATE
    const [cartItems, setCartItems] = useState([]);

    // ADD TO CART
    const addToCart = (product) => {

        const existingItem = cartItems.find(
            (item) => item.id === product.id
        );

        // IF PRODUCT ALREADY EXISTS
        if (existingItem) {

            const updatedCart = cartItems.map((item) =>
                item.id === product.id
                    ? { ...item, qty: item.qty + 1 }
                    : item
            );

            setCartItems(updatedCart);

        } else {

            // ADD NEW PRODUCT
            setCartItems([
                ...cartItems,
                {
                    ...product,
                    qty: 1,
                },
            ]);

        }
    };

    // REMOVE FROM CART
    const removeFromCart = (id) => {

        const filteredCart = cartItems.filter(
            (item) => item.id !== id
        );

        setCartItems(filteredCart);
    };

    // DECREASE QUANTITY
    const decreaseQty = (id) => {

        const item = cartItems.find((item) => item.id === id);

        if (item.qty === 1) {

            removeFromCart(id);

        } else {

            setCartItems(
                cartItems.map((item) =>
                    item.id === id
                        ? { ...item, qty: item.qty - 1 }
                        : item
                )
            );

        }
    };

    // CLEAR CART
    const clearCart = () => {
        setCartItems([]);
    };

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
                removeFromCart,
                clearCart,
                decreaseQty,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;