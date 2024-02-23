import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function Formulario({ onAgregarColaborador, busquedaActual }) {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    edad: '',
    cargo: '',
    telefono: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nuevoColaborador = {
      id: Math.floor(Math.random() * 1000).toString(),
      ...formData
    };
    onAgregarColaborador(nuevoColaborador, busquedaActual);

    setFormData({
      nombre: '',
      correo: '',
      edad: '',
      cargo: '',
      telefono: ''
    });
  };

  return (
    <div>
      <h2>Agregar un Colaborador</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formNombre">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingresa el nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formCorreo">
          <Form.Label>Correo</Form.Label>
          <Form.Control
            type="email"
            placeholder="Ingresa el correo"
            name="correo"
            value={formData.correo}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formEdad">
          <Form.Label>Edad</Form.Label>
          <Form.Control
            type="number"
            placeholder="Ingresa la edad"
            name="edad"
            value={formData.edad}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formCargo">
          <Form.Label>Cargo</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingresa el cargo"
            name="cargo"
            value={formData.cargo}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formTelefono">
          <Form.Label>Teléfono</Form.Label>
          <Form.Control
            type="tel"
            placeholder="Ingresa el teléfono"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Enviar
        </Button>
      </Form>
    </div>
  );
}

export default Formulario;
