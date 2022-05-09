import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import PageTitle from '../shared/PageTitle/PageTitle';
import './InventoryItem.css';
//--------------load Start---------------------
const InventoryItem = () => {
    const { inventoryId } = useParams();
    const [product, setProduct] = useState([]);
    useEffect(() => {
        const url = `http://localhost:5000/inventory/${inventoryId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [inventoryId])

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
    const handleUpdate = inventoryId => {
        console.log(product)
        const add = parseInt(product.quantity + 1);
        return add;
    }

    //-----------------update button end----------------

    //-------------------form start--------------------
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        const url = `http://localhost:5000/inventory/${inventoryId}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(result => {
                console.log('Success:', result);
            });
            if(data.insertedId){
                toast('Successfully Addeded your item');
                data.target.reset();
            }
    };
    //-------------------form end-----------------------
    return (
        <div>
            <PageTitle title="inventory/inventoryId"></PageTitle>

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
                    <button onClick={() => handleUpdate(inventoryId)} className='btn btn-primary'>Update</button>
                    <button onClick={() => navigateToInventoryDetail(inventoryId)} className='btn btn-success'>Delevered</button>
                    <button onClick={() => handleUserDelete(inventoryId)} className='btn btn-danger'>Delete</button>
                </div>
            </div>
            {/* form */}
            <div className='w-50 mx-auto'>
                <h2>Please update Item</h2>
                <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                    <input className='mb-2' value={product.name} placeholder='Inventory Name' {...register("name", { required: true, maxLength: 20 })} />
                    <input className='mb-2' value={product.supplier} {...register("supplier", { required: true, maxLength: 20 })} />
                    <input className='mb-2' placeholder='Price' type="number" {...register("price",)} />
                    <input className='mb-2' placeholder='Quantity' type="number" {...register("quantity",)} />
                    <input className='mb-2' placeholder='Description' {...register("description",)} />
                    <input className='mb-2' placeholder='Photo URL' {...register("img",)} />
                    <input type="Update Product" />
                </form>
            </div>

        </div>
    );
};

export default InventoryItem;