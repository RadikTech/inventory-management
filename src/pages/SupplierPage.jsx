import React, { useState } from "react";
import SupplierTable from "../components/SupplierTable";
import SupplierForm from "../components/SupplierForm";

const SupplierPage = () => {
    const [suppliers, setSuppliers] = useState([]);
    const [editingSupplier, setEditingSupplier] = useState(null);

    const addOrUpdateSupplier = (supplier) => {
        if (editingSupplier) {
            setSuppliers(
                suppliers.map((s) =>
                    s.id === editingSupplier.id ? { ...supplier, id: s.id } : s
                )
            );
            setEditingSupplier(null);
        } else {
            setSuppliers([...suppliers, { ...supplier, id: Date.now() }]);
        }
    };

    const deleteSupplier = (id) => {
        setSuppliers(suppliers.filter((s) => s.id !== id));
    };

    return (
        <div className="grid gap-6">
            <h2 className="text-xl font-bold">Manage Suppliers</h2>
            <SupplierForm onSubmit={addOrUpdateSupplier} initialData={editingSupplier} />
            <SupplierTable
                suppliers={suppliers}
                onEdit={(supplier) => setEditingSupplier(supplier)}
                onDelete={deleteSupplier}
            />
        </div>
    );
};

export default SupplierPage;
