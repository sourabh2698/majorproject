import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { Button } from 'react-bootstrap';
import './adss.css'

class Adss extends React.Component {

    constructor(props) {
      super(props);
      }



    render() {
        return (
           <div className="root">
            <div>
                <Paper className="paper">
                {this.props.db.ads.map(p =>
                    <Grid container spacing={2}>
                        <Grid item>
                            <ButtonBase >
                                <img  style={{height:200,width:200}} alt="complex" src=".././assets/bookcover.jpg" />
                            </ButtonBase>
                        </Grid>
                        
                        <Grid item xs={12} sm container>
                            
                            <Grid item xs container direction="column" spacing={2}>
                                <Grid item xs>
                                    <Typography gutterBottom variant="subtitle1">
                                        {p.ProductName}
                </Typography>
                                    <Typography variant="body2" gutterBottom>
                                        {p.ProductDescription}
                </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        Product condition: {p.productcondition}
                </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="body2" style={{ cursor: 'pointer' }} >
                                        <Button>Buy Now</Button>
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <Typography variant="h5"><span style={{ textDecorationLine: 'line-through', textDecorationStyle: 'solid' }}>${p.OldPrice}</span> | ${p.NewPrice}</Typography>
                            </Grid>
                        </Grid>
                       
                    </Grid>
                     )}
                </Paper>
            </div>




        </div>
        )
    }
}
 export default Adss