import logo from '../logo.png';
import '../App.css';
import { Navbar, Nav, NavDropdown, Form, Button, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Menubar() {
    return (
        <div className="menubar">
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home"><img src={logo} width="30"></img></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                 
                    </Nav>
                    <Form inline>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default Menubar;
