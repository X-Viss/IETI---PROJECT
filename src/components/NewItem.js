import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';
import TabIcon from '@material-ui/icons/Tab';

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    padding: theme.spacing(2),
  },
  button: {
    margin: theme.spacing(1),
  }
})

class NewItem extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value:'',
        disableButton:false
      };
      this.handleChange = this.handleChange.bind(this);
      this.onSubForm = this.onSubForm.bind(this);
      this.onSubTab = this.onSubTab.bind(this);
    }

    handleChange(event){
        this.setState({value: event.target.value});
    }

    onSubForm(){
      this.props.onSubmitForm(this.state)
    }

    onSubTab(){
      this.setState({disableButton: true})
      this.props.onSubmitTab()
    }

    render() {
        const {classes} = this.props;
        return (
        <div className={classes.root}>
            <Card>
                <CardContent>
                    <Grid container justify="flex-start" alignItems="center" spacing={0}>
                          <IconButton item id="icon" aria-label="edit item" onClick={this.onSubForm}><AddIcon /></IconButton>
                          <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </Grid>
                    <Grid container justify="flex-end" alignItems="center" spacing={0}>
                      
                    <IconButton item id="tabbutton" disabled={true}
                      onClick={this.onSubTab} aria-label="edit item"><TabIcon />Agregar Categoria Personal</IconButton>
                    </Grid>
                </CardContent>
            </Card>
        </div>
        );
    }
}

export default withStyles(styles)(NewItem);