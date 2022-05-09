import React from 'react';
import useInventory from '../../hooks/useInventory';
import Inventory from '../Inventory/Inventory';

const Inventories = () => {
    const [inventories] = useInventory();
    return (
        <div>
            <h2>Inventory</h2>
            <div className='mobileGrid'>
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