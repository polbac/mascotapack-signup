import {
    Row,
    FormGroup,
    Form,
    Input
  } from "reactstrap";
import Alert from '../alert/alert'
import ActionButtons from '../action-buttons/action-buttons'
import { usePersonalInformation, useStepNumber } from '../../hooks/signupStateForm'
import { useCallback } from "react"


export default function Step3() {
    const { person, setPerson, validate } = usePersonalInformation()
    const { prev } = useStepNumber()
    const changePerson = (newPerson) => setPerson(newPerson)
    
    return (
        <Form>
            <Row>
            <h3>¡Conozcámonos!</h3>
            </Row>
            
            <div className="text-center box-step box-step-2">
            {person.hasErrors() && !person.isValid() && (
                <Alert>Ups! Parece que hay errores</Alert>
            )}
            <p>Pasanos tus datos para que podamos contactarnos:</p>
                <FormGroup className={`form-control-alternative ${person.getErrors().name ? 'has-danger' : ''}`} >
                    <Row>
                        <Input
                            id="name"
                            key="name"
                            placeholder="Tu nombre y apellido"
                            type="text"
                            defaultValue={person.getName()}
                            onChange={e => changePerson(person.setName(e.currentTarget.value))}
                        />
                    </Row>
                    
                    
                </FormGroup>

                <FormGroup className={`form-control-alternative ${person.getErrors().email ? 'has-danger' : ''}`} >
                    <Row>
                        <Input
                            id="email"
                            key="email"
                            placeholder="Tu email"
                            type="text"
                            defaultValue={person.getEmail()}
                            onChange={e => changePerson(person.setEmail(e.currentTarget.value))}
                        />
                    </Row>
                </FormGroup>

                <FormGroup className={`form-control-alternative ${person.getErrors().phone ? 'has-danger' : ''}`} >
                    <Row>
                        <Input
                            error
                            id="phone"
                            key="phone"
                            placeholder="Tu celular"
                            type="text"
                            defaultValue={person.getPhone()}
                            onChange={e => changePerson(person.setPhone(e.currentTarget.value))}
                        />
                    </Row>
                </FormGroup>
            </div>

          
            <ActionButtons showPrev={true} prevAction={prev} nextActive={person.isFullfilled()} nextAction={validate} />

          
        </Form>
    )
}