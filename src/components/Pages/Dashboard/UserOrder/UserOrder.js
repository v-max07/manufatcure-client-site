import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';

const UserOrder = () => {
    const [user] = useAuthState(auth)
    const [order, setOrder] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/order/${user?.email}`)
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [user])
    return (
        <div>
            <h2>user order :{order.length}</h2>
        </div>
    );
};

export default UserOrder;