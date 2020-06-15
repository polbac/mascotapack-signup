import {
    Button,
    Form,
    Row
  } from "reactstrap";
import ActionButtons from '../action-buttons/action-buttons'
import { usePersonalInformation, useStepNumber } from '../../hooks/signupStateForm'

export default function Step2() {
    const { arAllFullfilled, validate, name, setName, email, setEmail } = usePersonalInformation()
    const { prev } = useStepNumber()
    
    return (
        <Form>
            <Row>
            <h3>¡Conozcámonos!</h3>
            </Row>
            
            <div className="text-center">
                <FormGroup className={`form-control-alternative ${pet.getErrors().name ? 'has-danger' : ''}`} >
                    <Row>
                        <Input
                            error
                            id="name"
                            key="name"
                            placeholder="Tu nombre y apellido"
                            type="text"
                            defaultValue={name}
                            onChange={e => {}}
                        />
                    </Row>
                </FormGroup>
            </div>

          
            <ActionButtons showPrev={true} prevAction={prev} nextActive={arAllFullfilled()} nextAction={validate} />

          
        </Form>
    )
}