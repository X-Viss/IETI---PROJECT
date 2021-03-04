import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';

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
        value:''
      };
      this.handleChange = this.handleChange.bind(this);
      this.onSubForm = this.onSubForm.bind(this);
    }

    handleChange(event){
        this.setState({value: event.target.value});
    }

    onSubForm(){
      this.props.onSubmitForm(this.state)
    }

    render() {
        const {classes} = this.props;
        return (
        <div className={classes.root}>
            <Card>
                <CardContent>
                    <Grid container justify="flex-start" alignItems="center" spacing={0}>
                          <IconButton item aria-label="edit item" onClick={this.onSubForm}><AddIcon /></IconButton>
                          <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </Grid>
                </CardContent>
            </Card>
        </div>
        );
    }
}

export default withStyles(styles)(NewItem);