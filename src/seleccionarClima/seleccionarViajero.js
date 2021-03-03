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
        this.state = { open: true, name: '', status: '', date: ''}
        this.imgs = this.props.list
        this.handleClave = this.handleClave.bind(this)
        this.handleCheck = this.handleCheck.bind(this)
        this.handleClose = this.handleClose.bind(this)
        this.handleOpen = this.handleOpen.bind(this)
        this.handleName = this.handleName.bind(this)
        this.handleDate = this.handleDate.bind(this)
        this.handleStatus = this.handleStatus.bind(this)
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
                <GridList cellHeight={250} style={{width: 1300, height: 600}} >
                <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                    <h1>Escoge tu rol!</h1>
                </GridListTile>
                {this.imgs.map((img, i) => (
                <GridListTile key={i} >
                    <img src={img.path} style={{width: 800, height: 600}} />
                    <GridListTileBar
                    title={img.name}
                    actionIcon={
                        <FormControlLabel
                            id="controlLabel"
                            control={<Checkbox id="checkBoxId" style={{color: "white"}} onClick={() => this.handleCheck(i)} />}
                            label="Clic aqui"
                            style={{color: "white"}}
                        />
                    }
                    />
                    </GridListTile>
                    ))}
                </GridList>
                    <Button
                        id="guardar"
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


    handleClave(e){
        e.preventDefault();
        this.props.guardar(this.imgs)
    }

    handleCheck(position){
        this.imgs[position].check ? this.imgs[position].check=false : this.imgs[position].check=true
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