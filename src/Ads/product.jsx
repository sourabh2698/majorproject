import React, { Component } from 'react'
import ComplexGrid from './ads';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid, Box, Paper, Container, GridListTile, GridListTileBar, GridList } from '@material-ui/core';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios'


export class Product extends Component {

    constructor(props) {
        super(props)
    }
// function Product(props)
    // {
        
    
    render() {
        
        
        let p = this.props.db.ad.find( (p)=>p._id==this.props.match.params.id);
        // console.log(p.title);
        

        return (
            
            <div>
                {/* <ComplexGrid db={this.props.db} /> */}
                <Grid>
                    <Paper style={{ padding: 30, margin: 20, display: 'flex' }}>
                        <Grid>
                            
                            <img src='.././assets/book.png' style={{ height: 500, width: 300 }}></img>
                        </Grid>

                        <Grid>

                            <Typography variant="h3" style={{ marginLeft: 100 }}>Product Details:</Typography>
                            
                                <span>
                                
                                
                                    <Typography variant="h6">Proudct name:{p.title}</Typography>
                                    
                                    
                                    </span>
                            
                        </Grid>
                    </Paper>
                </Grid>


            </div>
        )
    }
}


export default Product;

