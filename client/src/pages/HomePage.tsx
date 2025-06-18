import React from "react";
import { Catalog } from "./Catalog";
import { CartItem } from "../components/types";
import Product from "../components/product/product";
import '../styles/homePage.css'

const mockProducts: CartItem[] = [
  { id: "1", name: "Смартфон", price: 19999, quantity: 0 },
  { id: "2", name: "Ноутбук", price: 59999, quantity: 0 },
  { id: "3", name: "Наушники", price: 4999, quantity: 0 },
];

export default function HomePage() {
  return (
    <div className="homePage">
        <div className="home-page-content">
        <h2>Catalog</h2>
          <div className="catalog-list">
            <ul>
              <Product />
            </ul>
            {/*
           {mockProducts.map(product => (
            <Catalog key={product.id} product={product} />
          ))} 
          */}
         </div>
        </div>
      </div>
  );
}
