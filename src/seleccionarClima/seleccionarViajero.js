import React from 'react';
import {GridListTileMio} from './gridListTitle';
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
        this.state = { open: true, name: '', status: '', date: ''}
        this.imgs = this.props.list
        this.id = this.props.id
        this.handleClave = this.handleClave.bind(this)
        this.handleCheck = this.handleCheck.bind(this)
        this.handleClose = this.handleClose.bind(this)
        this.handleOpen = this.handleOpen.bind(this)
        this.handleClear = this.handleClear.bind(this)
    }
    
    render(){
        return (
            <div>
                <div style={{textAlign: 'center'}}>
                    <Button id="abrir" type="button" onClick={this.handleOpen} variant="contained" color="primary">
                        Hola viajero!, qué rol tomaras esta vez?
                    </Button>
                </div>
            <form onSubmit={this.handleClave}>
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
                <GridList  style={{width: 1000, height: 500}} >
                <h1>Escoge tu rol!</h1>
                    <GridListTileMio id={this.id} list={this.imgs} enviar={this.handleCheck} width={500} height={300}
                    style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around'}} cols={2}/>
                </GridList>
                    <Button
                        id="cerrar"
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
            </form>
            </div>
        );
    }


    handleClave(){
        this.props.guardar(this.imgs)
    }

    handleCheck(position){
        this.imgs[position].check ? this.imgs[position].check=false : this.imgs[position].check=true
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
        this.handleClave()
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