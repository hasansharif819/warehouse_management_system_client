import React from 'react';

const HomeInventory = ({product}) => {
    // const [img, name] = {product};
    return (
        <div className='mobile'>
            <img width={300} height={300} src={product.img} alt="" />
            <h4>{product.name}</h4>
            <button className='btn btn-primary p-2 mb-3'>Update</button>
        </div>
    );
};

export default HomeInventory;