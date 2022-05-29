import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className='wrapper pt-5'>
            <header className='header'>
                <h1 className='header-title'>
                    404 Not Found
                </h1>
            </header>

            <div className='content'>
                <img src='https://i.ibb.co/2ypWStZ/Scarecrow.png' className='image' alt="" />
                <article>
                    <h2 className='info-title'>Sorry, I can't found this page!</h2>
                    <p className='info-description'>
                        The page you are looking for is temporarily unavailable.
                    </p>
                    <Link className='info-btn' to='/'>
                        Back to Homepage
                    </Link>
                </article>
            </div>

        </div>
    );
};

export default NotFound;