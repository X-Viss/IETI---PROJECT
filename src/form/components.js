import React from 'react'
import { MapArticles } from './articles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';
import Autocomplete from '@material-ui/lab/Autocomplete'

function itemsForRegisterForm(){
    const confirmPasswords = (event) =>{
        const password=document.getElementsByName('password')[0]
        const password2=document.getElementsByName('password2')[0]
        if(password.value === password2.value){
            password.setCustomValidity("")
            password2.setCustomValidity("")
        }else{
            password.setCustomValidity("Las Contraseñas deben ser iguales")
            password2.setCustomValidity("Las Contraseñas deben ser iguales")
        }

    }
    const countries=[
        { code: 'AD', label: 'Andorra', phone: '376' },
    ]
    return[
        {
            className:"",
            item:<TextField label="Correo" type="email" name="correo" required={true}/>
        },
        {
            className:"",
            item:<TextField label="Contraseña" type="password" name="password" required={true} onChange={confirmPasswords}/>
        },
        {
            className:"",
            item:<TextField label="Confirmar Contraseña" type="password" name="password2" required={true} onChange={confirmPasswords}/>
        },
        {
            className:"",
            item:<Autocomplete
            id="country"
            name="country"
            options={countries}
            getOptionLabel={(option) => option.label}
            style={{ width: 300 }}
            
            renderInput={(params) => <TextField {...params} required={true} label="Combo box" variant="outlined" />}
            />
        },
        {
            className:"",
            item:<TextField
            id="date"
            label="Birthday"
            type="date"
            name="date"
            required={true}
            InputLabelProps={{
              shrink: true,
            }}
            />
        },
        {
            className:"",
            item:<TextField label="Telefono" type="number" name="phone" required={true}/>
        },
    ]
}

export function RegisterForm(props){
    const handleSubmit = (event) =>{
        event.preventDefault()
        console.log(event.target.elements)
    }
    const items=itemsForRegisterForm()
    return <form onSubmit={handleSubmit}>
        <center>
            <MapArticles items={items}/>
            <Button type="submit" variant="contained">Submit</Button>
        </center>
    </form>
}