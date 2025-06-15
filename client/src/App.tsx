
import { useState } from 'react';
import Header from "./components/Header";
import Main from './pages/Main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/Dashboard';
import AdminPanel from './admin/AdminPanel';
import CartPage from './pages/CartPage';
import Favorites from './pages/Favorites';
import HomePage from './pages/HomePage';
import { CartProvider } from "./components/CartContext";
import "./App.css"


function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <CartProvider>
      <div className="app">
        <BrowserRouter>
          <Header onMenuClick={toggleSidebar} />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/admin" element={<AdminPanel />} />
            <Route path="/cartPage" element={<CartPage />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/catalog" element={<HomePage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </CartProvider>
  )
}


export default App;
