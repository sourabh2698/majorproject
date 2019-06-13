import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { Button } from 'react-bootstrap';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

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

function ComplexGrid() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div>
                <Paper className={classes.paper}>
                    <Grid container spacing={2}>
                        <Grid item>
                            <ButtonBase className={classes.image}>
                                <img className={classes.img} alt="complex" src="https://about.canva.com/wp-content/uploads/sites/3/2015/01/art_bookcover.png" />
                            </ButtonBase>
                        </Grid>
                        <Grid item xs={12} sm container>
                            <Grid item xs container direction="column" spacing={2}>
                                <Grid item xs>
                                    <Typography gutterBottom variant="subtitle1">
                                        Book Name
                </Typography>
                                    <Typography variant="body2" gutterBottom>
                                        Book description
                </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        Product ID: 1030114
                </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="body2" style={{ cursor: 'pointer' }} >
                                        <Button>Buy Now</Button>
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <Typography variant="h5"><span style={{ textDecorationLine: 'line-through', textDecorationStyle: 'solid' }}>$25.00</span> | $19.00</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </div>



            
        </div>
    );
}

export default ComplexGrid;