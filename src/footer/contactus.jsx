import React, { Component } from 'react'
import { Paper, Grid, Typography, Icon } from '@material-ui/core';
import { Row, Col, Form, Button } from 'react-bootstrap';

export class ContactUs extends Component {
    render() {
        return (
            <div>

                <Row>
                    <Col sm={3}>
                        <Paper style={{ padding: 30, marginLeft: 50, borderRadius: 10 }}>
                            <Typography align='center' variant="h5">Get in touch with us</Typography><br />
                            <Row> <Icon color="error">location_on</Icon><Typography>104/101,Sector 10, Pratap nagar, Jaipur</Typography></Row><br />
                            <Row ><Icon color="error">phone</Icon> <Typography variant="body1">
                                Sourabh Agrawal - 9571604857
                            </Typography></Row>
                            <Row style={{ marginTop: 10 }}><Icon color="error">phone</Icon> <Typography variant="body1">
                                Pratiksha Rathore - 7733994489
                            </Typography></Row><br />
                            <Row><Icon color="error">email</Icon>   <Typography>sourabh2698@gmail.com</Typography></Row>
                            <Row><Icon color="error">email</Icon>   <Typography>rathorepratiksha20@gmail.com</Typography></Row>

                        </Paper>
                    </Col>
                    <Col sm={7}>
                        <Paper style={{ padding: 20,marginRight: 20, marginBottom:10,borderRadius: 10 }}>
                            <Typography variant="h4" color="secondary"> Contact us</Typography>
                            <Form>
                                <Form.Row>
                                <Form.Group as={Col} controlId="name">
                                        <Form.Label>Your Name</Form.Label>
                                        <Form.Control type="text" placeholder="Your Name" />
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="formGridEmail">
                                        <Form.Label> Your Email</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" />
                                    </Form.Group>

                                    
                                </Form.Row>

                                <Form.Group controlId="subject">
                                    <Form.Label>Subject</Form.Label>
                                    <Form.Control placeholder="Subject" />
                                </Form.Group>
                                <Form.Group controlId="yourmessage">
                                    <Form.Label>Your Message</Form.Label>
                                    <Form.Control as="textarea" rows="3"placeholder="your message" />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </Paper>
                    </Col>
                </Row>






            </div>
        )
    }
}

export default ContactUs
