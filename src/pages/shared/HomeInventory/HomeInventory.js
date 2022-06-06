import React from 'react';
import { Link } from 'react-router-dom';
import './HomeInventory.css';

const HomeInventory = ({inventory}) => {
    const {img, name, price} = inventory;
    return (
        <div className='col-sm-12 col-md-6 col-lg-4 mobile-home g-3 mx-auto'>
        {/* <div> */}
            <img width={300} height={300} src={img} alt="" />
            <h4>{name}</h4>
            <p>Price: {price}</p>
        {/* </div> */}
        </div>
    );
};

export default HomeInventory;