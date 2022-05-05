import React from 'react';
import './Product.css';

const Product = ({product}) => {
    // const [img, name] =product;
    return (
        <div className='mobile'>
            <img width={300} height={300} src={product.img} alt="" />
            <h4>{product.name}</h4>
            <button className='btn btn-primary'>Details</button>
        </div>
    );
};

export default Product;