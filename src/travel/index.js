import { Grid } from '@material-ui/core';
import React from 'react';
import TravelList from './TravelList';
import UserCard from './UserCard';
import { withStyles } from '@material-ui/core/styles';


const styles = (theme) => ({
    root: {
        verticalAlign: "baseline",
        position: "relative",

    },
    down: {
        margin: "auto",
        padding: theme.spacing(2),
        position: "absolute",
    },
    user: {
        width: "30%",
    },
    travelListGrid: {
        width: "70%"
    },
    travelList: {
        width: "inherit",
    }
});

class index extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { classes } = this.props;
        return (

            
            <div className={classes.root}>
                <Grid
                    container
                    spacing={2}
                    className={classes.down}
                    xs
                >
                    <Grid item className={classes.user}>
                        <UserCard></UserCard>
                    </Grid>

                    <Grid item className={classes.travelListGrid}>
                        <TravelList className={classes.travelList}></TravelList>
                    </Grid>
                </Grid>
            </div>

        );
    }
}
export default withStyles(styles)(index);
export { default as Travels } from './index.js';