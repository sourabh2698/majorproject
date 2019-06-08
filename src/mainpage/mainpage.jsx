import React from 'react'
//top
import { Jumbotron, Row } from 'react-bootstrap'
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { Grid, Button } from '@material-ui/core';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';



const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    dense: {
        marginTop: theme.spacing(2),
    },
    menu: {
        width: 200,
    },
}));





class MainPage extends React.Component {

    constructor(props) {
        super(props);
        this.OutlinedTextFields = this.OutlinedTextFields.bind(this)

    }

    OutlinedTextFields = () => {
        const classes = useStyles();
        const [values, setValues] = React.useState({
            name: 'Cat in the Hat',
            age: '',
            multiline: 'Controlled',
            currency: 'EUR',
        });

    }



    //     const handleChange = name => event => {
    //       setValues({ ...values, [name]: event.target.value });
    //     };
    render() {
        return (
            <div>
                <Jumbotron>
                    <h1 align="center">Buy | Sell | Find Anything you need</h1><br /><br />
                    <div style={{ paddingLeft: 500 }}>
                        <Grid container spacing={3}>
                            <Grid item>
                                <TextField
                                    id="outlined-name"
                                    label="What ?"
                                    // className={this.classes.textField}
                                    // value={values.name}
                                    // onChange={handleChange('name')}
                                    margin="normal"
                                    variant="outlined"
                                />
                            </Grid>

                            <Grid item>
                                <TextField
                                    id="outlined-name"
                                    label="Where ?"
                                    // className={this.classes.textField}
                                    // value={values.name}
                                    // onChange={handleChange('name')}
                                    margin="normal"
                                    variant="outlined"

                                />
                            </Grid>

                            <Grid item >
                                <TextField
                                    id="outlined-name"
                                    label="Category"
                                    // className={this.classes.textField}
                                    // value={values.name}
                                    // onChange={handleChange('name')}
                                    margin="normal"
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid item  style={{ paddingTop: 35 }}>
                                <Button variant="contained" color="secondary" size="large" >
                                    Search
                                </Button>
                            </Grid>
                            <Grid item style={{ paddingTop: 35 }}>
                                <Button variant="contained" color="default" size="large">
                                    Post-Ad
                             <CloudUploadIcon />
                                </Button>
                            </Grid>
                        </Grid></div><br /><br />
                    <h6 align="center">Some Random tagline </h6>
                </Jumbotron>

            
            
            </div>
        )
    }
}



export default MainPage;