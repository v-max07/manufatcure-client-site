import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './Google.css';

const Google = () => {
    const [signInWithGoogle, User, loading, error] = useSignInWithGoogle(auth);
    if (User) {
        const currentUser = {
            email: User.email,

        }
        fetch(`http://localhost:5000/User/${User.email}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(currentUser),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })

    }
    return (
        <div className=' p-5'>
            <button className='googleBtn' onClick={() => signInWithGoogle()}>
                <img src="https://i.ibb.co/r4BtTVH/icons8-google-48.png" alt="" />
                <span className='fw-bold'> SignInWithGoogle</span>
            </button>
        </div>
    );
};

export default Google;