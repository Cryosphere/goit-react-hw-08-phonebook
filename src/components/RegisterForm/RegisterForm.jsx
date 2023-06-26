import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import style from './RegisterForm.module.css';

export const RegisterForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        const name = form.elements.name.value;
        const email = form.elements.email.value;
        const password = form.elements.password.value;
        dispatch(
            register({
                name,
                email,
                password,
            })
        );
        form.reset();
    };

    return (
        <Container className={style.container}>
            <Stack gap={3}>
                <Form className='border rounded p-4' onSubmit={handleSubmit}>
                    <p className={style.paragraph}>Register your account!</p>
                    <Form.Group className='mb-3' controlId='inputName'>
                        <Form.Label>username</Form.Label>
                        <Form.Control
                            className={style.input}
                            type='name'
                            name='name'
                            title='Type-in your name'
                            placeholder='John Doe'
                            required
                        />
                    </Form.Group>
                    <Form.Group className='mb-3' controlId='inputEmail'>
                        <Form.Label>e-mail</Form.Label>
                        <Form.Control
                            className={style.input}
                            type='email'
                            name='email'
                            title='Type-in your email'
                            placeholder='example@email.com'
                            required
                        />
                    </Form.Group>
                    <Form.Group className='mb-3' controlId='inputPassword'>
                        <Form.Label>password</Form.Label>
                        <Form.Control
                            className={style.input}
                            type='password'
                            name='password'
                            title='Min 6 characters required'
                            placeholder='password'
                            minLength='6'
                            required
                        />
                    </Form.Group>
                    <Button variant="secondary" type='submit'>Submit</Button>
                </Form>
            </Stack>
        </Container>
    );
};