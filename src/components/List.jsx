import React from 'react'

const List = (props) => {
       console.log(props)

       return (

              <>
                     <h2>Lista de Clientes</h2>
                     <div className="table">
                            <table>
                                   <thead className='table-head'>
                                          <tr>
                                                 <th>Nombre</th>
                                                 <th>Apellido</th>
                                                 <th>Email</th>
                                                 <th>Producto</th>
                                          </tr>
                                   </thead>
                                   <tbody>
                                          {props.data && props.data.map(user => (
                                                 <tr key={user.id}>
                                                        <td>{user.nombre}</td>
                                                        <td>{user.apellido}</td>
                                                        <td>{user.email}</td>
                                                        <td>{user.id_producto===1 ? "Camuama" : "Sin producto" || user.id_producto===2 ? "Arroz" : "Sin producto"
                                                               

                                                        }</td>
                                                 </tr>
                                          ))}
                                   </tbody>
                            </table>


                     </div>


              </>
       )
}

export default List
