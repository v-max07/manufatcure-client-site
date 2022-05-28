import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Service from './Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://enigmatic-sea-81368.herokuapp.com/available')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <Container>
            <Row>
                <h1 className='text-center'>All Products</h1>
                {
                    services.map(service => <Col key={service._id} md="4" className='py-3'>
                        <Service service={service}></Service>
                    </Col>)
                }
            </Row>
        </Container>
    );
};

export default Services;