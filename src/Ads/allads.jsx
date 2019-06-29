import React from 'react';
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Typography, List, ListSubheader,TextField } from '@material-ui/core';



const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        width: '100%',

        backgroundColor: theme.palette.background.paper,
    },
    paper: {
        padding: theme.spacing(2),
        // textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    formControl: {
        margin: theme.spacing(3),
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: "auto",
      },
      item:{
        
      },

}));





function AllAds(props) {
    const classes = useStyles();
    const [state, setState] = React.useState({
        Likenew: true,
        Good: false,
        Poor: false,
    });

    const handleChange = name => event => {
        setState({ ...state, [name]: event.target.checked });
    };

    const { Likenew, Good, Poor } = state;



    return (
        <div className={classes.root}>
            {/* <Grid container spacing={3}>
                <Grid item xs={12} sm={2}> */}
                    <Paper className={classes.paper}>

                        <div className={classes.root} style={{ border: 'solid', borderRadius: 10, borderWidth: 0.5, marginBottom: 5 }}>
                            <FormControl component="fieldset" className={classes.formControl}>
                                <FormLabel component="legend">Condition</FormLabel>
                                <Divider />

                                <FormGroup>
                                    <FormControlLabel
                                        control={<Checkbox checked={Likenew} onChange={handleChange('Likenew')} value="Likenew" />}
                                        label="Likenew"
                                    />
                                    <FormControlLabel
                                        control={<Checkbox checked={Good} onChange={handleChange('Good')} value="Good" />}
                                        label="Good "
                                    />
                                    <FormControlLabel
                                        control={
                                            <Checkbox checked={Poor} onChange={handleChange('Poor')} value="Poor" />
                                        }
                                        label="Poor "
                                    />
                                </FormGroup>
                                <FormHelperText>select quality</FormHelperText>
                            </FormControl>
                        </div>
                        <Divider />

                        <div className={classes.root} style={{ border: 'solid', borderRadius: 10, borderWidth: 0.5, marginTop: 5 }}>

                            <List style={{ maxHeight: 250, overflow: 'auto' }}>
                                <ListSubheader style={{ background:"#fff",backgroundPositionY:0}}  >
                                    Category
                                </ListSubheader>
                                <Divider variant="middle" />
                                <TextField
                                    id="standard-search"
                                    label="Search field"
                                    type="search"
                                    className={classes.textField}
                                    margin="normal"
                                />
                                <ListItem className={classes.item}  >
                                    <ListItemText primary="Books" /> <Checkbox />
                                </ListItem>
                                <ListItem className={classes.item}>
                                    <ListItemText primary="Stationary" /> <Checkbox />
                                </ListItem>
                                <ListItem className={classes.item}>
                                    <ListItemText primary="electronics" /> <Checkbox />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="others" /> <Checkbox />
                                </ListItem>
                            </List>
                        </div>

                        <Divider />

                        <div className={classes.root} style={{ border: 'solid', borderRadius: 10, borderWidth: 0.5, marginTop: 5 }}>

                            <List style={{ maxHeight: 250, overflow: 'auto' }}>
                                <ListSubheader style={{ background:"#fff",backgroundPositionY:0}}>
                                    City
                                </ListSubheader>
                                <Divider variant="middle" />
                                <TextField
                                    id="standard-search"
                                    label="Search field"
                                    type="search"
                                    className={classes.textField}
                                    margin="normal"
                                />
                                <ListItem  >
                                    <ListItemText primary="Jaipur" /> <Checkbox />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Delhi" /> <Checkbox />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="mumbai" /> <Checkbox />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="others" /> <Checkbox />
                                </ListItem>
                            </List>
                        </div>
                    </Paper>
                {/* </Grid> */}


                {/* <Grid item xs={12} sm={10}>
                    <Paper className={classes.paper}>
                        <ComplexGrid/>
                        <Adss/>
                    </Paper>
                </Grid> */}
            {/* </Grid> */}
        </div>
    );
}

export default AllAds;


// paper: {
//     padding: theme.spacing(2),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   },
//   div:{
//     display: 'flex',
//     flexDirection: 'row wrap',
//     padding: 20,
//     width: '100%'
//   },
//   paperLeft:{
//     flex: 1,
//     height: '100%',
//     margin: 10,
//     textAlign: 'center',
//     padding: 10
//   },
//   paperRight:{
//     height: '100%',
//     flex: 4,
//     margin: 10,
//     textAlign: 'center',
//     padding: 10
//   }

// <div style={classes.div}>
//             <Paper zDepth={3} style={classes.paperLeft}>
//               <h4>First Vertical component</h4>
//             </Paper>
//             <Paper zDepth={3} style={classes.paperRight}>
//                 <h4>Second Vertical component</h4>
//             </Paper>