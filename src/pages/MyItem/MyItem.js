import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Items from '../Items/Items';

const MyItem = () => {
    const [items, setItems] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    
    useEffect( () => {
        const getItems = async() => {
            const email = user.email;
            const url = `http://localhost:5000/myitem?email=${email}`;
            const {data} = await axios.get(url)
            setItems(data);
            try{
                const {data} = await axios.get(url, {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                    setItems(data);
            }
            catch(error){
                if(error.response.status === 401 || 403){
                    signOut(auth);
                    navigate('/login');
                }

            }
        }
        getItems();
    }, [user])
    return (
        <div>
            <h2>My Item: {items.length}</h2>
            <div>
                {
                    items.map(item => <Items
                        key={item._id}
                        item = {item}
                    ></Items>)
                }
            </div>
        </div>
    );
};

export default MyItem;