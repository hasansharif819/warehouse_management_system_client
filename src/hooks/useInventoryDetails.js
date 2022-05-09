import { useEffect, useState } from "react";

const useInventoryDetails = inventoryId => {
    const [inventoryDetail, setInventoryDetail] = useState({});
    useEffect( () => {
        const url = `http://localhost:5000/inventoryDetails/${inventoryId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setInventoryDetail(data))

    }, [inventoryId])
    return [inventoryDetail];
}

export default useInventoryDetails;