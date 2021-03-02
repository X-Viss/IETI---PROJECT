import React from "react"
import { MapArticles } from './articles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';
import './login.css';

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
    return <div class="container">
        <div class= "sing-in">
            <div class="sign-in-container">
                <form onSubmit={handleSubmit}>
                    <center>
                    <h1>Sign in</h1>
                    <p/>
                    <MapArticles items={itemsForLoginForm()}/>
                    <p/>
                    <Button type="submit" variant="contained">Login</Button>
                    <p/><p/>
                    </center>
                    <Button type="submit">No tienes cuenta? Registrate</Button>
                </form>
            </div>
        </div>
        <div class="overlay-container">
            <div class="overlay">
            </div>
	    </div>
    </div>
}