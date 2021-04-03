import React from 'react'
import { MapArticles } from './articles'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'
import './edit.css';

export function itemsForEditForm() {
    const countries = [
        { code: 'AD', label: 'Andorra', phone: '376' },
    ]
    return [
        {
            className: "",
            item: <TextField label="Correo" type="email" name="correo" required={true} value="j@gmail.com"/>
        },
        {
            className: "",
            item: <TextField label="Contraseña" type="password" name="password" required={true} value="123"/>
        },
        {
            className: "",
            item: <Autocomplete
                id="country"
                name="country"
                options={countries}
                getOptionLabel={(option) => option.label}
                style={{ width: 300 }}
                value= "Andorra"
                renderInput={(params) => <TextField {...params} required={true} label="Pais" variant="outlined"/>}
            />
        },
        {
            className: "",
            item: <TextField
                id="date"
                label="Birthday"
                type="date"
                value="2012-12-12"
                name="date"
                required={true}
                InputLabelProps={{
                    shrink: true,
                }}
            />
        },
        {
            className: "",
            item: <TextField label="Telefono" type="number" name="phone" required={true} value="152465" />
        },
    ]
}


export function EditUserForm(props) {
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log("cambia")
    }
    const items = itemsForEditForm()
    return <section id="pantalla">
        <div className="derechaa">

        </div>
        <div className="izquierdaa">
            <form onSubmit={handleSubmit} className="izquierdaa">
                <center>
                    <h1>Edita tus datos</h1>
                    <p />
                    <MapArticles items={items} />
                    <p/>
                    <button type="submit" variant="contained">Submit</button>
                    <p /><p />
                </center>
            </form>
        </div>
    </section>
}