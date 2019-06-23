import React from 'react'
import { Form, Button, Col } from 'react-bootstrap'
import { Paper } from '@material-ui/core';
import axios from 'axios'
import { Redirect } from 'react-router-dom';


class PostAd extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            validated: false,
            title: "",
            description: "",
            category: "",
            oldprice: "",
            newprice: ""
        };
        this.state.title = ''
        this.state.description = ''
        this.state.category = ''
        this.state.oldprice = ''
        this.state.newprice = ''
    }

    getTitleChange = (e) => {
        this.setState(
            { title: e.target.value }
        )
    }

    getDescriptionChange = (e) => {
        this.setState({ description: e.target.value })
    }

    getCategoryChange = (e) => {
        this.setState({ category: e.target.value })
    }

    getoldpriceChange = (e) => {
        this.setState({ oldprice: e.target.value })
    }

    getnewpriceChange = (e) => {
        this.setState({ newprice: e.target.value })
    }
    setValue = () => {
        if (this.state.title.trim(), this.state.description.trim()) {
            let title = this.state.title
            let description = this.state.description
            let category = this.state.category
            let oldprice = this.state.oldprice
            let newprice = this.state.newprice
            console.log(title);
            console.log(description);
            let obj = {
                title: this.state.title,
                description: this.state.description,
                category: this.state.category,
                oldprice: this.state.oldprice,
                newprice: this.state.newprice
            }

            axios.post("http://localhost:8080/postad", obj)
                .then((res) => {
                    console.log(res.data);
                    //   this.getData();
                })
        }
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
        // if (validated = true) {
        //     return <Redirect to='/' />;
        // }

        return (
            <Paper md={12} style={{ marginLeft: "auto", marginRight: "auto", width: '50%', padding: 20 }}>
                <Form
                    noValidate
                    validated={validated}
                    onSubmit={e => this.handleSubmit(e)}
                >

                    <Form.Group md="4" controlId="validationCustom01">
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="enter title"
                            onChange={this.getTitleChange}
                            value={this.state.title}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Enter Description</Form.Label>
                        <Form.Control as="textarea" rows="3"
                            required
                            type="text"
                            placeholder="enter Description"
                            onChange={this.getDescriptionChange}
                            value={this.state.description} />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group md="4" controlId="validationCustom01">
                        <Form.Label>Category</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="enter title"
                            onChange={this.getCategoryChange}
                            value={this.state.category}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridnewprice">
                            <Form.Label>Old Price</Form.Label>
                            <Form.Control
                                required
                                type="number"
                                placeholder="Enter old price"
                                onChange={this.getoldpriceChange}
                                value={this.state.oldprice}
                            />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridoldprice">
                            <Form.Label>New Price</Form.Label>
                            <Form.Control
                                required
                                type="number"
                                placeholder="Enter new price"
                                onChange={this.getnewpriceChange}
                                value={this.state.newprice} />
                        </Form.Group>
                    </Form.Row>


                    <Form.Group>
                        <Form.Check
                            required
                            label="Agree to terms and conditions"
                            feedback="You must agree before submitting."
                        />
                    </Form.Group>


                    <Button type="submit" onClick={this.setValue}>Submit form</Button>
                </Form>
            </Paper>
        );
    }
}

export default PostAd;