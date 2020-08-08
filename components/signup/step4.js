import {
  Row,
  FormGroup,
  Form,
  Input,
  Col,
  Dropdown, DropdownToggle, DropdownMenu, DropdownItem,
} from 'reactstrap';
import { useState } from 'react';
import Alert from '../alert/alert';
import ActionButtons from '../action-buttons/action-buttons';
import { useDeliveryInformation, useStepNumber } from '../../hooks/signup';
import { neighbourhoods } from '../../schema/Neighbourhoods';

export default function Step4() {
  const { delivery, setDelivery, validate } = useDeliveryInformation();
  const { prev } = useStepNumber();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const changeDelivery = (newDelivery) => setDelivery(newDelivery);

  return (
    <Form>
      <Row>
        <Col>
          <p className="subtitle text-secondary">DIRECCIÓN DE ENVÍO</p>
          <h2>¿Dónde querés que lo enviemos?</h2>
        </Col>
      </Row>

      <div className="box-step no-border box-step-2">
        {delivery.hasErrors() && !delivery.isValid() && (
          <Alert>Ups! Parece que hay errores</Alert>
        )}

        <p className="delivery-only">ATENCIÓN! POR EL MOMENTO SÓLO ENVÍO EN CAPITAL FEDERAL</p>
        <Row className="text-block">
          <Col>
            <FormGroup className={`form-control-alternative ${delivery.getErrors().street ? 'has-danger' : ''}`}>

              <label className="h5">Calle:</label>
              <Input
                id="street"
                key="street"
                placeholder="Calle"
                type="text"
                defaultValue={delivery.getValue('street')}
                onChange={(e) => changeDelivery(delivery.setValue('street', e.currentTarget.value))}
              />

            </FormGroup>
          </Col>
        </Row>

        <Row className="text-block">
          <Col>
            <FormGroup className={`form-control-alternative ${delivery.getErrors().floor ? 'has-danger' : ''}`}>
              <label className="h5">Piso:</label>
              <Input
                id="floor"
                key="floor"
                placeholder="Piso"
                type="text"
                defaultValue={delivery.getValue('floor')}
                onChange={(e) => changeDelivery(delivery.setValue('floor', e.currentTarget.value))}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup className={`form-control-alternative ${delivery.getErrors().number ? 'has-danger' : ''}`}>
              <label className="h5">Número:</label>
              <Input
                id="number"
                key="number"
                placeholder="Número"
                type="text"
                defaultValue={delivery.getValue('number')}
                onChange={(e) => changeDelivery(delivery.setValue('number', e.currentTarget.value))}
              />
            </FormGroup>
          </Col>
          <Col>
            <label className="h5">Barrio:</label>
            <Dropdown isOpen={dropdownOpen} toggle={toggle}>
              <DropdownToggle caret>
                {delivery.getValue('neighbourhood') || 'Barrio'}
              </DropdownToggle>
              <DropdownMenu
                modifiers={{
                  setMaxHeight: {
                    enabled: true,
                    order: 890,
                    fn: (data) => ({
                      ...data,
                      styles: {
                        ...data.styles,
                        overflow: 'auto',
                        maxHeight: 200,
                      },
                    }),
                  },
                }}
              >
                {neighbourhoods.map((n) => (
                  <DropdownItem
                    active={delivery.getValue('neighbourhood') === n.name}
                    onClick={(e) => changeDelivery(delivery.setValue('neighbourhood', n.name))}
                  >
                    {n.name}

                  </DropdownItem>
                ))}

              </DropdownMenu>
            </Dropdown>
          </Col>
        </Row>

        <Row className="text-block">
          <FormGroup className="form-control-alternative">
            <Row>
              <Col>
                <label className="h5">Algo que quieras que tomemos en cuenta</label>
                <Input
                  id="street"
                  key="street"
                  placeholder="Información adicional"
                  type="textarea"
                  defaultValue={delivery.getValue('extra')}
                  onChange={(e) => changeDelivery(delivery.setValue('extra', e.currentTarget.value))}
                />
              </Col>
            </Row>

          </FormGroup>
        </Row>

      </div>

      <ActionButtons showPrev prevAction={prev} nextActive={delivery.isFullfilled()} nextAction={validate} />

    </Form>
  );
}
