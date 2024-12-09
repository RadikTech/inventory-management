import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import InventoryPage from "./pages/InventoryPage";
import SupplierPage from "./pages/SupplierPage";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <Router>
      <div className="bg-gray-100 min-h-screen">
        <nav className="bg-blue-600 p-4 text-white flex justify-between">
          <h1 className="text-lg font-bold">Inventory Management</h1>
          <div>
            <Link to="/" className="px-3 hover:underline">Dashboard</Link>
            <Link to="/inventory" className="px-3 hover:underline">Inventory</Link>
            <Link to="/suppliers" className="px-3 hover:underline">Suppliers</Link>
          </div>
        </nav>
        <div className="p-4">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/inventory" element={<InventoryPage />} />
            <Route path="/suppliers" element={<SupplierPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
