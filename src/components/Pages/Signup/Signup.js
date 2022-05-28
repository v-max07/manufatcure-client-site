import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useAuthState, useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Google from '../../../Shared/Google/Google';
import Loading from '../Loading/Loading';

const Signup = () => {
    const [updateProfile, updating, errror] = useUpdateProfile(auth);
    let navigate = useNavigate();
    let location = useLocation();

    let from = location.state?.from?.pathname || "/";
    const [Error, setError] = useState('');
    const [name, setName] = useState('');
    const [User] = useAuthState(auth)
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    const namehandler = event => {
        setName(event.target.value);
    }
    const emailhandler = event => {
        setEmail(event.target.value);
    }
    const passwordhandler = event => {
        setPassword(event.target.value)
    }
    const confirmhandler = event => {
        setConfirm(event.target.value)
    }
    const submit = async (event) => {
        event.preventDefault();
        if (password === confirm) {
            await createUserWithEmailAndPassword(email, password)
            await updateProfile({ displayName: name });
        }
        else {
            setError('Oppos! Password dont match !!')
        }


    }

    if (User) {
        console.log(User);
        const currentUser = {
            email: User?.email,
            name: User?.displayName,

        }

        // load a single user using email
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
        navigate('/')

    }
    if (loading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <Container>
                <Row>
                    <Col md="4"></Col>
                    <Col md="4">
                        <h3 className='text-center py-3'> Please Register</h3>
                        <Form onSubmit={submit}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">

                                <Form.Control onBlur={namehandler} type="name" placeholder="name" required />

                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">

                                <Form.Control onBlur={emailhandler} type="email" placeholder="Enter email" required />

                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">

                                <Form.Control onBlur={passwordhandler} type="password" placeholder="Password" required />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">

                                <Form.Control onBlur={confirmhandler} type="password" placeholder="Password" required />
                            </Form.Group>
                            <p>I have already an account! <Link className='link text-primary fw-bold' to='/login'>Login</Link></p>
                            <p className='text-danger fw-bold'>
                                {
                                    Error ? <p>{Error}</p> : ''
                                }
                            </p>
                            <Button variant="primary" type="submit" >
                                SignUp
                            </Button>
                            
                        </Form>
                        <Google></Google>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Signup;