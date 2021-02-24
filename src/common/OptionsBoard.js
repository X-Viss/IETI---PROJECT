import { CardMedia, Divider, Grid } from '@material-ui/core';
import React from 'react';
import logo from './logo.jpg';
import { withStyles } from '@material-ui/core/styles';
import AppLogo from './AppLogo';
import ButtonsMenu from './ButtonsMenu';

const styles = (theme) => ({

    root: {
        border: `1px solid ${theme.palette.divider}`,
        borderRadius: theme.shape.borderRadius,
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.secondary,
        '& svg': {
            margin: theme.spacing(1.5),
        },
        '& hr': {
            margin: theme.spacing(0, 0.5),
        },
        height: "100%"
    },

    logo: {
        width: "20%",
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
                    
                >
                    <Grid item className={classes.logo}>
                        <AppLogo></AppLogo>
                    </Grid>

                    <Divider orientation="vertical" flexItem />

                    <Grid item className={classes.buttons}>
                        <ButtonsMenu ></ButtonsMenu>
                    </Grid>

                </Grid>

            </div>
        )
    }
}

export default withStyles(styles)(OptionsBoard);