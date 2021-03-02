import { Button, CardMedia, Grid } from '@material-ui/core';
import React from 'react';
import logo from './logo.jpg';
import { withStyles } from '@material-ui/core/styles';
import { AddToPhotos, QuestionAnswer } from '@material-ui/icons';
import Tooltip from '@material-ui/core/Tooltip';

const styles = (theme) => ({
    root: {

    },

    button: {

    }
});

class ButtonsMenu extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        const { classes } = this.props;

        return (

            <div className={classes.root}>

                <Grid
                    container
                    spacing={1}
                    direction="row"
                    justify="center"
                >
                    <Grid item>
                        <Button
                            variant="contained"
                            color="primary"
                            className={classes.button}
                            startIcon={<QuestionAnswer />}
                        >
                            Preguntas Frecuentes
                        </Button>
                    </Grid>


                    <Grid item>
                        <Button
                            variant="contained"
                            color="primary"
                            className={classes.button}
                            startIcon={<AddToPhotos />}
                        >
                            Añadir viaje
                    </Button>
                    </Grid>


                </Grid>

            </div>
        )
    }
}

export default withStyles(styles)(ButtonsMenu);