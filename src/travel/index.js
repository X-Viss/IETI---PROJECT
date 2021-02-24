import { Divider, Grid } from '@material-ui/core';
import React from 'react';
import TravelList from './TravelList';
import UserCard from './UserCard';
import { withStyles } from '@material-ui/core/styles';
import OptionsBoard from '../common/OptionsBoard';


const styles = (theme) => ({
    root: {
        verticalAlign: "baseline",
        position: "relative",
        padding: theme.spacing(2),
        height: "100%"
    },
    down: {
        height: "70%",
    },
    user: {
        width: "30%",
    },
    travelListGrid: {
        width: "70%"
    },
    travelList: {
        width: "inherit",
    },

    upperDiv: {

    }
});

class index extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: [] }

        this.setState(prevState => {
            const name = prevState.push({})
            return (
                name
            )
        })
    }


    funcion(a) {

    }

    render() {
        const { classes } = this.props;
        return (


            <div className={classes.root}>
                <Grid
                >
                    <Grid item xs style={{height: "30%"}}>
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