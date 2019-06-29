import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid, Box, Paper, Container, GridListTile, GridListTileBar, GridList } from '@material-ui/core';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";



class AdCard extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <Paper style={{ paddingRight: 50, marginLeft: 30, marginRight: 30, height: "100%" }}>
                    <br /><br />
                    <h5 align="center">Recent ads</h5><br />
                    <GridList>
                        <Grid style={{ display: 'flex', height: "100%", width: "auto", }}>

                            {this.props.db.ad.map(p =>
                                <span style={{ marginInlineStart: 50, }}>
                                    <Card style={{ width: 300, marginTop: 20, marginLeft: 20, marginBottom: 20, height: "auto" }}>

                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                alt="Contemplative Reptile"
                                                height="80%"
                                                image=".././assets/book.png"
                                                // image={`/${p.image}`}
                                                title="Contemplative Reptile"
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="h2">
                                                    {p.title}
                                                </Typography>
                                                <Typography variant="body2" color="textSecondary" component="p">
                                                    {p.description}
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>

                                        <CardActions>
                                            <Button size="small" color="primary">
                                                <Link to={`/product/${p._id}`}  >Buy Now</Link>
                                            </Button>
                                            <Button size="small" color="primary">
                                                <Link to={`product/${p._id}`}>Details</Link>
                                            </Button>
                                        </CardActions>

                                    </Card>
                                </span>
                            )}
                        </Grid>
                    </GridList>
                </Paper>

                <br /> <br />


            </div>
        );
    }
}

export default AdCard;