import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Bike = () => {
    return (
        <div>
            <h1 className='text-center my-5'>Super Bike</h1>
            <Row>
                <Col>
                    <img className='w-100' src="https://i.ibb.co/GkL96qz/right-front-three-quarter.webp" alt="" />
                </Col>

                <Col className='pt-5'>
                    <h3> <span className='text-danger'>
                        RACER</span> SUPPORT </h3>
                    <p>Kawasaki warrants the product specified to be free of manufacturing defects for the period shown in the table from the original date of sale by an authorised Kawasaki dealer.
                    If, within the warranty period, a failure occurs which is determined by Kawasaki to be caused by a manufacturing defect, Kawasaki will, at its discretion, arrange for the repair or replacement of the necessary parts at no cost to the customer.</p>
                </Col>
            </Row>
        </div>
    );
};

export default Bike;