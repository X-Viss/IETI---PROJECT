import { CardMedia } from '@material-ui/core';
import React from 'react';
import logo from './logo.jpg';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
const styles = (theme) => ({

    root: {
        height: "100%",
    },
    logo: {
        height: "100%",
        cursor: "pointer",
        borderRadius: "6px",
        width: "auto",
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
                <Link to="/">
                    <CardMedia
                        image={logo}
                        className={classes.logo}
                        component="img"
                        title="Inicio"
                    />
                </Link>

            </div>
        )
    }
}

export default withStyles(styles)(AppLogo);