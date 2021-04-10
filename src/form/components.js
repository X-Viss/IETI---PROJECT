import React from 'react'
import { MapArticles } from './articles'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'
import './login.css';
import { Link } from 'react-router-dom';
import { jwtRequest, post } from '../requests/axiosRequests';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CustomToast from '../common/CustomToast';

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
        let username = event.target[0].value;
        let password = event.target[1].value;
        console.log(username)
        console.log(password)

        let user = {
            "userName": username,
            "password": password
        }
        console.log(user)
        handleRegisterRequest(user);
    }


    const handleRegisterRequest = (user) => {
        post("/subs", user).then(data => {
            console.log(data)
            toast.success("Usuario creado", {
                toastId: "registerSuccess"
            });
        }).catch((err) => {
            console.log(err);
            toast.error("Error en la creación", {
                toastId: "registerFailure"
            });
        });
    }


    const items = itemsForRegisterForm()
    return <div className="container">
        <div className="sing-in">
            <div className="sign-in-container">
                <form onSubmit={handleSubmit}>
                    <center>
                        <h1>Registro</h1>
                        <p />
                        <MapArticles items={items} />
                        <p />
                        <button type="submit" variant="contained">Submit</button>
                        <p /><p />
                    </center>
                    <Link to="/login"><button type="button" className="ghost">Ya tienes cuenta? Ingresa</button></Link>
                </form>
            </div>
        </div>
        <div className="overlay-container">
            <div className="overlay overlay-right">
            </div>
        </div>
        <CustomToast/>
    </div>
}

export function itemsForLoginForm() {
    return [
        {
            className: "",
            item: <TextField label="Usuario" type="email" name="usuario" required={true} />
        },
        {
            className: "",
            item: <TextField label="Contraseña" type="password" name="password" required={true} />
        }
    ]
}


export function LoginForm(props) {
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('submit');
        let username = event.target[0].value;
        let password = event.target[1].value;
        let user = {
            "userName": username,
            "password": password
        }
        jwtRequest(user);
    }
    return <div className="container">
        <div className="sing-in">
            <div className="sign-in-container">
                <form onSubmit={handleSubmit}>
                    <center>
                        <h1>Sign in</h1>
                        <p />
                        <MapArticles items={itemsForLoginForm()} />
                        <p />
                        <button type="submit">Login</button>
                        <p /><p />
                    </center>
                    <Link to="/registro"><button type="button" className="ghost">No tienes cuenta? Registrate</button></Link>
                </form>

            </div>
        </div>
        <div className="overlay-container">
            <div className="overlay overlay-right">
            </div>
        </div>
    </div>
}