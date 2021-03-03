import React from 'react'
import { MapArticles } from './articles'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'
import './login.css';

export function itemsForRegisterForm() {
    const confirmPasswords = (event) => {
        const password = document.getElementsByName('password')[0]
        const password2 = document.getElementsByName('password2')[0]
        if (password.value === password2.value) {
            password.setCustomValidity("")
            password2.setCustomValidity("")
        } else {
            password.setCustomValidity("Las Contraseñas deben ser iguales")
            password2.setCustomValidity("Las Contraseñas deben ser iguales")
        }

    }
    const countries = [
        { code: 'AD', label: 'Andorra', phone: '376' },
    ]
    return [
        {
            className: "",
            item: <TextField label="Correo" type="email" name="correo" required={true} />
        },
        {
            className: "",
            item: <TextField label="Contraseña" type="password" name="password" required={true} onChange={confirmPasswords} />
        },
        {
            className: "",
            item: <TextField label="Confirmar Contraseña" type="password" name="password2" required={true} onChange={confirmPasswords} />
        },
        {
            className: "",
            item: <Autocomplete
                id="country"
                name="country"
                options={countries}
                getOptionLabel={(option) => option.label}
                style={{ width: 300 }}

                renderInput={(params) => <TextField {...params} required={true} label="Pais" variant="outlined" />}
            />
        },
        {
            className: "",
            item: <TextField
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
            className: "",
            item: <TextField label="Telefono" type="number" name="phone" required={true} />
        },
    ]
}

export function RegisterForm(props) {
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(event.target.elements)
    }
    const items = itemsForRegisterForm()
    return <div className="container">
        <div className="sing-in">
            <div className="sign-in-container">
                <form onSubmit={handleSubmit}>
                    <center>
                        <h1>Registro</h1>
                        <p/>
                        <MapArticles items={items} />
                        <p/>
                        <button type="submit" variant="contained">Submit</button>
                        <p/><p/>
                    </center>
                    <button type="submit" className="ghost">Ya tienes cuenta? Ingresa</button>
                    </form>
            </div>
        </div>
        <div className="overlay-container">
            <div className="overlay overlay-right">
            </div>
	    </div>
    </div>
}

export function itemsForLoginForm(){
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
            <div className="overlay overlay-right">
            </div>
	    </div>
    </div>
}