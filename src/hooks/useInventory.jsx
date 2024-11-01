import { useEffect, useState, useContext } from "react"
import {InventoryProvider, Inventory} from "../context/InventoryProvider";

const useInventory = () => {
    const {inventory, setInventory} = Inventory();

    const addToInventory = (name, price) => {
        const newInventory = inventory;
        const found = newInventory.findIndex(x => x.name === name);
        if (found != -1){
            newInventory[found].quantity = newInventory[found].quantity + 1;
        } else {
            let newItem = {
                "name": name,
                "price": price,
                "quantity": 1
            };
            newInventory.push(newItem);
        }
        setInventory([...newInventory])
        return inventory
    }
    
    const removeFromInventory = (name) => {
        const newInventory = inventory;
        const found = newInventory.findIndex(x => x.name === name);
        if (found != -1){
            let quantity = newInventory[found].quantity;
            if(quantity <= 1){
                newInventory.splice(found, 1)
            }else{
                newInventory[found].quantity = newInventory[found].quantity - 1;
            }
        }
        setInventory([...newInventory])
        return inventory
    }
    
    return {inventory, addToInventory, removeFromInventory}
}

export default useInventory


// export default {inventory, addToInventory, removeFromInventory}
