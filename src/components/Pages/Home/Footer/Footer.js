import React from 'react';
import { Col, Row } from 'react-bootstrap';
//footer section
const Footer = () => {
    return (
        <div className='bg-dark text-light mt-5'>
            <div style={{ padding: '50px' }}>
                <Row className='mx-auto'>
                    <Col md="3"></Col>
                    <Col md="5">
                        <h3>Contact us</h3>
                        <h6>Phone : 01123111333</h6>
                        <h6>email : diptahero@gmail.com</h6>
                        <h6>Phone : 013147112390</h6>
                        <h6>Phone : 013112234440</h6>
                    </Col>

                    <Col md="4">
                        <h3>Services</h3>
                        <h6>Triers</h6>
                        <h6>Form</h6>
                        <h6>Fork</h6>
                        <h6>Paddle</h6>
                    </Col>
                    <Col md="12">
                        <p className='text-center mt-5'>PHeroBoss@ Copyright.2022 reserved</p>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Footer;