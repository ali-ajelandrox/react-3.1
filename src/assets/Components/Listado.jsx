import React from 'react';

import { Table } from 'react-bootstrap';
import { BaseColaboradores } from '../db/BaseColaboradores';


function Listado({ colaboradores, terminoBusqueda }) {
    const filteredColaboradores = colaboradores.filter(colaborador => {
      return (
        colaborador.nombre.toLowerCase().includes(terminoBusqueda.toLowerCase()) ||
        colaborador.correo.toLowerCase().includes(terminoBusqueda.toLowerCase()) ||
        colaborador.edad.toString().includes(terminoBusqueda) ||
        colaborador.cargo.toLowerCase().includes(terminoBusqueda.toLowerCase()) ||
        colaborador.telefono.toString().includes(terminoBusqueda)
      );
    });
  
    return (
      <div>
        <h2>Listado de Colaboradores</h2>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Nombre</th>
              <th>Correo</th>
              <th>Edad</th>
              <th>Cargo</th>
              <th>Teléfono</th>
            </tr>
          </thead>
          <tbody>
            {filteredColaboradores.map((colaborador, index) => (
              <tr key={colaborador.id}>
                <td>{index + 1}</td>
                <td>{colaborador.nombre}</td>
                <td>{colaborador.correo}</td>
                <td>{colaborador.edad}</td>
                <td>{colaborador.cargo}</td>
                <td>{colaborador.telefono}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
  
  export default Listado;