import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Divider from '@material-ui/core/Divider';
import { Button } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: "95%",
        marginTop: 8,
    },
    image: {
        width: 150,
        height: 150,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
    card: {
        padding: theme.spacing(2),
        maxWidth: 340,
        marginTop: 8,
        marginLeft: 30,
    },
}));

function MyAds(props) {
    const classes = useStyles();
    // let filterList= props.db.ad;

    return (
        <div className={classes.root}>
            <div>
                <Grid container spacing={3}>

                    <Grid item xs={12} sm={10} >
                        <Paper className={classes.paper} style={{ padding: 30, }}>
                            {props.db.ad.map(p =>
                                <Grid container spacing={2} style={{ marginBottom: 20 }}>
                                    <Grid item>
                                        <ButtonBase className={classes.image}>
                                            <img className={classes.img} alt="complex" src={`http://localhost:8080/${p.image}`} />
                                        </ButtonBase>
                                    </Grid>


                                    <Grid item xs={12} sm container>

                                        <Grid item xs container direction="column" spacing={2}>
                                            <Grid item xs>
                                                <Typography gutterBottom variant="subtitle1">
                                                    {p.title}
                                                </Typography>
                                                <Typography variant="body2" gutterBottom>
                                                    {p.description}
                                                </Typography>
                                                <Typography variant="body2" color="textSecondary">
                                                    category: {p.category}
                                                </Typography>
                                            </Grid>
                                            <Grid item>
                                                <Typography variant="body2" style={{ cursor: 'pointer' }} >
                                                <Link to={`/product/${p._id}`}  ><Button>Buy Now</Button></Link>
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                        <Grid item>
                                            <Typography variant="h5"><span style={{ textDecorationLine: 'line-through', textDecorationStyle: 'solid' }}>${p.oldprice}</span> | ${p.newprice}</Typography>
                                        </Grid>
                                    </Grid>

                                </Grid>

                            )}

                        </Paper>
                    </Grid>
                </Grid>
            </div>




        </div>
    );
}

export default MyAds;