import React from 'react';
import useInventory from '../../hooks/useInventory';
import Inventory from '../Inventory/Inventory';
import PageTitle from '../shared/PageTitle/PageTitle';

const Inventories = () => {
    const [inventories] = useInventory();
    return (
        <div>
            <PageTitle title="Inventory"></PageTitle>
            <h2>Inventory</h2>
            <div className='row'>
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