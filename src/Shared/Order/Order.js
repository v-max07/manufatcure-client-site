import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import './Order.css';
import { toast } from 'react-toastify';

const Order = () => {

    const [user] = useAuthState(auth)
    const { id } = useParams();
    const [error, setError] = useState('');
    const [restocks, setRestock] = useState(0)
    const [service, setService] = useState();
    const [services, setServices] = useState([]);
    const [quantity, setQuantity] = useState(1000);
    fetch(`https://enigmatic-sea-81368.herokuapp.com/available`)
        .then(res => res.json())
        .then(data => setServices(data));
    const product = [];
    if (services) {
        console.log(services)
        const single = services?.find(u => u._id === id)

        if (single) {
            product.push(single)
        }
    }
    console.log(product[0]?.quantity)
    const submit = event => {
        event.preventDefault()
        if (quantity > product[0]?.quantity) {
            setError('*Sorry Product Quantity is too high!!! Not available.')
        }

        else {
            const booking = {
                userName: user?.displayName,
                email: user?.email,
                name: product[0]?.name,
                quantity: quantity,
                per_price: product[0]?.per_price,
            }
            fetch(`https://enigmatic-sea-81368.herokuapp.com/order/${product[0].name}`, {
                method: 'PUT', // or 'PUT'
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(booking),
            })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                });

            fetch('https://enigmatic-sea-81368.herokuapp.com/order', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(booking),
            })
                .then(res => res.json())
                .then(data => console.log(data))

            toast("Yea! Order done.")
        }

    }
    const restock = event => {
        setRestock(event.target.value);
    }
    const update = event => {
        const oldQuantity = parseInt(quantity);
        const newQuantity = parseInt(restocks)
        setQuantity(oldQuantity + newQuantity)

    }

    return (
        <div>
            <Row className='w-100 mt-5'>
                <Col md="10" className='mx-auto d-flex'>
                    <Col>
                        <div className='card-container border'>
                            <p className='fw-bold' style={{ color: '#6554ed', fontSize: '18px' }}>Available Quantity : {product[0]?.quantity}</p>
                            <p style={{ fontStyle: 'italic', color: 'red', fontWeight: 'bold' }}>
                                {
                                    error ? error : ''
                                }
                            </p>
                            <img className='text-center w-100' src={product[0]?.picture} alt="" />
                            <h2 className='text-center'>{product[0]?.name}</h2>
                            <p>{product[0]?.description}</p>
                        </div>
                    </Col>
                    <Col className='p-5'>
                        <div>
                            <Form.Group controlId="formBasicEmail">
                                <p className='text-success fw-bold'>*If you want to more than 1000 products, you should add....</p>
                                <Form.Control type="number" onBlur={restock} placeholder="Add quantity...." />
                                <button className='restocksUpdateBtn' onClick={update}>Add quantity</button>

                            </Form.Group>
                            <Form onSubmit={submit}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">

                                    <Form.Control type="name" placeholder="Enter email" value={user.displayName} />

                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">

                                    <Form.Control type="email" placeholder="Enter email" value={user.email} />

                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">

                                    <Form.Control type="name" placeholder="name" value={product[0]?.name} />
                                </Form.Group>


                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <p>Minimum Quantity</p>
                                    <Form.Control type="number" placeholder="you can order getter than 1000" value={quantity} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <p>per-price</p>
                                    <Form.Control type="number" placeholder="you can order getter than 1000" value={product[0]?.per_price} />
                                </Form.Group>

                                <Button variant="primary" type="submit">
                                    Order
                                </Button>
                            </Form>
                        </div>
                    </Col>
                </Col>
            </Row>

        </div>
    );
};

export default Order;