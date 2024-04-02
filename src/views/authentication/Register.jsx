import axios from "axios";
import Container from 'react-bootstrap/Container';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useNavigate, useLocation } from 'react-router-dom';
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import toast from 'react-hot-toast';

const Register = () => {
    const navigate = useNavigate();
    const [values, setValues] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
        passwordConfirm: ''
    });
    const [errors, setErrors] = useState({});
    const location = useLocation();
    const nameParam = new URLSearchParams(location.search).get('registerAs');

    const inputs = [
        { id: 1, name: 'name', label: 'Full Name', type: 'text', placeholder: 'Enter full name' },
        { id: 2, name: 'email', label: 'Email address', type: 'email', placeholder: 'name@gmail.com' },
        { id: 3, name: 'phone', label: 'Phone Number', type: 'text', placeholder: 'Enter phone number' },
        { id: 4, name: 'password', label: 'Password', type: 'password', placeholder: 'Enter password' },
        { id: 5, name: 'passwordConfirm', label: 'Password Confirm', type: 'password', placeholder: 'Enter password again' },
    ];

    let newError = {};


    const isValidPassword = (password) => {
        const minLength = 8;
        const uppercaseRegex = /[A-Z]/;
        const lowercaseRegex = /[a-z]/;
        const digitRegex = /\d/;
        const specialCharRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/;

        let errorMessage = '';

        if (password.length < minLength) {
            errorMessage = `Password must be at least ${minLength} characters long`;
        } else if (!uppercaseRegex.test(password)) {
            errorMessage = 'Password must include at least one uppercase letter';
        } else if (!lowercaseRegex.test(password)) {
            errorMessage = 'Password must include at least one lowercase letter';
        } else if (!digitRegex.test(password)) {
            errorMessage = 'Password must include at least one numeric digit';
        } else if (!specialCharRegex.test(password)) {
            errorMessage = 'Password must include at least one special character (!@#$%^&*()_+{}[]:;<>,.?~\\/)';
        }

        newError['password'] = errorMessage;

        setErrors({ ...errors, ... newError });

        return errorMessage === ''; // Return true if there are no errors
    };
    const isValidEmail = (email) => {
        // Implement your email validation logic here
        // For a simple check, you can use a regular expression
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailRegex.test(email)) {
            return email.length > 10;
        }
    };
    const isValid = () => {
        let isValid = true;

        inputs.forEach(input => {
            const { name, type } = input;
            const value = values[name];

            if (!value) {
                newError[name] = `${name} is required`;
                isValid = false;
            } else if (name === 'name' && value.length < 3) {
                newError[name] = `${name} must be greater than 3 characters`
                isValid = false;
            } else if (type === 'email' && !isValidEmail(value)) {
                newError[name] = 'Invalid email format';
                isValid = false;
            } else if (name === 'password' && !isValidPassword(value)) {
                isValid = false; // isValidPassword function already sets error message
            } else if (name === 'passwordConfirm' && values.password !== values.passwordConfirm) {
                newError[name] = 'Passwords do not match';
                isValid = false; // isValidPassword function already sets error message
            } else if (name === 'phone' && value.length < 10 || value.length >= 200) {
                newError[name] = 'Phone must be 10 or below 15 digit';
                isValid = false; // isValidPassword function already sets error message
            }
        });


        setErrors(newError);
        return isValid;
    };

    useEffect(() => {
        // You can perform additional actions when errors change
    }, [errors]);

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: '' }); // Clear error when user types
    };

    const handleForm = async (e) => {
        e.preventDefault();

        if (isValid()) {
            // Form submission logic (e.g., axios request)
            try {
                // Your API call here
                let message = '';
                values.category = (nameParam);
                await axios.post('/api/register', {values})
                    .then(res => {
                        console.log(res)
                        let error = res.data.error;
                        if (error) {
                            message = error;
                        } else if (res.data.message === 'success') {
                            message = res.data.message;
                        }
                        getResponse(message);

                    });
            } catch (error) {
                console.error('Error submitting form:', error);
            }
        }
    };

    const getResponse = (message) => {
        // toast.success(message)
        if (message === 'success') {
            toast.success('Registration Successful');
            navigate('/auth/login');
        } else {
            console.log(message)
            toast.error("Something went wrong, ", message);
        }
    }

    return (
        <section className="block blog-block mt-5">
            <h2 className="text-center">Create an account</h2>
            <Container fluid>
                <Form onSubmit={handleForm}>
                    <Form.Control
                        type="text"
                        placeholder={`Registering  ${nameParam === 'intern' ? 'For Internship' : 'as a Firm (Company)'}`}
                        aria-label="Disabled input example"
                        className='mb-3 w-50 mx-auto'
                        disabled
                        readOnly
                    />
                    {inputs.map(input => (
                        <FloatingLabel
                            key={input.id}
                            label={input.placeholder}
                            className='mb-3 w-50 mx-auto'
                        >
                            <Form.Control
                                name={input.name}
                                type={input.type}
                                placeholder={input.placeholder}
                                value={values[input.name]}
                                onChange={onChange}
                                isInvalid={errors[input.name]}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors[input.name]}
                            </Form.Control.Feedback>
                        </FloatingLabel>
                    ))}
                    <div className="text-center">
                        <Button type='submit'>Create account</Button>
                    </div>
                </Form>
            </Container>
        </section>
    );
};

export default Register;
