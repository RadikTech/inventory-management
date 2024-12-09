import React, { useState, useEffect } from "react";

const SupplierForm = () => {
    const [suppliers, setSuppliers] = useState(() => {
        const savedSuppliers = JSON.parse(localStorage.getItem("suppliers"));
        return savedSuppliers || [];
    });

    const [formData, setFormData] = useState({
        name: "",
        contact: "",
        itemsSupplied: ""
    });

    useEffect(() => {
        localStorage.setItem("suppliers", JSON.stringify(suppliers));
    }, [suppliers]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.name && formData.contact && formData.itemsSupplied) {
            setSuppliers((prevSuppliers) => [...prevSuppliers, formData]);
            setFormData({ name: "", contact: "", itemsSupplied: "" });
        } else {
            alert("Please fill in all fields.");
        }
    };

    const handleRemoveSupplier = (index) => {
        const updatedSuppliers = suppliers.filter((_, i) => i !== index);
        setSuppliers(updatedSuppliers);
    };

    return (
        <div>
            <form className="p-4 bg-white shadow rounded-lg space-y-4" onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700">Supplier Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Contact</label>
                    <input
                        type="text"
                        name="contact"
                        value={formData.contact}
                        onChange={handleChange}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Items Supplied</label>
                    <input
                        type="text"
                        name="itemsSupplied"
                        value={formData.itemsSupplied}
                        onChange={handleChange}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded w-full sm:w-auto"
                >
                    Add Supplier
                </button>
            </form>

            <div className="mt-8">
                <h2 className="text-xl font-semibold">Suppliers List</h2>
                <div className="space-y-4 mt-4">
                    {suppliers.map((supplier, index) => (
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
        </div>
    );
};

export default SupplierForm;
