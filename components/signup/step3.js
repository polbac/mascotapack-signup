import {
  Row,
  FormGroup,
  Form,
  Input,
  Col,
} from 'reactstrap';
import { useCallback } from 'react';
import Alert from '../alert/alert';
import ActionButtons from '../action-buttons/action-buttons';
import { usePersonalInformation, useStepNumber } from '../../hooks/signup';

export default function Step3() {
  const { person, setPerson, validate } = usePersonalInformation();
  const { prev } = useStepNumber();
  const changePerson = (newPerson) => setPerson(newPerson);

  return (
    <Form>
      <Row>
        <Col>
          <p className="subtitle text-secondary">¡CONOZCÁMONOS!</p>
          <h2>Tus datos personales</h2>
        </Col>
      </Row>

      <div className="box-step no-border box-step-2">
        {person.hasErrors() && !person.isValid() && (
          <Alert>Ups! Parece que hay errores</Alert>
        )}
        <Row className="text-block">
          <Col>
            <FormGroup className={`form-control-alternative ${person.getErrors().name ? 'has-danger' : ''}`}>

              <label className="h5">¿Cómo te llamas?</label>
              <Input
                id="name"
                key="name"
                placeholder="Tu nombre y apellido"
                type="text"
                defaultValue={person.getName()}
                onChange={(e) => changePerson(person.setName(e.currentTarget.value))}
              />
            </FormGroup>
          </Col>
        </Row>

        <Row className="text-block">
          <Col>
            <FormGroup className={`form-control-alternative ${person.getErrors().email ? 'has-danger' : ''}`}>

              <label className="h5">Dirección de correo electrónico</label>
              <Input
                id="email"
                key="email"
                placeholder="tu@email.com"
                type="text"
                defaultValue={person.getEmail()}
                onChange={(e) => changePerson(person.setEmail(e.currentTarget.value))}
              />
            </FormGroup>
          </Col>
        </Row>

        <Row className="text-block">
          <Col>
            <FormGroup className={`form-control-alternative ${person.getErrors().phone ? 'has-danger' : ''}`}>

              <label className="h5">Celular</label>
              <Input
                error
                id="phone"
                key="phone"
                placeholder="11-XXXX-XXXX"
                type="text"
                defaultValue={person.getPhone()}
                onChange={(e) => changePerson(person.setPhone(e.currentTarget.value))}
              />
            </FormGroup>
          </Col>
        </Row>
      </div>

      <ActionButtons showPrev prevAction={prev} nextActive={person.isFullfilled()} nextAction={validate} />

    </Form>
  );
}
