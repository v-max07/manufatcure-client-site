import React from 'react';
import {Col, Row } from 'react-bootstrap';
import './Banner.css';

//
const Banner = () => {
    return (
        <Row className=' banner-div mb-5'>
            <Col md="5" className='pt-5'>
                    <h1 className='banner-header'>2022 TREK</h1>
                    <h1 className='banner-header'><span style={{ color: 'red' }}>MADRONE</span> SLR</h1>
                    <p className='py-2'>The all new madrone slr the proven to be on of the faster super bikes with unpeeled aerodynamics unlatch right quality and unprecedented integration</p>
                    <button className='banner-button'>BUY NOW</button>
            </Col>
            <Col md="7" >
                <img className="w-75 ms-5 border rounded" src="https://i.ibb.co/QbR2Jz6/banner.webp" alt="" />
            </Col>
        </Row>
    );
};

export default Banner;
