import {
    Row,
    FormGroup,
    Form,
    Input,
    Col,
    Dropdown, DropdownToggle, DropdownMenu, DropdownItem
  } from "reactstrap";
import Alert from '../alert/alert'
import ActionButtons from '../action-buttons/action-buttons'
import { useDeliveryInformation, useStepNumber } from '../../hooks/signupStateForm'
import { useState } from 'react'
import { neighbourhoods } from '../../schema/Neighbourhoods'

export default function Step4() {
    const { delivery, setDelivery, validate } = useDeliveryInformation()
    const { prev } = useStepNumber()
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);
    const changeDelivery = (newDelivery) => setDelivery(newDelivery)
    
    return (
        <Form>
            <Row>
            <h3>Envío!</h3>
            </Row>
            
            <div className="text-center box-step box-step-2">
            {delivery.hasErrors() && !delivery.isValid() && (
                <Alert>Ups! Parece que hay errores</Alert>
            )}
            <p>Ingresá dónde querés que lo enviemos:</p>

            <p className='delivery-only'>ATENCIÓN! POR EL MOMENTO SÓLO ENVÍO EN CAPITAL FEDERAL</p>
                <FormGroup className={`form-control-alternative ${delivery.getErrors().street ? 'has-danger' : ''}`} >
                    <Row>
                        <Col>
                            <Input
                                id="street"
                                key="street"
                                placeholder="Calle"
                                type="text"
                                defaultValue={delivery.getValue('street')}
                                onChange={e => changeDelivery(delivery.setValue('street', e.currentTarget.value))}
                            />
                        </Col>
                    </Row>
                    
                    
                </FormGroup>

                    <Row>
                        <Col>
                            <FormGroup className={`form-control-alternative ${delivery.getErrors().floor ? 'has-danger' : ''}`} >
                                <Input
                                    id="floor"
                                    key="floor"
                                    placeholder="Piso"
                                    type="text"
                                    defaultValue={delivery.getValue('floor')}
                                    onChange={e => changeDelivery(delivery.setValue('floor', e.currentTarget.value))}
                                />
                            </FormGroup>    
                        </Col>
                        <Col>
                            <FormGroup className={`form-control-alternative ${delivery.getErrors().number ? 'has-danger' : ''}`} >
                                <Input
                                    id="number"
                                    key="number"
                                    placeholder="Número"
                                    type="text"
                                    defaultValue={delivery.getValue('number')}
                                    onChange={e => changeDelivery(delivery.setValue('number', e.currentTarget.value))}
                                />
                            </FormGroup>
                        </Col>
                        <Col>
                                <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                                    <DropdownToggle caret>
                                        {delivery.getValue('neighbourhood') || 'Barrio'}
                                        </DropdownToggle>
                                        <DropdownMenu
                                         modifiers={{
                                            setMaxHeight: {
                                              enabled: true,
                                              order: 890,
                                              fn: (data) => {
                                                return {
                                                  ...data,
                                                  styles: {
                                                    ...data.styles,
                                                    overflow: 'auto',
                                                    maxHeight: 200,
                                                  },
                                                };
                                              }}}}>
                                           {neighbourhoods.map(n => (
                                               <DropdownItem 
                                                active={delivery.getValue('neighbourhood') === n.name}
                                                onClick={e => changeDelivery(delivery.setValue('neighbourhood', n.name))}
                                                >{n.name}</DropdownItem>
                                           ))} 
                                            
                                        </DropdownMenu>
                                </Dropdown>
                        </Col>
                    </Row>


                    <FormGroup className={`form-control-alternative`} >
                        <Row>
                            <Col>
                                <Input
                                    id="street"
                                    key="street"
                                    placeholder="Información adicional"
                                    type="textarea"
                                    defaultValue={delivery.getValue('extra')}
                                    onChange={e => changeDelivery(delivery.setValue('extra', e.currentTarget.value))}
                                />
                            </Col>
                        </Row>
                        
                        
                    </FormGroup>
                    
                    
                

            </div>

          
            <ActionButtons showPrev={true} prevAction={prev} nextActive={delivery.isFullfilled()} nextAction={validate} />

          
        </Form>
    )
}