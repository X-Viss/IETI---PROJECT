
import React, { useDebugValue } from 'react';
import TravelCard from './TravelCard.js';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core';
import { deleteRequest, get } from '../requests/axiosRequests.js';

const styles = (theme) => ({
    root: {
        height: "100%",
    }
})

class TravelList extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            currentCardDelete: 0,
            deleteConfirmationDialogOpen: false,
            travels: []
        };

        this.handleCardDelete = this.handleCardDelete.bind(this);
        this.handleDeleteCardConfirmation = this.handleDeleteCardConfirmation.bind(this);
        this.handleDialogClose = this.handleDialogClose.bind(this);
    }

    /* istanbul ignore next */
    componentDidMount(){
        get("api/travels?user=luisa").then(
            data => {
                console.log(data)
                this.setState({travels: data})
            }
        ).catch((err) => {
            console.log(err)
        })
    }

    addTask(t){
        this.setState(prevState => {
            const travels = prevState.travels.concat(t);
            return {
                travels
            }
        })
    }

    handleCardDelete(key) {
        this.setState({ currentCardDelete: key, deleteConfirmationDialogOpen: true });
    }

    handleDialogClose() {
        this.setState({ deleteConfirmationDialogOpen: false });
    }

      
    /* istanbul ignore next */
    handleDeleteCardConfirmation() {
        console.log(this.state.currentCardDelete)
        if(this.state.currentCardDelete < this.state.travels.length && this.state.currentCardDelete > 0){
            let currentTravel = this.state.travels[this.state.currentCardDelete];
            deleteRequest("api/travels?travelId="+2).then(
                data=> {
                    console.log(data);
                    this.setState(prevState => {
                        const travels = prevState.travels.filter(item => item.travelId !== data.travelId);
                        return {
                            travels
                        }
                    }, this.handleDialogClose);
                }
            ).catch((err)=>{
                console.log(err);
            });
        }
        
    }

    render() {
        const renderTravels = this.state.travels.map((value, index) => {
            value.key = index;
            return (
                <TravelCard key={index} keyName={index} travel={value} onDelete={this.onCardDelete} onCardDelete={this.handleCardDelete}>
                </TravelCard>
            );
        })
        

        const { classes }=this.props; 
        return (
            <div className={classes.root}>
                {renderTravels}

                <Dialog
                    open={this.state.deleteConfirmationDialogOpen}
                    onClose={this.handleDialogClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{"Borrar viaje"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            ¿Estás seguro que deseas borrar este viaje?
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button id="dialogDeleteCancel" onClick={this.handleDialogClose} color="primary">
                            Cancelar
                        </Button>
                        <Button id="dialogDeleteAccept" onClick={this.handleDeleteCardConfirmation} color="primary" autoFocus>
                            Confirmar
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}

export default withStyles(styles)(TravelList);