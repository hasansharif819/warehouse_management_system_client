import React from 'react';
import useInventory from '../../hooks/useInventory';
import ManageInventorySingle from '../ManageInventorySingle/ManageInventorySingle';

const ManageInventory = () => {
    const [inventories, setInventories] = useInventory();
    const handleDelete = id => {
        // console.log('clicked')
        const proceed = window.confirm('Are you sure');
        if(proceed){
            const url = `http://localhost:5000/inventory/${id}`;
            fetch(url, {
                method: 'DELETE',
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const remaining = inventories.filter(inventory => inventory._id !== id);
                setInventories(remaining);
            })
        }
        
    }

    return (
        <div>
            <h2>Manage inventory</h2>
            <div>
                {
                    inventories.map(inventory => <ManageInventorySingle
                        key={inventory._id}
                        inventory = {inventory}
                        handleDelete = {handleDelete}
                    ></ManageInventorySingle>)
                }
            </div>
        </div>
    );
};

export default ManageInventory;