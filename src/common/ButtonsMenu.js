import { Button , Grid} from '@material-ui/core';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { AddToPhotos, QuestionAnswer } from '@material-ui/icons';
import { Link } from 'react-router-dom';


const styles = (theme) => ({
    root: {

    },

    button: {
        backgroundColor: "#BA4974",
        color: 'white'
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
                        <Link to="/listQuestions">
                            <Button
                                variant="contained"
                                className={classes.button}
                                startIcon={<QuestionAnswer />}
                                size="large"
                            >
                                Preguntas Frecuentes
                        </Button>
                        </Link>
                    </Grid>


                    <Grid item>
                        <Link to="/categorias">
                            <Button
                                variant="contained"
                                className={classes.button}
                                startIcon={<AddToPhotos />}
                                size="large"
                            >
                                Añadir Viaje
                            </Button>
                        </Link>
                        
                    </Grid>

                    <Grid item>
                        <Link to="/travelList">
                            <Button
                                variant="contained"
                                className={classes.button}
                                startIcon={<AddToPhotos />}
                                size="large"
                            >
                                Ver Mis Viajes
                        </Button>
                        </Link>
                    </Grid>

                </Grid >

            </div >
        )
    }
}

export default withStyles(styles)(ButtonsMenu);