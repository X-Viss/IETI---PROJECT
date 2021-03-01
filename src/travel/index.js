import { Divider, Grid } from '@material-ui/core';
import React from 'react';
import TravelList from './TravelList';
import UserCard from './UserCard';
import { withStyles } from '@material-ui/core/styles';
import OptionsBoard from '../common/OptionsBoard';


const styles = (theme) => ({
    root: {
        padding: theme.spacing(2),
        display: 'flex',
        flexFlow: 'column',
    },

    user: {
        width: "30%",
        height: "100%",
    },

    travelListGrid: {
        width: "70%",
        overflowY: 'auto',
        height: "80vh"
        
        
    },
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
                    <Grid item xs >
                        <OptionsBoard></OptionsBoard>
                    </Grid>

                    <br></br>
                    <Divider></Divider>
                    <br></br>
                    <Grid
                        container
                        spacing={2}
                        xs
                        item
                        className={classes.downGrid}
                    >
                        <Grid item className={classes.user}>
                            <UserCard></UserCard>
                        </Grid>

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