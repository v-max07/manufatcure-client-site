import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './MyProfile.css';

const MyProfile = () => {
    return (
        <div className='p-5 bg-light'>
            <h2 className='text-center pb-3 border-bottom'>My Profile</h2>
            <Row>
                <Col md="6" className='mx-auto'>
                    <img width={150} src='https://i.ibb.co/B3CQ0GB/me.jpg' alt="" />
                    <h2>S.M. Vusan Debnath</h2>


                    <Row className='mt-5'>
                        <Col>
                            <h2 >EDUCATION</h2>
                            <h5>2019 to 2022</h5>

                            <h3>Diploma In Engineering</h3>
                            <p><span>Department:</span> Computer Science and Technology</p>
                            <p><span>Semester:</span> 7th</p>
                        </Col>

                        <Col className='border-start ps-5'>
                            <h2 >SKILLS</h2>
                            <ol>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JAVASCRIPT</li>
                                <li>REACT</li>
                                <li>REACT ROUTER</li>
                                <li>FIREBASE</li>
                                <li>EXPRESS JS</li>
                                <li>MONGOdb</li>
                            </ol>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    );
};

export default MyProfile;