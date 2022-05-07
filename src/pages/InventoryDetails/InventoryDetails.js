import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const InventoryDetails = () => {
    const {id} = useParams();
    const [inventoryDetails, setInventoryDetails] = useState([]);

    useEffect( () => {
        const url = `http://localhost:5000/inventory/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setInventoryDetails(data))
    }, [])

    return (
        <div>
            <h2>Hello inventory: {inventoryDetails.name}</h2>
        </div>
    );
};

export default InventoryDetails;