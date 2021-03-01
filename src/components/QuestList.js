import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Quest from './Quest.js'

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    padding: theme.spacing(2),
  }
})

class QuestList extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          questions: [{quest: 'pregunta 1'
                      ,ans:'respuesta 1'},
                      {quest: 'pregunta 2'
                      ,ans:'respuesta 2'},
                      {quest: 'pregunta 3'
                      ,ans:'respuesta 3'},
                      {quest: 'pregunta 4'
                      ,ans:'respuesta 4'},
                      {quest: 'pregunta 5'
                      ,ans:'respuesta 5'}
                  ]
      };
    }
  
    render() {
        const questionsAccords = this.state.questions.map(
          (value,index) => {
            value.key = index;
            return <Quest key={index} qry={value.quest} ans={value.ans}></Quest>
          }
        );
        const {classes} = this.props;
        return (
            <div className={classes.root}>
              <Typography align='center' >[barra de navegacion]</Typography>
              <Typography align='left' >Preguntas Frecuentes</Typography>
                {questionsAccords}
            </div>
        );
    }
  }

export default withStyles(styles)(QuestList);