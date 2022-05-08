import React from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import PageTitle from '../shared/PageTitle/PageTitle';

const AddNewItem = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        fetch('http://localhost:5000/inventory', {
            method: 'POST',
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

    return (
        <div className='w-50 mx-auto'>
            <PageTitle title="add new item"></PageTitle>
            <h2>Please Add New Inventory Item</h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='Inventory Name' {...register("name", { required: true, maxLength: 20 })} />
                <input className='mb-2' placeholder='Supplier Name' {...register("supplier", { required: true, maxLength: 20 })} />
                <input className='mb-2' placeholder='Price' type="number" {...register("price",)} />
                <input className='mb-2' placeholder='Quantity' type="number" {...register("quantity",)} />
                <input className='mb-2' placeholder='Description' {...register("description",)} />
                <input className='mb-2' placeholder='Photo URL' {...register("img",)} />
                <input type="submit" />
            </form>

        </div>
    );
};

export default AddNewItem;