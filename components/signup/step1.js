import {
    Button,
    Form,
    Row,
    Col
  } from "reactstrap";
import ActionButtons from '../action-buttons/action-buttons'

export default function Step1() {
    return (
        <Form>
            <Row>
            <h3>Agregá tus mascotas</h3>
            </Row>
          
            <ActionButtons showPrev={false} />

          
        </Form>
    )
}