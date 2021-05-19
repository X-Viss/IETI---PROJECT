import React  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import NewItem from './NewItem.js'
import ItemList from './ItemList.js'
import { Grid } from '@material-ui/core';
import { get, put } from '../requests/axiosRequests.js';
import OptionsBoard from '../common/OptionsBoard';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    padding: theme.spacing(0),
    backgroundColor: '#F4F4F4',
    text_transform: "uppercase"
  },
  upperGrid:{
    height: "15vh",
    backgroundColor: "#222A4F",
  }
}));

export default function BodyTabs() {
  const classes = useStyles();
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const travelId = urlParams.get('travelId');

  const [value, setValue] = React.useState(0);
  const [categories, setCategories] = React.useState([
    {label:'accesorios',
      items:[]},
    {label:'ROPA',
      items:[]},
    {label:'ASEO',
      items:[]},
    {label:'SALUD',
      items:[]},
    {label:'A LA MANO',
      items:[]}
  ]);

  /* istanbul ignore next */
  const loadTravel = () => { /* Cargar Categorias */
    get("bag/travel?travelId="+travelId).then(
        data => {
            setCategories([
              {label:'accesorios',
                items:(data.accessoriesList?data.accessoriesList:[])},
              {label:'ROPA',
                items:(data.clothesList?data.clothesList:[])},
              {label:'ASEO',
                items:(data.cleanlinessList?data.cleanlinessList:[])},
              {label:'SALUD',
                items:(data.medicineList?data.medicineList:[])},
              {label:'A LA MANO',
                items:(data.onHandList?data.onHandList:[])}
            ])
        }
    ).catch((err) => {
        console.log(err)
    })
    console.log("LOADED")
}
  /* istanbul ignore next */
  const saveCategory = (tab) => {
    let list = categories[tab].items;
    switch (tab){
      case 0:put('api/create/category/accessories?id=' + travelId, list); break
      case 1:put('api/create/category/clothes?id=' + travelId, list); break
      case 2:put('api/create/category/cleanliness?id=' + travelId, list); break
      case 3:put('api/create/category/medicine?id=' + travelId, list); break
      case 4:put('api/create/category/onhand?id=' + travelId, list); break
      case 5:put('bag/category/newCategory?travelId=' + travelId, list); break
      default:console.log("WARN")
    }
}

  const handleChange = (event, newValue) => {
    setValue(newValue);
    saveCategory(value); /*Guarda la ultima seleccionada*/ 
    loadTravel();
    console.log("FIN")
  };

  const updateCategory = (values) => { /* Actualizar Item */
    const tab = categories[value].label;
    const itemsTemp = [...categories];
    itemsTemp.forEach(function(cat){
      if(cat.label == tab){
        cat.items.forEach(function(it){
          if(it.name == values.name){
            it.check=!values.check;
          }return it;
        });
      }return cat;
    });
    setCategories(itemsTemp);
    saveCategory(value);
  }

  const extractForm = (values) => { /* Agregar Item */
    const tab = categories[value].label;
    const itemsTemp = [...categories];
    itemsTemp.forEach(function(dato){
      if(dato.label == tab){
        dato.items.push({name:values.value,check:false});
      }return dato;
    });
    setCategories(itemsTemp);
  }

  const handleAddTab = () => {/* Agregar Categoria*/ 
    const catTemp = [...categories];
    catTemp.push({label:'varios',items:[]});
    setCategories(catTemp);
    saveCategory(5);
  }
  console.log("ACTUAL",value)
  return (
    <div className={classes.root}>
      <Grid item xs alignItems="center" className={classes.upperGrid}>
          <OptionsBoard></OptionsBoard>
      </Grid>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor='primary'
          variant="scrollable"
          scrollButtons="auto"
        >
          {categories.map((item, index) => /* header categorias*/
            (
              <Tab key={index} label={item.label} {...scrollBar(index)}/>
            )
          )}
        </Tabs>
      </AppBar>
      {categories.map((item, index) => {
        return (
        <TabPanel key={index} value={value} index={index}>
          <ItemList currentTab={value} onCheckBox={updateCategory} travel={travelId} items={item.items}></ItemList>
        </TabPanel>
        )
      })}
      <NewItem value={value} onSubmitForm={extractForm} onSubmitTab={handleAddTab} ></NewItem>
    </div>
  );
}

function scrollBar(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </Typography>
  );
}