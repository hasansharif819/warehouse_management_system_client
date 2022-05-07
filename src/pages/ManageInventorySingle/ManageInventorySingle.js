import React from 'react';

const ManageInventorySingle = ({inventory, handleDelete}) => {
    const {_id, name, img, price, supplier, quantity, description} = inventory;
    return (
        <div className='mobile'>
            <img height={300} width={300} src={img} alt="" />
            <div>
                <h5>{name}</h5>
                <p>Price: ${price}</p>
                <p>Quantity: {}quantity</p>
                <p>Supplier: {supplier}</p>
                <p>Description: {description}</p>
            </div>
            <div>
                <button onClick={() => handleDelete(_id)}>Delete</button>
            </div>

        </div>
    );
};

export default ManageInventorySingle;