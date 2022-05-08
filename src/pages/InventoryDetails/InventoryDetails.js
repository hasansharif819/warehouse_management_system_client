import axios from 'axios';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import useInventoryDetails from '../../hooks/useInventoryDetails';

const InventoryDetails = () => {
    const [user] = useAuthState(auth);
    const {inventoriesId} = useParams();
    const [inventoryDetails] = useInventoryDetails(inventoriesId);

    const handleDelevered = event => {
        event.preventDefault();
        const delevered = {
            email: user.email,
            inventory: inventoryDetails.name,
            inventoriesId: inventoriesId,
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
            <h2>Hello inventory: {inventoryDetails.name}</h2>
            <form onSubmit={handleDelevered}>
                <input className='w-100 mb-2' type="text" name='name' placeholder='name' required />
                <input className='w-100 mb-2' type="email" value={user.email} name='email' placeholder='email' readOnly required />
                <input className='w-100 mb-2' type="text" value={inventoryDetails.name} name='inventoryName' placeholder='inventoryName' readOnly required />
                <input className='w-100 mb-2' type="text" name='address' placeholder='address' required />
                <input className='w-100 mb-2' type="text" name='phone' placeholder='phone' required />
                <input type="submit" value="Delevered" />
            </form>
        </div>
    );
};

export default InventoryDetails;