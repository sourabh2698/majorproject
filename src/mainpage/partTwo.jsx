import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid,Box,Paper,Container, GridListTile, GridListTileBar } from '@material-ui/core';
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles({
    card: {
        maxWidth: 300,

    },
});

function ImgMediaCard() {
    const classes = useStyles();

    return (
        <div><br/><br/>
        <h5 align="center">Recent ads</h5><br/>
        <Container>
        <Paper>
            <div style={{ paddingLeft: 200 }}>
        
            <Grid container spacing={3} >
            
                <Grid item>
                <Card className={classes.card}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="300"
                            image="https://i.ytimg.com/vi/yoNjMyOAnUo/maxresdefault.jpg"
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Lizard
            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                across all continents except Antarctica
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
                </Grid>

                <Grid item>
                <Card className={classes.card}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="300"
                            image="https://i.ytimg.com/vi/yoNjMyOAnUo/maxresdefault.jpg"
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Lizard
            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                across all continents except Antarctica
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
                </Grid>
            
                <Grid item>
                <Card className={classes.card}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="300"
                            image="https://i.ytimg.com/vi/yoNjMyOAnUo/maxresdefault.jpg"
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Lizard
            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                across all continents except Antarctica
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
                </Grid>
            
                <Grid item>
                <Card className={classes.card}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="300"
                            image="https://i.ytimg.com/vi/yoNjMyOAnUo/maxresdefault.jpg"
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Lizard
            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                across all continents except Antarctica
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
                </Grid>
            
                <Grid item>
                <Card className={classes.card}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="300"
                            image="https://i.ytimg.com/vi/yoNjMyOAnUo/maxresdefault.jpg"
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Lizard
            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                across all continents except Antarctica
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
                </Grid>
                
            </Grid>
        
        </div></Paper>
        </Container>
        <br/><br/></div>
    );
}

export default ImgMediaCard;