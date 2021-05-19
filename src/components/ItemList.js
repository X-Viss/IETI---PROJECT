import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Item from './Item.js'

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    padding: theme.spacing(1),
  }
})

class ItemList extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
        const {classes} = this.props;
        const itemsli = this.props.items.map((item, index) => 
          <Item key={index} onCheckBox={this.props.onCheckBox} travel={this.props.travel} tab={this.props.currentTab} check={item.check} name={item.name}></Item>
        )
        return (
        <div className={classes.root}>
            {itemsli}
        </div>
        );
    }
}

export default withStyles(styles)(ItemList);