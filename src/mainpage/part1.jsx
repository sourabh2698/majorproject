import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Typography, TextField, InputAdornment, Button } from '@material-ui/core'
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";




export class PartOne extends Component {
    render() {
        return (
        <div>
        <Link to="/">
            <div>
                <Grid container>
                    <Grid item sm>
                        <Paper style={{ padding: 30, marginLeft: 20, marginRight: 20, backgroundColor: '#fcf4a3',borderRadius:10 }}>
                            <Typography variant="h4" component="h3" align="center" >
                                Buy | Sell | Find Anything you need<br /><br />
                            </Typography>
                            
                            <div style={{ paddingLeft: 500 }}>
                                <Grid container spacing={3}>
                                    <Grid item >
                                        <TextField
                                            id="outlined-full-width"
                                            label="What ?"
                                            style={{ margin: 8 }}
                                            placeholder="what to find"
                                            helperText="Full width!"
                                            fullWidth
                                            margin="normal"
                                            variant="outlined"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                    </Grid>
                                    <Grid item >
                                        <TextField
                                            id="outlined-full-width"
                                            label="Where ?"
                                            style={{ margin: 8 }}
                                            placeholder="Where to find"
                                            helperText="Full width!"
                                            fullWidth
                                            margin="normal"
                                            variant="outlined"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                    </Grid>

                                    <Grid item >
                                        <TextField
                                            id="outlined-full-width"
                                            label="Category"
                                            style={{ margin: 8 }}
                                            placeholder="select category"
                                            fullWidth
                                            margin="normal"
                                            variant="outlined"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                    </Grid>
                                    <Grid item style={{ paddingTop: 27,marginInlineStart:25 }}>
                                        <Button variant="contained" color="secondary" size="large" >
                                            Search
                                </Button>
                                    </Grid>
                                    <Grid item style={{ paddingTop: 27 }}>
                                        <Button variant="contained" color="default" size="large">
                                            Post-Ad
                             <CloudUploadIcon />
                                        </Button>
                                    </Grid>
                                </Grid>
                            </div><br /><br />
                      
                           
                            <h6 align="center">Some Random tagline </h6>
                        </Paper>
                    </Grid>

                </Grid>
            
            </div> </Link>
         <br/><br/></div>
        )
    }
}

export default PartOne;