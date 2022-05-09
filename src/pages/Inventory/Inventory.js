import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Inventory.css';

const Inventory = ({ inventory }) => {
    const { img, name, _id, price, quantity, supplier, description } = inventory;
    const navigate = useNavigate()

    const navigateToDetail = _id => {
        navigate(`/inventory/${_id}`)
    }

    // const [products, setProducts] = useState([]);

    // const navigate = useNavigate();
    // const navigateToInventoryDetail = id => {
    //     navigate(`/inventory/${id}`);
    // }

    // const handleUserDelete = id => {
    //     const proceed = window.confirm('Are you sure you want to delete?');
    //     if (proceed) {
    //         console.log('deleting user with id, ', id);
    //         const url = `http://localhost:5000/inventory/${id}`;
    //         fetch(url, {
    //             method: 'DELETE'
    //         })
    //             .then(res => res.json())
    //             .then(data => {
    //                 if (data.deletedCount > 0) {
    //                     console.log('deleted');
    //                     const remaining = products.filter(product => products._id !== id);
    //                     setProducts(remaining);
    //                 }
    //             })
        // }
    // }


    return (
        <div className='mobile'>
            <img height={300} width={300} src={img} alt="" />
            <div>
                <h4>{name}</h4>
                <p>Price: ${price}</p>
                <p>Supplier: {supplier}</p>
                <Link to={`/inventory/${_id}`}><button onClick={() => navigateToDetail(_id)}>Details</button></Link>
            </div>
            {/* <div>
                {
                    products.map(product => <li
                        key={setProducts._id}
                    >{product.name}:: {product.email}
                        <Link to={`/update/${product._id}`}><button>Update</button></Link>
                        <button onClick={() => handleUserDelete(product._id)}>Delete</button>
                    </li>)
                }
                <div className='quantity'>
                    <p>Quantity: {quantity}</p>
                    <Link to={`/inventory/${inventory._id}`}><button>Update</button></Link>
                    <button onClick={() => navigateToInventoryDetail(_id)} className='btn btn-primary'>Delevered</button>
                    
                    <button onClick={() => handleUserDelete(_id)}>Delete</button>
                </div>
            </div> */}

        </div>
    );
};

export default Inventory;