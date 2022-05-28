import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Dashboard.css';

const Dashboard = () => {

    const [users, setUsers] = useState([]);
    const [User] = useAuthState(auth);

    const [identiy, setIdenti] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [User])
    const ami = User?.email;
    if (ami) {
        const identity = users.find(u => u.email === User?.email);
        identiy.push(identity)
    };

    return (
        <Container>
            <Row>
                <Col md="12">
                    {
                        identiy[5]?.role === 'admin' && <Link className='link-btn' to='/dashboard/users'>Users</Link>

                    }
                    <Link className='link-btn' to='/dashboard/order'>order</Link>
                    <Link className='link-btn' to='/dashboard/profile'>profile</Link>
                    <Link className='link-btn' to='/dashboard/payment'>payment</Link>
                </Col>
                <Col>
                    <Outlet />
                </Col>
            </Row>
        </Container>
    );
};

export default Dashboard;