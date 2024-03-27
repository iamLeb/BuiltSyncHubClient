import {useContext, useEffect} from "react";
import {UserContext} from "../../context/userContext.jsx";
import axios from "axios";
import {Outlet, useNavigate} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
const Dashboard = () => {
    const navigate = useNavigate();
    const {user} = useContext(UserContext);
    if (!user) navigate('/auth/login');
    // useEffect(() => {
    //     console.log(user);
    // }, []);
    const handleLogout = () => {
        axios.get('/api/logout')
            .then(res => {
                location.reload();
            })
            .catch(err => console.log('found error', err))
    }

    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#">Secure Panel</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="">Dashboard</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <Navbar.Collapse className="justify-content-end">
                        <NavDropdown title="My account" id="basic-nav-dropdown">
                            <NavDropdown.Item href="secure/profile">My Profile</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item onClick={handleLogout}>
                                Log out
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Outlet />
        </>
    );
};

export default Dashboard;