import React from "react";
import StockIndicator from "./StockIndicator";

const InventoryTable = ({ inventory, onEdit, onDelete }) => (
    <table className="min-w-full bg-white shadow-md rounded-lg">
        <thead>
            <tr>
                <th className="px-4 py-2 text-left">Item Name</th>
                <th className="px-4 py-2 text-left">Category</th>
                <th className="px-4 py-2 text-left">Supplier</th>
                <th className="px-4 py-2 text-center">Stock Level</th>
                <th className="px-4 py-2 text-center">Actions</th>
            </tr>
        </thead>
        <tbody>
            {inventory.map((item) => (
                <tr key={item.id}>
                    <td className="px-4 py-2">{item.name}</td>
                    <td className="px-4 py-2">{item.category}</td>
                    <td className="px-4 py-2">{item.supplier}</td>
                    <td className="px-4 py-2 text-center">
                        <StockIndicator quantity={item.quantity} />
                    </td>
                    <td className="px-4 py-2 text-center">
                        <button
                            className="bg-blue-500 text-white px-3 py-1 rounded mr-2"
                            onClick={() => onEdit(item)}
                        >
                            Edit
                        </button>
                        <button
                            className="bg-red-500 text-white px-3 py-1 rounded"
                            onClick={() => onDelete(item.id)}
                        >
                            Delete
                        </button>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
);

export default InventoryTable;
