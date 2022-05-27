import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

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
        <div>
            <button onClick={() => signInWithGoogle()}>SignInWithGoogle</button>
        </div>
    );
};

export default Google;