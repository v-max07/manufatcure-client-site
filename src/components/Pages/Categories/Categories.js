import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Categories = () => {
    return (
        <div className='my-5'>
            <div>
                <h1 className='text-center mb-5'>Categories</h1>
            </div>
            <Row>
                <Col className='mx-3'>
                    <Row>
                        <Col className='mb-5'>
                            <h4> <span className='text-danger text-decoration-underline'>Sport_</span>PARTS</h4>
                            <img className='w-100' src="https://i.ibb.co/zGVJ2wr/categori2.jpg" alt="" />
                        </Col>
                        <Col>
                            <h4> <span className='text-danger text-decoration-underline'>V-Twin_</span>PARTS</h4>
                            <img className='w-100' src="https://i.ibb.co/PCGW4fw/categori1.jpg" alt="" />
                        </Col>
                    </Row>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Row>
                        <Col className='mb-5'>
                            <h4> <span className='text-danger text-decoration-underline'>ADV/Touring_</span>PARTS</h4>
                            <img className='w-100' src="https://i.ibb.co/cxr5WjK/categori4.jpg" alt="" />
                        </Col>
                        <Col>
                            <h4> <span className='text-danger text-decoration-underline'>Dirt_</span>PARTS</h4>
                            <img className='w-100' src="https://i.ibb.co/zGVJ2wr/categori2.jpg" alt="" />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    );
};

export default Categories;