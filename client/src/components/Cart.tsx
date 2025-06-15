// components/Cart.tsx
import React from "react";
import { useCart } from "../components/CartContext"
import '../styles/cart.css'

export const Cart = () => {
  const { cart, removeFromCart, updateQuantity, getTotal } = useCart();

  return (
    <div className="cartBlock">
      {cart.length === 0 ? (
        <p>Корзина пуста</p>
      ) : (
        <div className="cartCards">
          <div className="cartCardContent">
            {cart.map(item => (
              <div key={item.id} className="cartCard">
                <h4>{item.name}</h4>
                <p>Цена: {item.price} ₽</p>
                <input
                  type="number"
                  value={item.quantity}
                  onChange={e =>
                    updateQuantity(item.id, parseInt(e.target.value))
                  }
                  className="cartNumber"
                />
                <button onClick={() => removeFromCart(item.id)} className="cartDeleteBtn">Удалить</button>
              </div>
              
            ))}
            </div>
          <div className="finalPrice">
            <h3>Итого: {getTotal()} ₽</h3>
          </div>
        </div>
      )}
    </div>
  );
};
