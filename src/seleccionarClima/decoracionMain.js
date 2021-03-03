import React from 'react';
import {SeleccionarClima} from './SeleccionarClima';
import { withStyles } from '@material-ui/core/styles';


const styles = (theme) => ({
    root: {
        verticalAlign: "baseline",
        position: "relative",
        padding: theme.spacing(2),
        height: "100%"
    },
    down: {
        height: "70%",
    },
    user: {
        width: "30%",
    },
    travelListGrid: {
        width: "70%"
    },
    travelList: {
        width: "inherit",
    },

    upperDiv: {

    }
});

class Main extends React.Component {

    constructor(props){
        super(props)
        this.state = {clima: []}
        this.guardarClima = this.guardarClima.bind(this)
    }

    guardarClima(data){
        this.setState({
            clima: data
        })
    }

    render() {
        
        let imgs2 = [
            {
                path : 'https://i.ibb.co/ssC1Wz1/KONICA-MINOLTA-DIGITAL-CAMERA.jpg',
                name : "Invierno",
                check: false

            },
            {
                path: 'https://i.ibb.co/XsY2PSt/oto-o.jpg',
                name: "Otoño",
                check: false
            },
            {
                path: 'https://i.ibb.co/rQ6K4Pp/primavera.jpg',
                name: "Primavera",
                check: false
            
            },
            {
                path: 'https://i.ibb.co/8BHqHSC/verano.jpg',
                name: "Verano",
                check: false
            }
        ];

        const { classes } = this.props;

        return (
            <div className={classes.root} >
                <SeleccionarClima list={imgs2} guardar={this.guardarClima} />
                {console.log(this.state.clima)}
            </div>
        );
    }
}

export default withStyles(styles)(Main);