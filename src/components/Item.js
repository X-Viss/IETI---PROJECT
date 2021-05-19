import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import ComprasList from './ComprasList'
import { Redirect } from 'react-router';


import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import IconButton from '@material-ui/core/IconButton';

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    padding: theme.spacing(0),
  },
  grud: {
    width: '100%',
  }
})

class Item extends React.Component {
    constructor(props) {
      super(props);
      this.state = {check: this.props.check,
      redirectBool: false,
      name:this.props.name
      }
      this.handleStore = this.handleStore.bind(this);
    }

    handleStore(){
      this.setState({redirectBool:true})
    }

    render() {
        const {classes} = this.props;
        const value = this.props.name;
        const check = this.state.check;

        return (
        <div className={classes.root}>
            <Card>
                <CardContent>
                     <Grid container justify="flex-start" alignItems="center" spacing={0}>
                        <Checkbox checked={check} onChange={e => {
                                this.setState({ check: e.target.checked });
                                this.props.onCheckBox(this.state)
                              }
                            } 
                            inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} 
                          />
                        <Typography variant="body2" color="textSecondary" component="p">
                            {value}
                        </Typography>
                        <Grid className={classes.grud} container justify="flex-end">
                        <IconButton item aria-label="delete item"><DeleteIcon /></IconButton>
                        <IconButton item aria-label="edit item"><EditIcon /></IconButton>
                        <IconButton onClick={this.handleStore} item aria-label="cart item"><AddShoppingCartIcon />
                        {this.state.redirectBool ? <Redirect to={ "/stores?travelId=" + this.props.travel+"&"+"category="+this.props.tab}></Redirect> : <div></div>}
                        </IconButton>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </div>
        );
    }
}

export default withStyles(styles)(Item);
