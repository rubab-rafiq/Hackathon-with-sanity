// app/components/Cart.tsx (or your preferred path)
import React from "react";

interface ICartItem {
    image: string;
  title: string;
  slug: string;
  colors: string[];
  sizes: string[];
  quantity: number;
}
const getCartItems = (): ICartItem[] => {
    if (typeof window === "undefined") {
      return []; // Return an empty array when running on the server
    }
  
    const cart = localStorage.getItem("cart");
    return cart ? JSON.parse(cart) : [];
  };
  
const Cart = () => {
  const cartItems = getCartItems();

  return (
    <div>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.slug} className="cart-item">
            <h3>{item.title}</h3>
            <p>Color: {item.colors?.join(", ")}</p>
            <p>Size: {item.sizes?.join(", ")}</p>
            <p>Quantity: {item.quantity}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
