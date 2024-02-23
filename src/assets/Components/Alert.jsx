import React, { useState } from 'react';
import { Alert, Button, Form } from 'react-bootstrap';

function AlertComponent({ success, mensaje }) {
  if (success) {
    return (
      <Alert variant="success">
        {mensaje}
      </Alert>
    );
  } else {
    return (
      <Alert variant="danger">
        {mensaje}
      </Alert>
    );
  }
}

function Formulario({ onAgregarColaborador, busquedaActual }) {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    edad: '',
    cargo: '',
    telefono: ''
  });
  const [alertData, setAlertData] = useState({
    mostrar: false,
    mensaje: '',
    success: false
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();


    if (!formData.nombre || !formData.correo || !formData.edad || !formData.cargo || !formData.telefono) {
      setAlertData({
        mostrar: true,
        mensaje: 'Por favor, complete todos los campos.',
        success: false
      });
    } else {

      onAgregarColaborador(formData, busquedaActual);
      setAlertData({
        mostrar: true,
        mensaje: 'Registro de colaborador exitoso.',
        success: true
      });
      setFormData({
        nombre: '',
        correo: '',
        edad: '',
        cargo: '',
        telefono: ''
      });
    }
  };

  return (
    <div>
      {alertData.mostrar && <AlertComponent success={alertData.success} mensaje={alertData.mensaje} />}
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
