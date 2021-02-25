import React from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export class SeleccionarViajero extends React.Component {
    constructor(props){
        super(props)
        this.state = { open: false, name: '', status: '', date: ''}
        this.handleClose = this.handleClose.bind(this)
        this.handleOpen = this.handleOpen.bind(this)
        this.handleName = this.handleName.bind(this)
        this.handleDate = this.handleDate.bind(this)
        this.handleStatus = this.handleStatus.bind(this)
        this.handleClear = this.handleClear.bind(this)
    }
    
    render(){
        let imgs = [
            {
                path : 'https://i.ibb.co/6JRjSwT/mascotas.jpg',
                name : "Viaje con mascotas"

            },
            {
                path: 'https://i.ibb.co/dKFjmSv/mochilero.jpg',
                name: "Viaje como Mochilero"
            },
            {
                path: 'https://i.ibb.co/3mJhzz1/parejas.jpg',
                name: "Viaje en pareja"
            
            },
            {
                path: 'https://i.ibb.co/vdJ8ZQc/turistas.jpg',
                name: "Viaje como turista"
            },
            {
                path: 'https://i.ibb.co/88ckWqL/viaje-De-Negocios.jpg',
                name: "Viaje de trabajo"
            }

        ];
        return (
            <div>
                <div style={{textAlign: 'center'}}>
                    <Button type="button" onClick={this.handleOpen} variant="contained" color="primary">
                        Hola viajero!, qué rol tomaras esta vez?
                    </Button>
                </div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={this.state.open}
                style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                timeout: 500,
                }}
            >
                <Fade in={this.state.open}>
                <div style={{backgroundColor: 'white', border: '2px solid #000', textAlign: 'center'}}>
                <GridList cellHeight={250} style={{width: 1300, height: 600}} >
                <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                    <h1>Escoge tu rol!</h1>
                </GridListTile>
                {imgs.map((img, i) => (
                <GridListTile key={i} >
                    <img src={img.path} style={{width: 800, height: 600}} />
                    <GridListTileBar
                    title={img.name}
                    actionIcon={
                        <FormControlLabel
                            control={<Checkbox  style={{color: "white"}} />}
                            label="Clic aquí"
                            style={{color: "white"}}
                        />
                    }
                    />
                    </GridListTile>
                    ))}
                </GridList>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        onClick={this.handleClose}
                    >
                        Apply
                    </Button><br/><br/>
                </div>
                </Fade>
            </Modal>
            </div>
        );
    }

    handleName (e) {
        this.setState({
            name: e.target.value
        })
    }

    handleStatus (e){
        this.setState({
            status: e.target.value
        })
    }

    handleDate(e){
        this.setState({
            date: e.target.value
        })
    }

    handleClear (e){   
        this.setState({
            name: '',
            status: '',
            date: ''
        })
        this.handleClose()       
    }


    handleClose(){
        this.setState({
            open:false
        })
    }

    handleOpen(){
        this.handleClear()
        this.setState({
            open:true
        })
    }
}