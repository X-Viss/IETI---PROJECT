import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

import Typography from '@material-ui/core/Typography';
import './App.css';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    padding: theme.spacing(0, 3),
  },
  paper: {
    margin: theme.spacing(1),
    padding: theme.spacing(2),
  },
}));

const questions = ["pregunta 1","pregunta2","pregunta3"];
const answer = ["respuesta 1","respuesta2","respuesta3"];

function App() {
  const classes = useStyles();
  return (

    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container direction="row"
            justify="flex-start"
            alignItems="center" spacing={5}
            >
          <Grid container xs={12}>
            <Typography noWrap>{questions[0]}</Typography>
          </Grid>
          <Grid container xs={12}>
            <Typography noWrap>{answer[0]}</Typography>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default App;
