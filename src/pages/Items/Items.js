import React from 'react';
import useInventory from '../../hooks/useInventory';
import './Items.css';

const Items = ({item, handleDelete}) => {
    console.log(item._id)
    const {_id, name, img, quantity, supplier, price, description} = item;

    return (
        <div className='mobile'>
            <img width={300} height={300} src={_id.img} alt="" />
            <div>
            <h4>Name: {name}</h4>
            <p>Price: ${price}</p>
            </div>
            <div>
                <button onClick={() => handleDelete(_id)} className='btn btn-danger'>Delete</button>
            </div>
        </div>
    );
};


export default Items;