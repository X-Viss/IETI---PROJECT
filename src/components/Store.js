
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const styles = (theme) => ({
  root: {
    padding: theme.spacing(0, 3),
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
})

class Quest extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <Card>
                    <CardContent>
                    <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} />
                    <img src={this.props.src} alt={this.props.name} style={{width: 100, height: 100}}/>
                    </CardContent>
                </Card>
            </div>
        );
    }
  }

  export default withStyles(styles)(Quest);