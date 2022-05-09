import React from 'react';
import { Link } from 'react-router-dom';
import './HomeInventory.css';

const HomeInventory = ({inventory}) => {
    const {img, name, price} = inventory;
    return (
        <div>
        <div className='mobile-home'>
            <img width={300} height={300} src={img} alt="" />
            <h4>{name}</h4>
            <p>Price: {price}</p>
        </div>
        </div>
    );
};

export default HomeInventory;