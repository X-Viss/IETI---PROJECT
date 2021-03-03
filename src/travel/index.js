import { Divider, Grid } from '@material-ui/core';
import React from 'react';
import TravelList from './TravelList';
import UserCard from './UserCard';
import { withStyles } from '@material-ui/core/styles';
import OptionsBoard from '../common/OptionsBoard';


const styles = (theme) => ({
    root: {
        display: 'flex',
        flexFlow: 'column',
    },

    user: {
        width: "21%",
        height: "100%",
    },

    travelListGrid: {
        width: "78.7%",
        overflowY: 'auto',
        height: "100%",
        backgroundColor: "#2C355E",
    },

    horizontalDivider: {
        backgroundColor: "black",
        height: "0.2vh",
    },

    verticalDivider:{
        backgroundColor: "white",
        width: "0.3%",
    },

    upperGrid:{
        height: "15vh",
        backgroundColor: "#222A4F",
    },

    downGrid: {
        height: "84.6vh",
    }
});

class index extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: [] }
    }

    render() {
        const { classes } = this.props;
        return (


            <div className={classes.root}>
                <Grid>
                    <Grid item xs alignItems="center" className={classes.upperGrid}>
                        <OptionsBoard></OptionsBoard>
                    </Grid>
                    <Divider className={classes.horizontalDivider}/>
                    <Grid
                        container
                        xs
                        item
                        className={classes.downGrid}
                    >
                        <Grid item className={classes.user}>
                            <UserCard></UserCard>
                        </Grid>
                        <Divider orientation="vertical" flexItem className={classes.verticalDivider}/>
                        <Grid item className={classes.travelListGrid}>
                            <TravelList name={this.state.name} className={classes.travelList}></TravelList>
                        </Grid>
                    </Grid>
                </Grid>


            </div>

        );
    }

}
export default withStyles(styles)(index);
export { default as Travels } from './index.js';