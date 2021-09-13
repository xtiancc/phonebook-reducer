import React, {useState} from 'react'
import {v4 as uuidv4} from 'uuid'

const Form = ({dispatchContacts}) => {

    const [data, setData] = useState({
        name: "",
        phone: "" 
    })
    const {name, phone} = data

    const [error, isError] = useState(false)

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const actionAdd = {
        type: "add",
        payload: {
            id: uuidv4(),
            name, // name: name
            phone // phone: phone
        } 
    }

    const handleAdd = (e) => {
        e.preventDefault()
        // Easy validate form
        if (name.trim().length > 0 && phone.length === 9) {
            dispatchContacts(actionAdd)
            setData({
                name: "",
                phone: "" 
            })
            isError(false)
        } else {
            isError(true)
        }
    }

    return (
        <form className="m-4">
            <div className="form-group">
                <label htmlFor="name">Nombre</label>
                <input type="text" className="form-control" value={name} id="name" name="name" autoComplete="off" onChange={handleChange}/>
            </div>
            <div className="form-group">
                <label htmlFor="phone">Teléfono</label>
                <input type="text" className="form-control" value={phone} id="phone" name="phone" autoComplete="off" onChange={handleChange}/>
            </div>
            <button onClick={handleAdd} type="submit" className="btn btn-success">Agregar</button>
            
            {error && <small className="ml-2 text-danger">Nombre o teléfono invalido. Compruebe nº de caracteres.</small>}
        
        </form>
    )
}

export default Form
