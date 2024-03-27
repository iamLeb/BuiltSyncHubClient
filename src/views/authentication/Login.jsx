import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button";
import {useNavigate} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import axios from "axios";
import { UserContext } from "../../context/userContext.jsx";
import toast from "react-hot-toast";

const Login = () => {
    const navigate = useNavigate();
    const { user, setUser } = useContext(UserContext);

    const [values, setValues] = useState({
        email: '',
        password: '',
    });

    const inputs = [
        { id: 1, name: 'email', label: 'Email address', type: 'email', placeholder: 'name@gmail.com' },
        { id: 2, name: 'password', label: 'Password', type: 'password', placeholder: 'Enter password' },
    ];

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const handleForm = (e) => {
        e.preventDefault();

        try {
            axios.post('/api/login', {values})
                .then(res => {
                    const error = res.data.error;
                    if (!error) {
                        setUser(res.data);
                        toast.success("Logging user in!");
                        navigate("/secure");
                    } else {
                        toast.error(error);
                    }
                });
        } catch (e) {
            console.log('An error occurred ', e);
        }
    }

    useEffect(() => {
        if (user) navigate('/secure');
    }, []);
    return (
        <section className="block blog-block mt-5">
            <h2 className="text-center">Create an account</h2>
            <Container fluid>
                <Form onSubmit={handleForm}>
                    {inputs.map(input => (
                        <FloatingLabel
                            key={input.id}
                            label={input.placeholder}
                            className='mb-3 w-50 mx-auto'
                        >
                            <Form.Control
                                autoComplete="off"
                                name={input.name}
                                type={input.type}
                                placeholder={input.placeholder}
                                onChange={onChange}
                            />

                        </FloatingLabel>
                    ))}
                    <div className="text-center">
                        <Button type='submit'>Login</Button>
                    </div>
                </Form>
            </Container>
        </section>
    );
};

export default Login;