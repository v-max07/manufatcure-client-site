import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';
import OrderItem from './OrderItem';

const UserOrder = () => {
    const [user] = useAuthState(auth)
    const [order, setOrder] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/order/${user?.email}`)
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [user]);
    return (
        <div>
            <h2 className='text-center my-5'>My Orders: </h2>
            <Container>
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Delete</th>             
                        </tr>
                    </thead>
                    <tbody>
                        {
                            order.map(item => <OrderItem
                                key={item._id}
                                item={item}
                            ></OrderItem>)
                        }
                    </tbody>
                </table>
            </Container>
        </div>
    );
};

export default UserOrder;