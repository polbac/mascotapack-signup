import {
    Row,
    Col,
    Button,
    FormGroup,
    Form,
    Input
  } from "reactstrap";
import ActionButtons from '../action-buttons/action-buttons'
import { usePersonalInformation, useStepNumber } from '../../hooks/signupStateForm'

export default function Step2() {
    const { person, setPerson, validate } = usePersonalInformation()
    const { prev } = useStepNumber()
    
    return (
        <Form>
            <Row>
            <h3>¡Conozcámonos!</h3>
            </Row>

            
            
            <div className="text-center box-step box-step-2">
            <p>Pasanos tus datos para que podamos contactarnos:</p>
                <FormGroup className={`form-control-alternative ${person.getErrors().name ? 'has-danger' : ''}`} >
                    <Row>
                        <Input
                            id="name"
                            key="name"
                            placeholder="Tu nombre y apellido"
                            type="text"
                            defaultValue={person.getName()}
                            onChange={e => setPerson(person.setName(e.currentTarget.value))}
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
                            onChange={e => setPerson(person.setEmail(e.currentTarget.value))}
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
                            onChange={e => setPerson(person.setPhone(e.currentTarget.value))}
                        />
                    </Row>
                </FormGroup>
            </div>

          
            <ActionButtons showPrev={true} prevAction={prev} nextActive={person.areAllFullfilled()} nextAction={validate} />

          
        </Form>
    )
}