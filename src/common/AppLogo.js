import { CardMedia } from '@material-ui/core';
import React from 'react';
import logo from './logo.jpg';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({

    root: {
        
    },
    logo: {
        height: 100,
        cursor: "pointer",
        borderRadius: "4px",
        objectFit: "contain",
        width: "20%",
        margin: "0 auto",
    }
});

class AppLogo extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        const { classes } = this.props;

        return (

            <div className={classes.root}>

                    <CardMedia
                        image={logo}
                        className={classes.logo}
                        component="img"
                        title="Inicio"
                    />

            </div>
        )
    }
}

export default withStyles(styles)(AppLogo);