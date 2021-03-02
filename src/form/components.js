import React from "react"
import { MapArticles } from './articles'
import TextField from '@material-ui/core/TextField'
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
    return <div className="container">
        <div className= "sing-in">
            <div className="sign-in-container">
                <form onSubmit={handleSubmit}>
                    <center>
                    <h1>Sign in</h1>
                    <p/>
                    <MapArticles items={itemsForLoginForm()}/>
                    <p/>
                    <button type="submit">Login</button>
                    <p/><p/>
                    </center>
                    <button type="submit" className="ghost">No tienes cuenta? Registrate</button>
                </form>
            </div>
        </div>
        <div className="overlay-container">
            <div className="overlay">
            </div>
	    </div>
    </div>
}