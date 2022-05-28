import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div className='vh-100 w-100 d-flex align-items-center justify-content-center'>
            <Spinner animation="border" style={{
                color: '#f36f21', width: '50px', height: '50px'
            }} />
        </div>
    );
};

export default Loading;