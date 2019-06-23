import React from 'react'
import { Form, Button, Col } from 'react-bootstrap'
import { Paper } from '@material-ui/core';
import axios from 'axios'


class PostAd extends React.Component {
    constructor(props) {
        super(props);

        this.state = { validated: false };
        
    }

    getTitleChange = (e) => {
        this.setState(
            { title: e.target.value }
        )
    }

    getDescriptionChange = (e) => {
        this.setState({ description: e.target.value })
    }

    setValue = () => {
        let title = this.state.title
        let description = this.state.description
        console.log(title);
        console.log(description);
        let obj = { title: this.state.title, description: this.state.description }

        axios.post("http://localhost:8080/postad", obj)
            .then((res) => {
                console.log(res.data);
                //   this.getData();
            })
    }

    handleSubmit(event) {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        this.setState({ validated: true });

    }
   

    render() {
        const { validated } = this.state;
        return (
            <Paper md={12} style={{ marginLeft: "auto", marginRight: "auto", width: '50%', padding: 20 }}>
                <Form
                    noValidate
                    validated={validated}
                    onSubmit={e => this.handleSubmit(e)}
                >

                    <Form.Group as={Col} md="4" controlId="validationCustom01">
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="enter title"
                            onChange={this.getTitleChange}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustom02">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="enter Description"
                            onChange={this.getDescriptionChange}

                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>

                    </Form.Group>

                    <Form.Group>
                        <Form.Check
                            required
                            label="Agree to terms and conditions"
                            feedback="You must agree before submitting."
                        />
                    </Form.Group>

                    <Button type="submit" onClick={this.setValue} >Submit form</Button>
                </Form>
            </Paper>
        );
    }
}

export default PostAd;