import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import {useNavigate} from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();

    const links = [
        {key: 1, name: 'Home', onClick: ()=> navigate('/')},
        {key: 2, name: 'Login', onClick: ()=> navigate('/auth/login')},
        // {key: 2, name: 'About', onClick: '#about'},
        // {key: 4, name: 'Projects', onClick: '#project'},
        // {key: 6, name: 'Blog', onClick: '#blog'}
    ];
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="/">
                    Cencadian
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {links.map(link => (
                            <Nav.Link key={link.key} onClick={link.onClick}>{link.name}</Nav.Link>
                        ))}
                        <NavDropdown title="Services" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/internship/career">
                                Internships
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/companies">
                                Companies
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;