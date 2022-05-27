import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import img1 from '../../review/arisstotle.png';
import img2 from '../../review/Boris-Johnson.png';
import img3 from '../../review/einstain.png';

const Business = () => {
    return (
        <Container>
            <h1 style={{marginTop : '50px'}} className='text-center'>Reviews</h1>
           
            <Row>
                <Col md="4">
                    <div style={{textAlign :'center',padding:'50px'}}>
                        <img height="100px" style={{borderRadius:"50%", marginLeft : 'auto'}} src={img1} alt="" />
                        <h3>Jhon Doue</h3>
                        <p>Add two different sections on the home page and the 6 sections mentioned above. Tips: This is the place to shine. Add something different and unique to make your website looks different than </p>
                    </div>
                </Col>
                <Col md="4">
                    <div style={{textAlign :'center',padding:'50px'}}>
                        <img height="100px" style={{borderRadius:"50%", marginLeft : 'auto'}} src={img2} alt="" />
                        <h3>Jhon Doue</h3>
                        <p>Add two different sections on the home page and the 6 sections mentioned above. Tips: This is the place to shine. Add something different and unique to make your website looks different than </p>
                    </div>
                </Col>
                <Col md="4">
                    <div style={{textAlign :'center',padding:'50px'}}>
                        <img height="100px" style={{borderRadius:"50%", marginLeft : 'auto'}} src={img3} alt="" />
                        <h3>Jhon Doue</h3>
                        <p>Add two different sections on the home page and the 6 sections mentioned above. Tips: This is the place to shine. Add something different and unique to make your website looks different than </p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Business;