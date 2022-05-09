import React from 'react';
import { Link } from 'react-router-dom';
import useInventory from '../../hooks/useInventory';
import ManageInventorySingle from '../ManageInventorySingle/ManageInventorySingle';

const ManageInventory = () => {
    const [inventories, setInventories] = useInventory();
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure');
        if (proceed) {
            const url = `https://quiet-hamlet-98961.herokuapp.com/inventory/${id}`;
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = inventories.filter(inventory => inventory._id !== id);
                    setInventories(remaining);
                })
        }
    }

    return (
        <div>
            <h2>
                <Link to='/addNewItem'>
                    <button className='btn btn-primary'>Add New Item</button>
                </Link>
            </h2>
            <div className='mobileGrid'>
                {
                    inventories.map(inventory => <ManageInventorySingle
                        key={inventory._id}
                        inventory={inventory}
                        handleDelete={handleDelete}
                    ></ManageInventorySingle>)
                }
            </div>
        </div>
    );
};

export default ManageInventory;