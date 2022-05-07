import React from 'react';
import useInventory from '../../hooks/useInventory';
import Inventory from '../Inventory/Inventory';

const Inventories = () => {
    const [inventories, setInventories] = useInventory();
    return (
        <div>
            <h2>Inventories</h2>
            <div>
                {
                    inventories.map(inventory => <Inventory
                        key={inventory._id}
                        inventory = {inventory}
                    ></Inventory>)
                }
            </div>
        </div>
    );
};

export default Inventories;