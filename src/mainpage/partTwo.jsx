import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid, Box, Paper, Container, GridListTile, GridListTileBar } from '@material-ui/core';
import {Carousel,CarouselItem,CardDeck} from 'react-bootstrap'

const useStyles = makeStyles({
    card: {
        maxWidth: 300,

    },
});

// function AdCard(props) {
//     const classes = useStyles();

class AdCard extends React.Component {
    render() {
        return (

            <div><br /><br />
                <h5 align="center">Recent ads</h5><br />
                
                    <Paper style={{display:'flex'}}>
                        {this.props.db.ad.map(p =>
                            <div style={{ paddingLeft: 200}}>



                                
                                            <Card style={{ width: 300, marginTop:20 , marginLeft:20}}>
                                                <CardActionArea>
                                                    <CardMedia
                                                        component="img"
                                                        alt="Contemplative Reptile"
                                                        height="300"
                                                        image=".././assets/book.png"
                                                        title="Contemplative Reptile"
                                                    />
                                                    <CardContent>
                                                        <Typography gutterBottom variant="h5" component="h2">
                                                            {p.title}
                                                        </Typography>
                                                        <Typography variant="body2" color="textSecondary" component="p">
                                                            {p.des}
                                                        </Typography>
                                                    </CardContent>
                                                </CardActionArea>
                                                <CardActions>
                                                    <Button size="small" color="primary">
                                                        Share
                                                </Button>
                                                    <Button size="small" color="primary">
                                                        Learn More
                                                 </Button>
                                                </CardActions>
                                            </Card>
                                       

                            </div>
                        )}
                    </Paper>
                
                <br /> <br /></div>
        );
    }
}

export default AdCard;