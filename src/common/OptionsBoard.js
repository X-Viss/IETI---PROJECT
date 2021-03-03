import { Divider, Grid } from '@material-ui/core';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppLogo from './AppLogo';
import ButtonsMenu from './ButtonsMenu';

const styles = (theme) => ({

    root: {
        height: "inherit",
    },

    logo: {
        width: "15%",
        height: "100%",
        padding: theme.spacing(2)
    },

    buttons: {
        width: "79%",
    }
});

class OptionsBoard extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        const { classes } = this.props;

        return (

            <div className={classes.root}> 

                <Grid
                    container
                    alignItems="center"
                    style={{height: "100%"}}
                >
                    <Grid item container alignItems="flex-start" justify="center" className={classes.logo}>
                        <AppLogo></AppLogo>
                    </Grid>

                    <Grid item alignItems="center" className={classes.buttons}>
                        <ButtonsMenu ></ButtonsMenu>
                    </Grid>

                </Grid>

            </div>
        )
    }
}

export default withStyles(styles)(OptionsBoard);