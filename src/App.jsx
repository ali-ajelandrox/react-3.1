import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Buscador from './assets/Components/Buscador';
import Listado from './assets/Components/Listado';
import Formulario from './assets/Components/Formulario';
import { BaseColaboradores } from './assets/db/BaseColaboradores';

function App() {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);

  const agregarColaborador = (nuevoColaborador) => {
    setColaboradores([...colaboradores, nuevoColaborador]);
  };

  return (
    <Container fluid>
      <Row>
        <Col md={9}>
          <Row>
            <Col>
              <Buscador />
            </Col>
          </Row>
          <Row>
            <Col>
              <Listado colaboradores={colaboradores} />
            </Col>
          </Row>
        </Col>

        <Col md={3}>
          <Formulario onAgregarColaborador={agregarColaborador} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;