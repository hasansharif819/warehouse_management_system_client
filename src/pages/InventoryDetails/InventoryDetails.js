import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import useInventoryDetails from '../../hooks/useInventoryDetails';

const InventoryDetails = () => {
    const [user] = useAuthState(auth);
    const {inventoriesId} = useParams();
    const [inventoryDetails] = useInventoryDetails(inventoriesId);

    return (
        <div className='w-50 mx-auto'>
            <h2>Hello inventory: {inventoryDetails.name}</h2>
            <form>
                <input className='w-100 mb-2' type="text" name='name' placeholder='name' required />
                <input className='w-100 mb-2' type="email" value={user.email} name='email' placeholder='email' readOnly required />
                <input className='w-100 mb-2' type="text" value={inventoryDetails.name} name='inventoryName' placeholder='inventoryName' required />
                <input className='w-100 mb-2' type="text" name='address' placeholder='address' readOnly required />
                <input className='w-100 mb-2' type="text" name='phone' placeholder='phone' required />
                <input type="submit" value="Delevered" />
            </form>
        </div>
    );
};

export default InventoryDetails;