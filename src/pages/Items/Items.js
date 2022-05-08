import React from 'react';

const Items = ({item}) => {
    console.log(item._id)
    const {_id, name, img, quantity, supplier, price, description} = item;
    return (
        <div>
            <img width={300} height={300} src={_id.img} alt="" />
            <h4>{name}</h4>
            <p>Price: ${price}</p>
        </div>
    );
};

export default Items;