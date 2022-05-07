import React from 'react';
import { Link } from 'react-router-dom';
import './HomeInventory.css';

const HomeInventory = ({inventory}) => {
    const {img, name, price} = inventory;
    return (
        <div className='mobile-home'>
            <img width={300} height={300} src={img} alt="" />
            <h4>{name}</h4>
            <p>Price: {price}</p>
            <Link to='/inventories'>
                <button className='btn btn-primary'>Details</button>
            </Link>
        </div>
    );
};

export default HomeInventory;