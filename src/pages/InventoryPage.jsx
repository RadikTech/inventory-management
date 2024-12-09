import React, { useState } from "react";
import InventoryTable from "../components/InventoryTable";
import InventoryForm from "../components/InventoryForm";

const InventoryPage = () => {
    const [inventory, setInventory] = useState([]);
    const [editingItem, setEditingItem] = useState(null);

    const addOrUpdateItem = (item) => {
        if (editingItem) {
            setInventory(
                inventory.map((i) => (i.id === editingItem.id ? { ...item, id: i.id } : i))
            );
            setEditingItem(null);
        } else {
            setInventory([...inventory, { ...item, id: Date.now() }]);
        }
    };

    const deleteItem = (id) => {
        setInventory(inventory.filter((item) => item.id !== id));
    };

    return (
        <div className="grid gap-6">
            <h2 className="text-xl font-bold">Manage Inventory</h2>
            <InventoryForm onSubmit={addOrUpdateItem} initialData={editingItem} />

            <InventoryTable
                inventory={inventory}
                onEdit={(item) => {
                    setEditingItem(item);
                }}
                onDelete={deleteItem}
            />
        </div>
    );
};

export default InventoryPage;
