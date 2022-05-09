import axios from 'axios';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';

const InventoryDetails = () => {
    const { inventoryId } = useParams();
    const [user] = useAuthState(auth);

    const [delevery, setDelevery] = useState([]);
    useEffect( () => {
        const url = `http://localhost:5000/inventory/${inventoryId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setDelevery(data))
    }, [])

    const handleDelevered = event => {
        event.preventDefault();
        const delevered = {
            email: user.email,
            inventory: delevery.name,
            inventoriesId: inventoryId,
            address: event.target.address.value,
            phone: event.target.phone.value
        }
        axios.post('http://localhost:5000/myitem', delevered)
        .then(response => {
            const {data} = response;
            if(data.insertedId){
                toast('Your delevery is successfull');
                event.target.reset();
            }
        })
    }

    return (
        <div className='w-50 mx-auto'>
            <form onSubmit={handleDelevered}>
                <input className='w-100 mb-2' type="text" name='name' placeholder='name' required />
                <input className='w-100 mb-2' type="email" name='email' placeholder='email' value={user?.email} required />
                <input className='w-100 mb-2' type="text" name='inventoryName' placeholder='inventoryName' value={delevery.name} required />
                <input className='w-100 mb-2' type="text" name='address' placeholder='address' required />
                <input className='w-100 mb-2' type="text" name='phone' placeholder='phone' required />
                <input type="submit" value="Delevered" />
            </form>
            <ToastContainer />
        </div>
    );
};

export default InventoryDetails;