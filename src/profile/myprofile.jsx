import React, { Component } from 'react'
import { Nav, Col, Tab, Row, Container } from 'react-bootstrap'
import PasswordReset from '../profile/password'
import ComplexGrid from '../Ads/ads'

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
                                           <h1>My profuile</h1>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="myads">
                                            <ComplexGrid/>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="solditems">
                                        <PasswordReset></PasswordReset>
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
                    <Col sm={2} style={{ backgroundColor: "#00FFFF" }}>part 2</Col>
                </Row>

            </div>
        )
    }
}

export default MyProfile
