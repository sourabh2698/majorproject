import React from 'react'
import { Form, Button, Col, Row } from 'react-bootstrap'
import { Paper } from '@material-ui/core';
import axios from 'axios'
import { Redirect } from 'react-router-dom';
import * as firebase from 'firebase/app';
import "firebase/storage";



class PostAd extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            validated: false,
            title: "",
            description: "",
            // category: "",
            oldprice: "",
            newprice: ""
        };
        this.state.title = ''
        this.state.description = ''
        this.state.category = ''
        this.state.oldprice = ''
        this.state.newprice = ''
        this.state.image=' ';
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
        if(this.state.title.trim(),
        this.state.description.trim(),
        this.state.newprice.trim(),
        this.state.oldprice.trim()){
            let obj = {
                title: this.state.title,
                description: this.state.description,
                category: this.state.category,
                oldprice: this.state.oldprice,
                newprice: this.state.newprice,
                image:this.state.image
            }

            axios.post("http://localhost:8080/postad", obj)
                .then((res) => {
                    
                    console.log(res.data);
                    this.props.history.push("/")
                    console.log('redirect to homepage')
                    //   this.getData();
                })
        
    }}
    


    handleSubmit(event) {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        this.setState({ validated: true });


    }

    //Firebase file upload
    //----------------------//-------------------------------//
    fileUpload(e){
        console.log(e.target.files[0])
       let fd = new FormData()
       fd.append("file",e.target.files[0])
     
        axios.post("http://localhost:8080/adimages",fd,{headers:{
         'Content-Type': "multipart/form-data"
    }}).then((res)=>{
        console.log(res.data);
             this.setState({
                 image:res.data
             })
         })
       
        
       }
     
       fileUploadFirebase(e){
         console.log(e.target.files[0])
         var storageRef = firebase.storage().ref();
         
         // Create a reference to 'images/mountains.jpg'
        var mountainImagesRef = storageRef.child('images/mountain.jpg');
         
      
         mountainImagesRef.put(e.target.files[0]).then(function(snapshot) {
           console.log('Uploaded a blob or file!');
         });
        }

        //********************************************//************************//


    render() {
        const { validated } = this.state;
       

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

                    {/* <Form.Group md="4" controlId="validationCustom01">
                        <Form.Label>Category</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="enter title"
                            onChange={this.getCategoryChanges}
                            value={this.state.categorys}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group> */}

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
                    <Form.Group as={Row}>
                        <Form.Label as="legend" column sm={2}>
                            Category
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Check
                                type="radio"
                                label="Like New"
                                name="radio"
                                id="radio1"
                                onChange={this.getCategoryChange}
                                value="Like New"
                            />
                            <Form.Check
                                type="radio"
                                label="Good"
                                name="radio"
                                id="radio2"
                                onChange={this.getCategoryChange}
                                value="Good"
                            />
                            <Form.Check
                                type="radio"
                                label="Poor"
                                name="radio"
                                id="radio3"
                                onChange={this.getCategoryChange}
                                value="Poor"
                            />
                        </Col>
                    </Form.Group>


                    <Form.Group>
                        <Form.Check
                            required
                            label="Agree to terms and conditions"
                            feedback="You must agree before submitting."
                        />
                    </Form.Group>
                    <div>
                        <input type="file" onChange={(e) => { this.fileUpload(e) }}></input>
                    </div>


                    <Button type="submit" onClick={this.setValue}>
                     {/* <a> */}
                            Submit Ad
                            {/* </a>   */}
                            </Button>
                </Form>
            </Paper>
        );
    }
}

export default PostAd;