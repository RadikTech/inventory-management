import React, { useState, useEffect } from "react";

const InventoryForm = () => {
    const [inventory, setInventory] = useState(() => {
        const savedInventory = JSON.parse(localStorage.getItem("inventoryItems"));
        return savedInventory || [];
    });

    const [formData, setFormData] = useState({
        name: "",
        quantity: 0,
        category: "",
        supplier: ""
    });

    useEffect(() => {
        localStorage.setItem("inventoryItems", JSON.stringify(inventory));
    }, [inventory]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.name && formData.quantity > 0 && formData.category && formData.supplier) {
            setInventory((prevInventory) => [...prevInventory, formData]);
            setFormData({ name: "", quantity: 0, category: "", supplier: "" });
        } else {
            alert("Please fill in all fields.");
        }
    };

    const handleRemoveItem = (index) => {
        const updatedInventory = inventory.filter((_, i) => i !== index);
        setInventory(updatedInventory);
    };

    return (
        <div>
            <form className="p-4 bg-white shadow rounded-lg space-y-4" onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700">Item Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Quantity</label>
                    <input
                        type="number"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Category</label>
                    <input
                        type="text"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Supplier</label>
                    <input
                        type="text"
                        name="supplier"
                        value={formData.supplier}
                        onChange={handleChange}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                    />
                </div>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded w-full sm:w-auto">
                    Add Item
                </button>
            </form>

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
    );
};

export default InventoryForm;
