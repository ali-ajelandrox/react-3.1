import React, { useState } from 'react';
import { Container, Row, Col, Alert } from 'react-bootstrap';
import Buscador from './assets/Components/Buscador';
import Listado from './assets/Components/Listado';
import Formulario from './assets/Components/Formulario';
import { BaseColaboradores } from './assets/db/BaseColaboradores';

function App() {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  const [terminoBusqueda, setTerminoBusqueda] = useState('');
  const [alertData, setAlertData] = useState({
    mostrar: false,
    mensaje: '',
    success: false
  });

  const handleBuscar = (busqueda) => {
    setTerminoBusqueda(busqueda);
  };

  const agregarColaborador = (nuevoColaborador) => {
    if (!nuevoColaborador.nombre || !nuevoColaborador.correo || !nuevoColaborador.edad || !nuevoColaborador.cargo || !nuevoColaborador.telefono) {
      setAlertData({
        mostrar: true,
        mensaje: 'Todos los campos son obligatorios.',
        success: false
      });
      return;
    }

    setColaboradores([...colaboradores, nuevoColaborador]);
    setAlertData({
      mostrar: true,
      mensaje: 'Registro de colaborador exitoso.',
      success: true
    });
  };

  return (
    <Container fluid>
      <Row>
        <Col md={9}>
          <Row>
            <Col>
              <Buscador onBuscar={handleBuscar} />
            </Col>
          </Row>
          <Row>
            <Col>
              <Listado colaboradores={colaboradores} terminoBusqueda={terminoBusqueda} />
            </Col>
          </Row>
        </Col>

        <Col md={3}>
          <Formulario onAgregarColaborador={agregarColaborador} />
          {alertData.mostrar && 
            <Alert variant={alertData.success ? 'success' : 'danger'}>
              {alertData.mensaje}
            </Alert>
          }
        </Col>
      </Row>
    </Container>
  );
}

export default App;
