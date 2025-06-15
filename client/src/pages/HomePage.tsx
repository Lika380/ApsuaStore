import React from "react";
import { Catalog } from "./Catalog";
import { CartItem } from "../components/types";

const mockProducts: CartItem[] = [
  { id: "1", name: "Смартфон", price: 19999, quantity: 0 },
  { id: "2", name: "Ноутбук", price: 59999, quantity: 0 },
  { id: "3", name: "Наушники", price: 4999, quantity: 0 },
];

export default function HomePage() {
  return (
    <div>
      <h2>Каталог товаров</h2>
      {mockProducts.map(product => (
        <Catalog key={product.id} product={product} />
      ))}
    </div>
  );
}
