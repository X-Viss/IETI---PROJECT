import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import GridList from '@material-ui/core/GridList';
import Store from './Store.js'

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
})

class ComprasList extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          market: [{path: 'https://i.ibb.co/6N9b6xr/adidas-logo.png'
                    ,name:'tienda 1'},
                    {path: 'https://i.ibb.co/NLWmk1t/exito.png'
                    ,name:'tienda 2'},
                    {path: 'https://i.ibb.co/kgp552L/Reebok-Logo.png'
                    ,name:'tienda 3'},
                    {path: 'https://i.ibb.co/kQc19fs/Zara-Logo.png'
                    ,name:'tienda 4'}
                  ]
      };
    }

    render() {
        const {classes} = this.props;
        const shopList = this.state.market.map(
            (value,index) => {
              value.key = index;
              return <Store key={index} src={value.path} name={value.name}></Store>
            }
          );
        return (
            <div className={classes.root}>
              <Typography align='center' >[barra de navegacion]</Typography>
              <Typography align='left' >Donde Comprar</Typography>
                <GridList cellHeight={160} className={classes.gridList} cols={3}>
                    {shopList}
                </GridList>
            </div>
        );
    }
  }

export default withStyles(styles)(ComprasList);