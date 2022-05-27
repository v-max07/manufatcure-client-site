import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import './Order.css';

const Order = () => {

    const [user] = useAuthState(auth)
    const { id } = useParams();
    const [error, setError] = useState('');
    const [restocks, setRestock] = useState(0)
    const [service, setService] = useState({});
    // const [services, setServices] = useState([]);
    const [quantity, setQuantity] = useState(1000);
    fetch(`http://localhost:5000/service/${id}`)
        .then(res => res.json())
        .then(data => setService(data));

    const submit = event => {
        event.preventDefault()
        if (quantity > service.quantity) {
            setError('Sorry, product not available!')
        }

        else {
            const booking = {
                userName: user?.displayName,
                email: user?.email,
                name: service?.name,
                quantity: quantity,
                per_price: service.per_price,
            }
            fetch('http://localhost:5000/order', {
                method: 'POST', // or 'PUT'
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(booking),
            })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                });

            fetch('http://localhost:5000/order', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(booking),
            })
                .then(res => res.json())
                .then(data => console.log(data))
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
                            <img className='text-center w-100' src={service.picture} alt="" />
                            <h2 className='text-center'>{service.name}</h2>
                            <p>{service.description}</p>
                            <p className='fw-bold' style={{ color: '#6554ed', fontSize: '18px' }}>Available : {service.quantity}</p>
                            <p style={{ fontStyle: 'italic', color: 'red', fontWeight: 'bold' }}>
                                {
                                    error ? error : ''
                                }
                            </p>

                        </div>
                    </Col>
                    <Col className='p-5'>
                        <div>
                            <Form.Group controlId="formBasicEmail">
                                <p>Restock</p>
                                <Form.Control type="number" onBlur={restock} placeholder="restock" />
                                <button className='restocksUpdateBtn' onClick={update}>update</button>

                            </Form.Group>
                            <Form onSubmit={submit}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">

                                    <Form.Control type="name" placeholder="Enter email" value={user.displayName} />

                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">

                                    <Form.Control type="email" placeholder="Enter email" value={user.email} />

                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">

                                    <Form.Control type="name" placeholder="name" value={service.name} />
                                </Form.Group>


                                <Form.Group className="mb-3" controlId="formBasicPassword">

                                    <Form.Control type="number" placeholder="you can order getter than 1000" value={quantity} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <p>per-price</p>
                                    <Form.Control type="number" placeholder="you can order getter than 1000" value={service.per_price} />
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