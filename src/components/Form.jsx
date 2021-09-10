import React, {useState} from 'react'
import {v4 as uuidv4} from 'uuid'

const Form = ({dispatchContacts}) => {

    const [data, setData] = useState({
        name: "",
        phone: "" 
    })
    const {name, phone} = data

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
        dispatchContacts(actionAdd)
    }

    return (
        <form className="m-4">
            <div className="form-group">
                <label htmlFor="name">Nombre</label>
                <input type="text" className="form-control" id="name" name="name" autoComplete="off" onChange={handleChange}/>
            </div>
            <div className="form-group">
                <label htmlFor="phone">Teléfono</label>
                <input type="text" className="form-control" id="phone" name="phone" autoComplete="off" onChange={handleChange}/>
            </div>
            <button onClick={handleAdd} type="submit" className="btn btn-success">Agregar</button>
        </form>
    )
}

export default Form
