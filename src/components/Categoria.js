import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import NewItem from './NewItem.js'
import ItemList from './ItemList.js'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    padding: theme.spacing(0),
    backgroundColor: '#F4F4F4',
    text_transform: "uppercase"
  }
}));

export default function BodyTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const categories = [
    {label:'accesorios',
      items:['Powerbank','Audifonos','llaves']},
    {label:'ROPA',
      items:['Camisa','Pantalon']},
    {label:'ASEO',
      items:['Desodorante','Talco','Panitos humedos']},
    {label:'SALUD',
      items:['Aspirina']},
    {label:'A LA MANO',
      items:['billetera']}
  ]

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const extractForm = (values) => {
    const tab = categories[value].label;
    categories.map(function(dato){
      if(dato.label == tab){
        dato.items.push(values.value);
      }return dato;
    });
  }
  return (
    <div className={classes.root}>
      <Typography>[barra de navegacion]</Typography>
      <Typography align='left' >Nombre Viaje</Typography>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor='primary'
          variant="scrollable"
          scrollButtons="auto"
        >
          {categories.map((item, index) => 
            (
              <Tab key={index} label={item.label} {...scrollBar(index)}/>
            )
          )}
        </Tabs>
      </AppBar>
      {categories.map((item, index) => {
        return (
        <TabPanel key={index} value={value} index={index}>
          <ItemList items={item.items}></ItemList>
        </TabPanel>
        )
      })}
      <NewItem onSubmitForm={extractForm} ></NewItem>
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