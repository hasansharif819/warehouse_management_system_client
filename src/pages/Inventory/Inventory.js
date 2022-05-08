import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Inventory.css';

const Inventory = ({ inventory }) => {
    const { img, name, _id, price, quantity, supplier, description } = inventory;

    const navigate = useNavigate();
    const navigateToInventoryDetail = id => {
        navigate(`/inventories/${id}`);
    }


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
                <button onClick={() => navigateToInventoryDetail(_id)} className='btn btn-primary'>Delevered</button>
            </div>
        </div>
    );
};

export default Inventory;