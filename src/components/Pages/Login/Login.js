import { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate, } from 'react-router-dom';
import auth from '../../../firebase.init';
import Google from '../../../Shared/Google/Google';

const Login = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [User] = useAuthState(auth)
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    let from = location.state?.from?.pathname || "/";

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const emailHandler = event => {
        setEmail(event.target.value);
    }
    const passwordHandler = event => {
        setPassword(event.target.value)
    }
    const submit = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
        navigate(from, { replace: true });
    }
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
        navigate(from, { replace: true });
    }
    return (
        <div>
            <Container>
                <Row>
                    <Col md="4"></Col>
                    <Col md="4">
                        <h3 className='text-center py-3'> Please login</h3>
                        <Form onSubmit={submit}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">

                                <Form.Control onBlur={emailHandler} type="email" placeholder="Enter email" required />

                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">

                                <Form.Control onBlur={passwordHandler} type="password" placeholder="Password" required />
                            </Form.Group>
                            <p>I have no account!<Link className='link text-primary fw-bold' to='/signin'> Signup</Link></p>
                            <Button variant="primary" type="submit" >
                                SignIn
                            </Button>
                        </Form>
                        <Google></Google>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Login;