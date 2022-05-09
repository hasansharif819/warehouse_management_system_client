import React from 'react';
import useInventory from '../../hooks/useInventory';
import './Items.css';

const Items = ({item, handleDelete}) => {
    console.log(item.name)
    const {_id, name, img, quantity, supplier, price, description} = item;

    return (
        <div className='mobile'>
            <img width={300} height={300} src={item._id.img} alt="" />
            <div>
            <h4>Name: {item.name}</h4>
            <p>Price: ${item.price}</p>
            </div>
            <div>
                <button onClick={() => handleDelete(_id)} className='btn btn-danger'>Delete</button>
            </div>
        </div>
    );
};


export default Items;