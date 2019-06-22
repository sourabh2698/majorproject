import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Typography, TextField, InputAdornment, Button, Avatar } from '@material-ui/core'
// import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { BrowserRouter as Router,Route,Link } from "react-router-dom";





export class Footer extends Component {
    render() {
        return (
            <div >

                <div><footer>
                    <Grid container spacing={3}
                        direction="row"
                        alignItems="center"
                        justify="center"
                    >
                        <Grid item sm>
                            <Paper style={{ padding: 30, marginLeft: 2, marginRight: 2, backgroundColor: '#b8b8b8' }}>
                                <Typography variant="body 2" component="h3" align="center" >
                                    About us  |<Link to="/contactus/" > Contact us </Link> |   Home
                                        <hr
                                        style={{
                                            color: '#000000',
                                            backgroundColor: "#000000",
                                            marginTop: 30,
                                            height: 0.3,
                                            width: 200
                                        }}
                                    />
                                </Typography>

                                <Typography variant="h6" component="h3" align="center" style={{ padding: 20 }} >
                                    Follow us on :
                                    </Typography>
                                <div align="center" >
                                    <Grid container spacing={1}
                                        direction="row"
                                        alignItems="center"
                                        justify="center">

                                        <Grid item style={{ marginLeft: 5, marginRight: 5 }}><Avatar alt="Remy Sharp" src="https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png" />
                                            facebook  </Grid>
                                        <Grid item style={{ marginLeft: 5, marginRight: 5 }}>
                                            <Avatar alt="Remy Sharp" src="http://pngimg.com/uploads/twitter/twitter_PNG19.png" />
                                            twitter</Grid>
                                        <Grid item style={{ marginLeft: 5, marginRight: 5 }}>
                                            <Avatar alt="Remy Sharp" src="https://perabellfoodbar.com/wp-content/uploads/2018/05/instagram-new-2016-logo-D9D42A0AD4-seeklogo.com_.png" />
                                            instagram</Grid>

                                    </Grid> </div><br />

                                <Typography variant="body 2" component="h6" align="center">
                                    College Adda! is a free inter community classifieds website where you can post free
                                         advertisements related books, study<br /> tools like - Drafters, Geometry, etc. and can get examination papers too!
                                         You can post free ads to buy, sell, rent or for charity.<br />
                                    Find used books, rent or buy books, find the projects or class notes inside your college premises.
                                        </Typography><br /><br />

                                <Typography variant="overlay" component="h6" align="center">Copyright © 2019
                                    <hr
                                        style={{
                                            color: '#000000',
                                            backgroundColor: "#000000",
                                            marginTop: 10,
                                            height: 0.3,
                                            width: 20
                                        }}
                                    />
                                </Typography>
                            </Paper>
                        </Grid>

                    </Grid>

                </footer></div>
            </div>
        )
    }
}

export default Footer