import React from "react";

const SupplierTable = ({ suppliers, onEdit, onDelete }) => (
    <table className="min-w-full bg-white shadow-md rounded-lg">
        <thead>
            <tr>
                <th className="px-4 py-2 text-left">Name</th>
                <th className="px-4 py-2 text-left">Contact</th>
                <th className="px-4 py-2 text-left">Items Supplied</th>
                <th className="px-4 py-2 text-center">Actions</th>
            </tr>
        </thead>
        <tbody>
            {suppliers.map((supplier) => (
                <tr key={supplier.id}>
                    <td className="px-4 py-2">{supplier.name}</td>
                    <td className="px-4 py-2">{supplier.contact}</td>
                    <td className="px-4 py-2">{supplier.itemsSupplied}</td>
                    <td className="px-4 py-2 text-center">
                        <button
                            className="bg-blue-500 text-white px-3 py-1 rounded mr-2"
                            onClick={() => onEdit(supplier)}
                        >
                            Edit
                        </button>
                        <button
                            className="bg-red-500 text-white px-3 py-1 rounded"
                            onClick={() => onDelete(supplier.id)}
                        >
                            Delete
                        </button>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
);

export default SupplierTable;
