import React, { useEffect, useState } from "react";
import CartContext from "../CartContext";
import useAuth from "../hooks/useAuth";
import { getCartByUser, createCart } from "../axios-services/cart";

const CartProvider = ({ children }) => {
  const { token, user } = useAuth();
  const [cart, setCart] = useState({ product_orders: [] });

  useEffect(() => {
    const getCart = async () => {
      if (user.username !== "guest") {
        const backendCart = await getCartByUser(user.id);
        setCart(backendCart);
      }
    };
    getCart();
  }, [user]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
