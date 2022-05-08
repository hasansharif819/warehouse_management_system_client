import { useEffect, useState } from "react";

const useInventoryDetails = inventoriesId => {
    const [inventoryDetails, setInventoryDetails] = useState({});
    useEffect( () => {
        const url = `http://localhost:5000/inventory/${inventoriesId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setInventoryDetails(data))

    }, [inventoriesId])
    return [inventoryDetails];
}

export default useInventoryDetails;