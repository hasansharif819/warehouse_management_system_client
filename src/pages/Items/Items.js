import React, { useState } from 'react';
import './Items.css';

const Items = ({ item }) => {
    //------------------Delete Button Start--------
    const [products, setProducts] = useState([]);

    const handleUserDelete = id => {
        const proceed = window.confirm('Are you sure you want to delete?');
        if (proceed) {
            console.log('deleting user with id, ', item._id);
            const url = `https://quiet-hamlet-98961.herokuapp.com/myitem/${item._id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remaining = products.filter(product => products._id !== id);
                        setProducts(remaining);
                    }
                })
        }
    }

    //-------------------Delete button end----------

    return (
        <div className='mobile'>
            <div>
                <h4>Name: {item.inventory}</h4>
                <p>Email: {item.email}</p>
                <p>Address: {item.address}</p>
                <p>Phone: {item.phone}</p>
                <p>{item._id}</p>
            </div>
            <div>
                <button onClick={() => handleUserDelete(item._id)} className='btn btn-danger'>Delete</button>
            </div>
        </div>
    );
};


export default Items;