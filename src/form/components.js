import React from "react"
import { MapArticles } from './articles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';

function itemsForLoginForm(){
    return[
        {
            className:"",
            item:<TextField label="Usuario" type="email" name="usuario" required={true}/>
        },
        {
            className:"",
            item:<TextField label="Contraseña" type="password" name="password" required={true}/>
        }
    ]
}


export function LoginForm(props){
    const handleSubmit= (event)=>{
        event.preventDefault()
        console.log('submit')
    }
    return <form onSubmit={handleSubmit}>
        <center>
            <MapArticles items={itemsForLoginForm()}/>
            <Button type="submit" variant="contained">Login</Button>
        </center>
    </form>
}