import React, {Component} from 'react';
import {Typography} from "@material-ui/core";
import {RadialChart} from "react-vis";


class Statisctics extends Component {

    render() {
        return (
            <div>
                <br/>
                <br/>
                <div style={{display: "flex"}}>
                    <div style={{flex: "50%", padding: "5px", backgroundColor:"#F4F4F4"}}>
                        <Typography variant="h3" gutterBottom style={{color: '#222A4F'}}>
                            Lugares que frecuentan
                        </Typography>
                        <RadialChart
                            data={[{angle: 1, label: 'Primero', className: 'Primero'}, {
                                angle: 3,
                                label: 'Segundo', className: 'Segundo'
                            }, {angle: 2, label: 'Tercero', className: 'Tercero'}, {
                                angle: 7,
                                label: 'Cuarto', className: 'Cuarto'
                            }, {angle: 4, label: 'Quinto', className: 'Quinto'}]}
                            width={400}
                            height={300}/>
                        <Typography variant="h3" gutterBottom style={{color: '#222A4F'}}>
                            Actividades más frecuentes
                        </Typography>
                        <RadialChart
                            data={[{angle: 5, label: 'Primero', className: 'Primero'}, {
                                angle: 2,
                                label: 'Segundo', className: 'Segundo'
                            }, {angle: 7, label: 'Tercero', className: 'Tercero'}, {
                                angle: 5,
                                label: 'Cuarto', className: 'Cuarto'
                            }, {angle: 3, label: 'Quinto', className: 'Quinto'}, {
                                angle: 1,
                                label: 'Sexto',
                                className: 'Sexto'
                            }, {angle: 10, label: 'Septimo', className: 'Septimo'}, {
                                angle: 3,
                                label: 'Octavo',
                                className: 'Octavo'
                            }]}
                            width={400}
                            height={300}/>
                    </div>
                </div>
                <br/>
                <br/>
            </div>
        );
    }
}

export default Statisctics;