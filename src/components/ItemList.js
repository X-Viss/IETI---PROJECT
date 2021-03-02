// React Elements
import React from "react";
// Material Ui Elements
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import AppBar from "@material-ui/core/AppBar";
import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from "@material-ui/core/Grid";




export default class Bodytable extends React.Component {
	constructor(props) {
    super(props);
    this.state = { value: 0, }
    this.handleChange = this.handleChange.bind(this);
    this.scrollBar = this.scrollBar.bind(this);
  }

  handleChange = (event, newValue) => {
    this.props.changeTab(newValue);
		this.setState({
			value: newValue
		})
  };

  scrollBar(index) {
    return {
      id: `scrollable-auto-tab-${index}`,
      'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
  }
  
  Style = {
    borderStyle: "solid",
    borderWidth: 2,
  }

  dividerStyle = {
		backgroundColor: this.props.color,
		marginLeft: "2%",
		marginRight: "2%"
  }
  
	render() {
		return (
			<React.Fragment>
        <Card style={this.Style}>
          <CardContent >
            <AppBar position="static" color="default">
              <Tabs
                value={this.state.value}
                onChange={this.handleChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs"
                TabIndicatorProps={{
                  style:{
                    backgroundColor: this.props.color,
                  }
                }}
              >
                {this.props.data.map((item, index) => 
                  (
                    <Tab key={index} label={item.label} {...this.scrollBar(index)}
                      style={{
                        color: this.props.color
                      }}
                      disabled={this.props.graph[index].disabled}
                    />
                  )
                )}
              </Tabs>
            </AppBar>
          </CardContent>
          <Divider style={this.dividerStyle} />
          <CardActions>
            <Grid container justify="center" alignItems="center" spacing={0}>
              <Grid item xs={12}>
                {this.props.data.map((item, index) => {
                  // console.log(item.content);
                  return (
                  <TabPanel key={index} value={this.state.value} index={index}>
                    
                  </TabPanel>
                  )
                })}
              </Grid>
            </Grid>
          </CardActions>
        </Card>
			</React.Fragment>
		);
	}
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
