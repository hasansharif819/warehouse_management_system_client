import { useParams } from 'react-router-dom';
import useInventoryDetails from '../../hooks/useInventoryDetails';

const InventoryDetails = () => {
    const {inventoriesId} = useParams();
    const [inventoryDetails] = useInventoryDetails(inventoriesId);

    return (
        <div>
            <h2>Hello inventory: {inventoryDetails.name}</h2>
        </div>
    );
};

export default InventoryDetails;