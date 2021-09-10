import React, {useReducer, useEffect, useState} from 'react'
import PhonebookTable from './PhonebookTable'
import Form from './Form'
import { ContactsReducer } from '../reducers/ContactsReducer'

const init = () => {
    const contacts = localStorage.getItem("contacts")
    return contacts ? JSON.parse(contacts) : [];
}

const Contactos = () => {

    const [state, dispatch] = useReducer(ContactsReducer, [], init);

    useEffect(() => {
        localStorage.setItem("contacts", JSON.stringify(state))
    }, [state])

    const [formView, isFormView] = useState(false);

    return (
        <div className="container mt-3">

            <button type="button" className="btn btn-primary btn-block" onClick={() => isFormView(!formView)}>
                {formView ? "- Cerrar formulario" : "+ Agregar nuevo"}
            </button>
            {formView && <Form dispatchContacts={dispatch}/>}
            
            <PhonebookTable contacts={state} dispatchContacts={dispatch}/> 
        </div>
    )
}

export default Contactos
