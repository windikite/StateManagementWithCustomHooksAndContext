import { createContext, useContext, useState, useEffect } from "react";

const InventoryContext = createContext();

export const Inventory = () => useContext(InventoryContext)

export const InventoryProvider = ({children}) => {
    const [inventory, setInventory] = useState([
        {name: "CD-Rom", price: 25, quantity: 4}, 
        {name: "Laptop", price: 400, quantity: 1}
    ])

    return (
        <InventoryContext.Provider value={{inventory, setInventory}}>
            {children}
        </InventoryContext.Provider>
    )
}
