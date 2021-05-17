
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
import { toast } from 'react-toastify';
import CustomToast from '../common/CustomToast.js';
import { Redirect } from 'react-router';


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
            travels: [],
            travelRedirection: false,
            editTravelId: ""
        };
        this.handleCardDelete = this.handleCardDelete.bind(this);
        this.handleDeleteCardConfirmation = this.handleDeleteCardConfirmation.bind(this);
        this.handleDialogClose = this.handleDialogClose.bind(this);
        this.handleCardSelection = this.handleCardSelection.bind(this);
    }

    /* istanbul ignore next */
    componentDidMount() {
        let user = sessionStorage.getItem('username');
        get("api/travels?user=" + user).then(
            data => {
                console.log(data)
                this.setState({ travels: data })
            }
        ).catch((err) => {
            console.log(err)
        })
    }

    addTask(t) {
        this.setState(prevState => {
            const travels = prevState.travels.concat(t);
            return {
                travels
            }
        })
    }

    handleCardDelete(key) {
        this.setState({ currentCardDelete: key, deleteConfirmationDialogOpen: true });
        console.log(this.state.currentCardDelete);

    }

    handleDialogClose() {
        this.setState({ deleteConfirmationDialogOpen: false });
    }

    handleCardSelection(key){
        console.log(key)
        console.log(this.state.travels[key])
        let travel = this.state.travels[key];
        this.setState({travelRedirection: true,
            editTravelId: travel.id})
        console.log(this.state.travelRedirection)
    }


    /* istanbul ignore next */
    handleDeleteCardConfirmation() {

        if (this.state.currentCardDelete < this.state.travels.length && this.state.currentCardDelete >= 0) {
            console.log("deleting")
            let travel = this.state.travels[this.state.currentCardDelete];
            console.log(travel);
            deleteRequest("api/travels?id=" +travel.id).then(data => {
                console.log(data);
                toast.success("Borrado exitoso", {
                    toastId: "deleteTravelSuccess"
                });
                this.setState(prevState =>{
                    let travels = prevState.travels.splice(this.state.currentCardDelete, 1);
                    return (
                        travels
                    )
                })
            }).catch((err) => {
                console.log("err");
                toast.error("Error en el borrado", {
                    toastId: "deleteTravelFailure"
                });
            });
            this.handleDialogClose();
        }

    }

    render() {
        const renderTravels = this.state.travels.map((value, index) => {
            value.key = index;
            return (
                <TravelCard key={index} keyName={index} travel={value} onDelete={this.onCardDelete} onCardDelete={this.handleCardDelete} onCardSelection={this.handleCardSelection}>
                </TravelCard>
            );
        })


        const { classes } = this.props;
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
                <CustomToast></CustomToast>
                {this.state.travelRedirection ? <Redirect to={ "/editar?travelId=" + this.state.editTravelId }></Redirect> : <div></div>}
            </div>
        )
    }
}

export default withStyles(styles)(TravelList);