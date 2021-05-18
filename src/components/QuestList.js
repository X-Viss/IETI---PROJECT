import React from 'react';
import { Divider, Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Quest from './quest.js'
import OptionsBoard from '../common/OptionsBoard';
import { get } from '../requests/axiosRequests.js';

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    padding: theme.spacing(2),
  },
  upperGrid:{
    height: "15vh",
    backgroundColor: "#222A4F",
  }
})

class QuestList extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          questions: []
      };
    }

    /* istanbul ignore next */
    componentDidMount() {
      get("bag/faq").then(
          data => {
              console.log(data)
              this.setState({ questions: data })
          }
      ).catch((err) => {
          console.log(err)
      })
  }
  
    render() {
        const questionsAccords = this.state.questions.map(
          (value,index) => {
            value.key = index;
            return <Quest key={index} qry={value.quest} ans={value.answer}></Quest>
          }
        );
        const {classes} = this.props;
        return (
            <div className={classes.root}>
              <Grid item xs alignItems="center" className={classes.upperGrid}>
                  <OptionsBoard></OptionsBoard>
              </Grid>
              <Typography align='left' color='primary'>Preguntas Frecuentes</Typography>
                {questionsAccords}
            </div>
        );
    }
  }

export default withStyles(styles)(QuestList);