import React, { useState } from 'react'

import useCliente from '../hooks/useCliente'


const Formulario = () => {
    const { cliente, error, guardarCliente } = useCliente();
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [email, setEmail] = useState("");
    const [id_producto, setProduct] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const nuevoCliente = { nombre, apellido, email };
        guardarCliente(nuevoCliente);
    };


    return (
        <>
            <div className="form">
                {error && <div className="alert alert-danger">{error}</div>}
                {cliente && (
                    <div className="alert alert-success">
                        El cliente {cliente.nombre} fue guardado exitosamente.
                    </div>
                )}
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <div className="div">
                            <label htmlFor="nombre">Nombre</label>
                            <input
                                type="text"
                                className="form-control"
                                id="nombre"
                                placeholder="Nombre"
                                value={nombre}
                                onChange={(e) => setNombre(e.target.value)}
                            />
                            <label htmlFor="apellido">Apellido</label>
                            <input
                                type="text"
                                className="form-control"
                                id="apellido"
                                placeholder="Apellido"
                                value={apellido}
                                onChange={(e) => setApellido(e.target.value)}
                            />
                        </div>
                        <div className="div">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className="div">
                            <label htmlFor="id_producto">Producto</label>
                            <input
                                type="number"
                                className="form-control"
                                id="id_producto"
                                placeholder="Producto"
                                value={id_producto}
                                onChange={(e) => setProduct(e.target.value)}
                            />
                        </div>

                      
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </form>
            </div>
        </>
    )
}

export default Formulario
