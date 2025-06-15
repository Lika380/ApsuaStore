import React from "react";
import { useCart } from "../components/CartContext"; // правильный путь

export const Product = () => {
  const { addToCart } = useCart();

  const handleAdd = () => {
    addToCart({
      id: "1",
      name: "Смартфон",
      price: 19999,
      quantity: 1,
    });
  };

  return (
    <div>
      <h2>Смартфон</h2>
      <p>Цена: 19999 ₽</p>
      <button onClick={handleAdd}>Добавить в корзину</button>
    </div>
  );
};
