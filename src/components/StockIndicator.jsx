import React from "react";

const StockIndicator = ({ quantity }) => {
    let bgColor = "bg-green-500"; 

    if (quantity < 10) {
        bgColor = "bg-red-500"; 
    } else if (quantity >= 10 && quantity < 30) {
        bgColor = "bg-yellow-500"; 
    }

    return (
        <span
            className={`px-2 py-1 text-sm text-white ${bgColor} rounded-full`}
        >
            {quantity} in stock
        </span>
    );
};

export default StockIndicator;
