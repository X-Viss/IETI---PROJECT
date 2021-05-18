import React from 'react';
import { Divider, Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import GridList from '@material-ui/core/GridList';
import { get } from '../requests/axiosRequests.js';
import Store from './Store.js';
import OptionsBoard from '../common/OptionsBoard';

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    padding: theme.spacing(2),
  },
  gridList: {
    width: 500,
    height: 450,
  },
  upperGrid:{
    height: "15vh",
    backgroundColor: "#222A4F",
  }
})

class ComprasList extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          market: []
      };
    }

    /* istanbul ignore next */
    componentDidMount() {
      get("bag/stores?category=ROPA").then(
          data => {
              console.log(data)
              this.setState({ market: data })
          }
      ).catch((err) => {
          console.log(err)
      })
  }

    render() {
        const {classes} = this.props;
        const shopList = this.state.market.map(
            (value,index) => {
              value.key = index;
              return <Store key={index} src={value.pathImage} url={value.url} name={value.name}></Store>
            }
          );
        return (
            <div className={classes.root}>
              <Grid item xs alignItems="center" className={classes.upperGrid}>
                  <OptionsBoard></OptionsBoard>
              </Grid>
              <Typography color='primary' variant='h5' align='left' >Donde Comprar</Typography>
                <GridList cellHeight={160} className={classes.gridList} cols={3}>
                    {shopList}
                </GridList>
            </div>
        );
    }
  }

export default withStyles(styles)(ComprasList);