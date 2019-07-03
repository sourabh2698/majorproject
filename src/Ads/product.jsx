import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography';
import { Grid, Box, Paper, Container, GridListTile, GridListTileBar, GridList,Divider } from '@material-ui/core';
import ComplexGrid from './ads';



export class Product extends Component {

    constructor(props) {
        super(props)
   

}


    render() {


        let p = this.props.db.ad.find((p) => p._id == this.props.match.params.id);
         console.log(this.props.db,this.props.match.params);


        return (

            <div>
                {/* <ComplexGrid db={this.props.db} /> */}
                <Grid style={{ padding: 30, margin: 20, display: 'flex' }}>
                    <Paper style={{ height: 'auto', width: 'auto', padding: 10 }}>
                        <Grid>

                            <img src={`http://localhost:8080/${p.image}`} style={{ height: 600, width: 400 }}></img>
                        </Grid>
                    </Paper>

                    <Paper style={{ marginLeft: 70, marginRight:50,height: 'auto', width: '150%', padding: 30 }}>
                        <Grid style={{ marginLeft: 20, }}>
                            
                            <Typography variant="h3" >Product Details:{`   `}</Typography><br />
                            <Divider variant="middle" /><br/>
                            <Typography variant="h6">Title  :<span style={{ marginLeft: 20 }}>{p.title}</span></Typography>
                            <Typography variant="h6">Description  :<span style={{ marginLeft: 20 }}>{p.description}</span></Typography>
                            <Typography variant="h6">Category    :<span style={{ marginLeft: 20 }}>{p.category}</span></Typography>
                            <Typography variant="h6" >Old price:
                            <span style={{ marginLeft: 20 }}>{p.oldprice}</span></Typography>
                            <Typography variant="h6" className="typography1">New price:<span style={{ marginLeft: 20 }}>{p.newprice}</span></Typography>

                        </Grid>
                    </Paper>
                    
                </Grid>
                <Grid>
                    <Paper style={{marginLeft:50,marginRight:50,marginTop:20,marginBottom:10,padding:20}}>
                        <Typography variant="h3" >Contact Details:{`   `}</Typography><br />
                        <Divider variant="middle" /><br/>
                        <Typography variant="h6">Name  :<span style={{ marginLeft: 20 }}>{p.fullname}</span></Typography>
                        <Typography variant="h6">Mobile Number  :<span style={{ marginLeft: 20 }}>{p.number}</span></Typography>
                        <Typography variant="h6">College   :<span style={{ marginLeft: 20 }}>{p.collegename}</span></Typography>
                        <Typography variant="h6">City:<span style={{ marginLeft: 20 }}>{p.cityname}</span></Typography>
                    </Paper>
                </Grid>

            </div>
        )
    }
}


export default Product;

