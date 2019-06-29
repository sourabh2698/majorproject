import React, { Component } from 'react'
import { Nav, Col, Tab, Row, Container } from 'react-bootstrap'
import PasswordReset from '../profile/password'
import ComplexGrid from '../Ads/ads'
import Profile from './profile';




class MyProfile extends Component {
    render() {
        return (
            <div>

                <Row>
                    <Col sm={10} style={{ backgroundColor: "#fff" }}>
                        <Tab.Container id="left-tabs-example" defaultActiveKey="profile">
                            <Row>
                                <Col sm={3}>
                                    <Nav variant="pills" className="flex-column">
                                        <Nav.Item>
                                            <Nav.Link eventKey="profile"> MyProfile</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="myads">my ads</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="solditems">sold item</Nav.Link>
                                        </Nav.Item>

                                        <Nav.Item>
                                            <Nav.Link eventKey="wishlist">wish list</Nav.Link>
                                        </Nav.Item>

                                        <Nav.Item>
                                            <Nav.Link eventKey="changepassword">change password</Nav.Link>
                                        </Nav.Item>

                                        
                        
                                    </Nav>
                                </Col>
                                <Col sm={9}>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="profile">
                                           <Profile/>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="myads">
                                            
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="solditems">
                                        <h1>sold items</h1>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="wishlist">
                                            <h1>wishlst</h1>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="changepassword">
                                            <PasswordReset/>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Col>
                            </Row>
                        </Tab.Container>
                    </Col>
                    
                </Row>

            </div>
        )
    }
}

export default MyProfile
