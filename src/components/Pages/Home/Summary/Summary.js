import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Summary.css';
import { faFlag,faPlus } from '@fortawesome/free-solid-svg-icons';

const Summary = () => {
    return (
        <div className='py-5'>
            <Container>
                <h2 className='py-3 text-center' style={{marginBottom :'50px'}}>Business summary</h2>
                <Row>
                    <Col md="4">
                        <Container>
                            <div className='text-center text-light' style={{ background: 'linear-gradient(to right,#012E76CA 30%, #02224A 100% )',padding :'40px',borderRadius :'20px'}} >
                            <h5>Satisfy Country</h5>
                            <h1>146 <FontAwesomeIcon icon={faPlus} /> <FontAwesomeIcon icon={faFlag} /></h1>
                        </div>
                        </Container>
                    </Col>
                    <Col md="4">
                        <Container>
                            <div className='text-center text-light' style={{ background: 'linear-gradient(to right,#FC4D7FC2 25%, #F81858F1 100% )',padding :'40px',borderRadius :'20px'}} >
                            <h5>Satisfy clients</h5>
                            <h1>1000M <FontAwesomeIcon icon={faPlus} /> </h1>
                        </div>
                        </Container>
                    </Col>
                    <Col md="4">
                        <Container>
                        <div className='text-center text-light' style={{ background: 'linear-gradient(to right, #4B46DFCC 25%, #0729D4 100%)',padding :'40px',borderRadius :'20px'}} >
                            <h5>Running project</h5>
                            <h1>1000 <FontAwesomeIcon icon={faPlus} /> </h1>
                        </div>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Summary;