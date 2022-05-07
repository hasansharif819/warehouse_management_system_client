import React from 'react';
import './Inventory.css';

const Inventory = ({inventory}) => {
    console.log(inventory)
    const {img, name, _id, price, quantity, supplier, description} = inventory;
    return (
        <div className='mobile'>
            <img height={300} width={300} src={img} alt="" />
            <div>
            <h4>{name}</h4>
            <p>Price: {price}</p>
            <p>Supplier: {supplier}</p>
            <p>Description: {description}</p>
            </div>
            <div className='quantity'>
                <p>Quantity: {quantity}</p>
                <button className='btn btn-primary'>Update</button>
            </div>
        </div>
    );
};

export default Inventory;