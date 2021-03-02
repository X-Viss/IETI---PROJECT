import './App.css';
import Travels from './travel'
import { createMuiTheme, makeStyles, MuiThemeProvider } from '@material-ui/core';

const THEME = createMuiTheme({
  typography: {
    "fontFamily": "Helvetica",
    "allVariants": {
      color: "white"
    },
    "fontSize": "auto",
    "fontWeightLight": 300,
    "fontWeightRegular": 400,
    "fontWeightMedium": 500,
    "useNextVariants": true
  }
});

function App() {

  return (
    <div className="App" >
      <MuiThemeProvider theme={THEME}>
        <Travels></Travels>
      </MuiThemeProvider>


    </div >
  );
}

export default App;
