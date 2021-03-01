import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography className={classes.heading}>{this.props.qry}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        {this.props.ans}
                    </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
        );
    }
  }

  export default withStyles(styles)(Quest);