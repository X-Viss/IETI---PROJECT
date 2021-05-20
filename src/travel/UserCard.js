import React from 'react';
import { Avatar, Card, CardContent, Typography, withStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import user from './user.png';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
const styles = (theme) => ({
    root: {
        height: "100%",
    },

    card:{
        backgroundColor: '#2C355E',
        height: "100%",
    },
    large: {
        width: theme.spacing(10),
        height: theme.spacing(10),
        margin: "0 auto",
        padding: theme.spacing(2),
    },

    name:{
        fontSize: '100px',
    }
});

class UserCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: sessionStorage.getItem("username") == null ? "": sessionStorage.getItem("username")
        };
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>

                <Card variant="outlined" className={classes.card}>

                    <Avatar alt="David Vasquez" className={classes.large} src={user}></Avatar>
                    <CardContent>
                        <Typography variant="h5" component="h2"> 
                            {this.state.email}
                        </Typography>
                    </CardContent>
                    <Tooltip title="Editar perfíl" arrow>
                        <Link
                            to="/editUser"
                        >
                            <IconButton size="large">
                                <EditIcon fontSize="large" style={{color: "white"}}/>
                            </IconButton>
                        </Link>
                    </Tooltip>

                </Card>

            </div>
        )
    }



}


export default withStyles(styles)(UserCard);