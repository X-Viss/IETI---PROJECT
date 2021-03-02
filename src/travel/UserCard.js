import React from 'react';
import { Avatar, Card, CardContent, Link, Typography, withStyles } from '@material-ui/core';
import user from './user.png';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
const styles = (theme) => ({
    root: {
        height: "100%",
    },

    card:{
        backgroundColor: 'grey',
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
            user: {
                firstName: "David",
                lastName: "Vasquez",
                mail: "example@mail.com",
                description: "Ready to Travel :)"
            }
        };
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>

                <Card variant="outlined" className={classes.card}>

                    <Avatar alt="David Vasquez" className={classes.large} src={user}></Avatar>
                    <CardContent>
                        <Typography variant="h5" component="h2" classes={{root: classes.root}}>
                            {this.state.user.firstName + " " + this.state.user.lastName}
                        </Typography>
                        <Typography color="textSecondary">
                            {this.state.user.mail}
                        </Typography>
                        <Typography variant="body2" component="p" >
                            {this.state.user.description}
                        </Typography>
                    </CardContent>
                    <Tooltip title="Editar perfíl" arrow>
                        <Link
                            component="button"
                            variant="body2"
                            to="/editar"
                        >
                            <IconButton size="medium">
                                <EditIcon fontSize="large"/>
                            </IconButton>
                        </Link>
                    </Tooltip>

                </Card>

            </div>
        )
    }



}


export default withStyles(styles)(UserCard);