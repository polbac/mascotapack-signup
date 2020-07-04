import {
    Row,
    Form,
    Button,
    Col
  } from "reactstrap";

import ActionButtons from '../action-buttons/action-buttons'
import { useDeliveryInformation, useStepNumber } from '../../hooks/signupStateForm'

export default function Step4() {
    const { delivery, setDelivery, validate } = useDeliveryInformation()
    const { prev } = useStepNumber()
    
    return (
        <Form>
            <Row>
                <Col>
                <p class="subtitle text-secondary">PAGO</p>
                    <h2>Ya casi estamos!</h2>
                    </Col>                    
            </Row>
            
            <div className="box-step box-payment-step no-border box-step-2">
                <div className="text-block">
                    <p>Te redireccionaremos a <b>MercadoPago</b> para que puedas realizar el pago de tu pack y luego volveras al sitio</p>
                    <Button color="primary" type="button" >
                        Ir a Mercado Pago
                    </Button>
                </div>

            </div>

            <ActionButtons showPrev={true} prevAction={prev} nextDisabled={true} />
        </Form>
        
    )
}