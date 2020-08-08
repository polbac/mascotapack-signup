import {
  Row,
  Form,
  Button,
  Col,
} from 'reactstrap';

import ActionButtons from '../action-buttons/action-buttons';
import { useStepNumber, useOrder } from '../../hooks/signup';

export default function Step4() {
  const { prev } = useStepNumber();
  const {
    loading,
    error,
    order,
  } = useOrder();

  return (
    <Form>
      <Row>
        <Col>
          <p className="subtitle text-secondary">PAGO</p>
          <h2>Ya casi estamos!</h2>
        </Col>
      </Row>

      <div className="box-step box-payment-step no-border box-step-2">
        <div className="text-block">
          <p>
            Te redireccionaremos a
            {' '}
            <b>MercadoPago</b>
            {' '}
            para que puedas realizar el pago de tu pack y luego volveras al sitio
          </p>
          {order && (
          <>
            <Button color="primary" type="button">
              <a href={order.url}>Ir a Mercado Pago</a>
            </Button>
            Usar estas tarjetas: https://www.mercadopago.com.ar/developers/es/guides/payments/api/testing/
          </>
          )}
        </div>

      </div>

      <ActionButtons showPrev prevAction={prev} nextDisabled />
    </Form>

  );
}
