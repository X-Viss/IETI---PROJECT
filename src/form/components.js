import React from 'react'
import { MapArticles } from './articles'
import TextField from '@material-ui/core/TextField'
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
            item:<TextField id="standard-basic" type="text" name="name" required={true} placeholder="Nombre"/>
        },
        {
            className:"",
            item:<input type="password" name="password" required={true} placeholder="Contraseña" onChange={confirmPasswords}/>
        },
        {
            className:"",
            item:<input type="password" name="password2" required={true} placeholder="Confirmar Contraseña" onChange={confirmPasswords}/>
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
            item:<input type="number" name="phone" placeholder="Telefono" required={true}/>
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
        <MapArticles items={items}/>
        <button>Submit</button>
    </form>
}