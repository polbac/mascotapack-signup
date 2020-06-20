import {
    Row,
    Form,
    Button
  } from "reactstrap";

import ActionButtons from '../action-buttons/action-buttons'
import { useDeliveryInformation, useStepNumber } from '../../hooks/signupStateForm'

export default function Step4() {
    const { delivery, setDelivery, validate } = useDeliveryInformation()
    const { prev } = useStepNumber()
    
    return (
        <Form>
            <Row>
            <h3>Pago!</h3>
            </Row>
            
            <div className="text-center box-step box-step-2">
            
            <p>Te redireccionaremos a <b>MercadoPago</b><br/>para que puedas realizar el pago de tu pack</p>
            <Button color="primary" type="button" >
                Continuar
            </Button>

            </div>

            <ActionButtons showPrev={true} prevAction={prev} nextDisabled={true} />
        </Form>
        
    )
}