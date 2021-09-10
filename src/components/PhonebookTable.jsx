import React from 'react'

// Por defecto está vacío
const TablaContactos = ({contacts = [], dispatchContacts}) => {

    const handleDelete = (id) => {
        const actionDelete = {
            type: "delete",
            payload: id    
        }
        dispatchContacts(actionDelete)
    }

    return (
        <table className="table mt-3">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Nº de teléfono</th>
                    <th scope="col">Acción</th>
                </tr>
            </thead>
            <tbody>
                {
                    contacts.map( i => {

                        const finalID = i.id.split("-")

                        return <tr key={i.id}>
                        <th scope="row">{finalID[0]}</th>
                        <td>{i.name}</td>
                        <td>{i.phone}</td>
                        <td>
                            <button className="btn btn-danger" onClick={() => handleDelete(i.id)}>Borrar</button>
                        </td>
                    </tr>
                    })
                }
            </tbody>
            </table>
    )
}

export default TablaContactos
