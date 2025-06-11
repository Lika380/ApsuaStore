
import { useState } from 'react';
import Header from "./components/Header";
import Main from './pages/Main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/Dashboard';
import AdminPanel from './admin/AdminPanel';




function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <div className="app">

    <BrowserRouter>
      <Header
          onMenuClick = {toggleSidebar}
        />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </BrowserRouter>
  
    </div>
  )
}

export default App;
