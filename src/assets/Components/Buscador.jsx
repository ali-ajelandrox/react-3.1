    
import React from 'react';
import { InputGroup, Form } from 'react-bootstrap';

function Buscador() {
  return (
    <>
      <div className="col-md-4"> {/* Añadido para reducir a la mitad */}
        <InputGroup className="mb-2">
          <InputGroup.Text id="inputGroup-sizing-default">
            Buscar
          </InputGroup.Text>
          <Form.Control
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
        </InputGroup>
      </div>
    </>
  );
}

export default Buscador;
