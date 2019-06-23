import React, { Component } from 'react'
import { Navbar, Form, FormControl, Button, NavDropdown, Nav } from 'react-bootstrap'
import Test from '../form/tab'
// import ControlledTabs from '../form/formtab'
import LoginModal from '../form/formtab';
import LoginDialog from '../form/logintab';

class NavBar2 extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <Navbar bg="primary" variant="dark" expand="lg" style={{height:70}}>
                    <Navbar.Brand href="/"><img src=".././assets/logo.jpg"
                        width="180"
                        height="65"
                        className="d-inline-block align-top"
                        alt="College Adda" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Form inline className="mr-auto">
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-light">Search</Button>
                        </Form>
                        <Nav className="mr-50" style={{marginRight:50}}>
                            <Nav.Link href="/" style={{color:"#fff",fontWeight: 400,fontSize:20}}>Home</Nav.Link>
                            <Nav.Link href="/myprofile" style={{color:"#fff",fontWeight: 400,fontSize:20}}>my profile</Nav.Link>
                            {/* <Nav.Link href="#link" style={{color:"#fff",fontWeight: 400,fontSize:20}}><LoginModal/></Nav.Link> */}
                            
                            
                            <div style={{color:"#fff",fontWeight: 400,fontSize:20}}>
                            <NavDropdown title="My profile" id="basic-nav-dropdown"  >
                                <NavDropdown.Item href="#action/3.1">My Account</NavDropdown.Item>
                                <NavDropdown.Item href="allad">All ads</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                            </div>
                            <Nav.Link href="#link" style={{color:"#fff",fontWeight: 400,fontSize:20,}}><LoginDialog/></Nav.Link>
                        </Nav>

                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default NavBar2;
