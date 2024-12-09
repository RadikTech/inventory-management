import React, { useState } from "react";

const Dashboard = () => {
   const [suppliers, setSuppliers] = useState(() => {
        const savedSuppliers = JSON.parse(localStorage.getItem("suppliers"));
        return savedSuppliers || [];
    });

     const [inventory, setInventory] = useState(() => {
        const savedInventory = JSON.parse(localStorage.getItem("inventoryItems"));
        return savedInventory || [];
    });
      const handleRemoveItem = (index) => {
        const updatedInventory = inventory.filter((_, i) => i !== index);
        setInventory(updatedInventory);
    };
    
  const handleRemoveSupplier = (index) => {
        const updatedSuppliers = suppliers.filter((_, i) => i !== index);
        setSuppliers(updatedSuppliers);
    };

    return(
    <div className="p-6 bg-gray-100">
        <h2 className="text-xl font-semibold mb-4">Inventory Dashboard</h2>
        <p>Manage your inventory items and supplier details efficiently.</p>

         <div className="mt-8">
                <h2 className="text-xl font-semibold">Suppliers List</h2>
                <div className="space-y-4 mt-4">
                    {suppliers?.map((supplier, index) => (
                        <div
                            key={index}
                            className="p-4 bg-white shadow rounded-lg flex justify-between items-center"
                        >
                            <div>
                                <h3 className="text-lg font-semibold">{supplier.name}</h3>
                                <p className="text-sm text-gray-600">Contact: {supplier.contact}</p>
                                <p className="text-sm text-gray-600">Items Supplied: {supplier.itemsSupplied}</p>
                            </div>
                            <button
                                onClick={() => handleRemoveSupplier(index)}
                                className="bg-red-500 text-white px-4 py-2 rounded"
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-8">
                <h2 className="text-xl font-semibold">Inventory List</h2>
                <div className="space-y-4 mt-4">
                    {inventory.map((item, index) => (
                        <div key={index} className="p-4 bg-white shadow rounded-lg flex justify-between items-center">
                            <div>
                                <h3 className="text-lg font-semibold">{item.name}</h3>
                                <p className="text-sm text-gray-600">Category: {item.category}</p>
                                <p className="text-sm text-gray-600">Supplier: {item.supplier}</p>
                                <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                            </div>
                            <button
                                onClick={() => handleRemoveItem(index)}
                                className="bg-red-500 text-white px-4 py-2 rounded"
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                </div>
            </div>
    </div>
)};

export default Dashboard;
