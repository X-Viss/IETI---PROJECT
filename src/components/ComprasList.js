import React from 'react';
import {  Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import GridList from '@material-ui/core/GridList';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { get } from '../requests/axiosRequests.js';
import Store from './Store.js';
import OptionsBoard from '../common/OptionsBoard';
import IconButton from '@material-ui/core/IconButton';
import { Redirect } from 'react-router';


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
          market: [],
          categories: [{tabId:0,name:"ACCESORIOS"},
          {tabId:1,name:"ROPA"},
          {tabId:2,name:"ASEO"},
          {tabId:3,name:"SALUD"},
          {tabId:4,name:"A LA MANO"}],
          backRedirection:false,
          travel:""
      };
      this.handleBack = this.handleBack.bind(this);
    }

    handleBack(){
      this.setState({backRedirection:true})
    }

    /* istanbul ignore next */
    componentDidMount() {
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      const category = urlParams.get("category");
      this.setState({travel:urlParams.get("travelId")})

      if(category<=4 && category>=0){
        let selectedCategory = 0;
        this.state.categories.forEach(function(dato){
          if(dato.tabId == category){
            selectedCategory=dato.name;
          }return dato;
        });
        console.log(selectedCategory)
        get("bag/stores?category="+selectedCategory).then(
            data => {
                console.log(data)
                this.setState({ market: data })
            }
        ).catch((err) => {
            console.log(err)
        })
      }
      
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
              <Grid item xs alignItems="center" className={classes.upperGrid}>
              <IconButton onClick={this.handleBack} item aria-label="back item"><ArrowBackIcon fontSize="large" color="secondary"/>
              {this.state.backRedirection ? <Redirect to={ "/editar?travelId="+this.state.travel}></Redirect> : <div></div>}
              </IconButton>
              </Grid>
            </div>
        );
    }
  }

export default withStyles(styles)(ComprasList);