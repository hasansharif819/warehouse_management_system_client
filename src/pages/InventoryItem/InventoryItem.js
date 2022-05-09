import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './InventoryItem.css';
//--------------load Start---------------------
const InventoryItem = () => {
    const { inventoryId } = useParams();
    console.log(inventoryId)
    const [product, setProduct] = useState([]);
    useEffect( () => {
        const url = `http://localhost:5000/inventory/${inventoryId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setProduct(data))
    }, [])
    //----------------Load End--------------------

    //------------------Delete Button Start--------
const [products, setProducts] = useState([]);

   

    const handleUserDelete = id => {
        const proceed = window.confirm('Are you sure you want to delete?');
        if (proceed) {
            console.log('deleting user with id, ', id);
            const url = `http://localhost:5000/inventory/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        console.log('deleted');
                        const remaining = products.filter(productSingle => products._id !== id);
                        setProducts(remaining);
                    }
                })
        }
    }

    //-------------------Delete button end----------

    //------------------------delevery button start--------
    const navigate = useNavigate();
    const navigateToInventoryDetail = id => {
        navigate(`/inventoryDetails/${id}`);
    }
    //------------------delevery button end-------------

    //---------------update button start-----------------
    const handleUpdate = id => {
        const add = product.quantity + 1;
        return add;
    }
    //-----------------update button end----------------
    return (
        <div>
            <h2>Inventory Details: {inventoryId}</h2>
            <div className='itemClass'>
                <div className="image">
                <img src={product.img} alt="" />
                </div>
                <div className="name">
                    <h4>{product.name}</h4>
                    <h5>Brand : {product.supplier}</h5>
                    <h5>Price: ${product.price}</h5>
                    <p>Description: {product.description}</p>
                    <p>Stock: {product.quantity}</p>
                </div>
                <div className="buttonClass">
                    <button onClick={handleUpdate}>Update</button>
                    <button onClick={() => navigateToInventoryDetail(inventoryId)} className='btn btn-primary'>Delevered</button>
                    <button onClick={() => handleUserDelete(inventoryId)}>Delete</button>
                </div>
            </div>
            
        </div>
    );
};

export default InventoryItem;