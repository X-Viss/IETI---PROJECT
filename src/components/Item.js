import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';

import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

import IconButton from '@material-ui/core/IconButton';


const styles = (theme) => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    padding: theme.spacing(2),
  },
  grud: {
    width: '100%',
  }
})

class Item extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
        const {classes} = this.props;
        const value = this.props.text;
        return (
        <div className={classes.root}>
            <Card>
            <CardContent>
            <Grid  container justify="flex-start" alignItems="center" spacing={0}>
                <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} />
                <Typography variant="body2" color="textSecondary" component="p">
                    {value}
                </Typography>
                <Grid className={classes.grud} container xs justify="flex-end">
                <IconButton item aria-label="delete item"><DeleteIcon /></IconButton>
                <IconButton item aria-label="edit item"><EditIcon /></IconButton>
                <IconButton item aria-label="cart item"><AddShoppingCartIcon /></IconButton>
                </Grid>
            </Grid>
            </CardContent>
            </Card>
        </div>
        );
    }
}

export default withStyles(styles)(Item);
