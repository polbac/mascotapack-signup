import {
    Button,
    Form,
    Row,
    Col
  } from "reactstrap";
import ActionButtons from '../action-buttons/action-buttons'
import PetInput from '../pet-input/pet-input'
import { usePets } from '../../hooks/signupStateForm'

export default function Step1() {
    const { addPet, petUUIDs, arAllFullfilled, validate } = usePets()
    let content;
    
    if (petUUIDs.length > 0) {
        content = (
            <>
                {petUUIDs.map((uuid) => <PetInput uuid={uuid} />)}
                <div className='add-other'>
                    <Button onClick={addPet} className="btn-icon btn-3 " size="sm" outline color="primary" type="button">
                        <span className="btn-inner--icon">
                            <i className="ni ni-fat-add" />
                        </span>
                        <span className="btn-inner--text">Agregar Otra</span>
                    </Button>
                </div>
            </>
        )
    } else {
        content = (
            <div class='start-now' style={{ backgroundImage: ` url(/start_${Math.ceil(Math.random() * 2)}.jpg)`}}>
                <Button onClick={addPet} className="btn-icon btn-3 " size="md" color="primary" type="button">
                    <span className="btn-inner--icon">
                        <i className="ni ni-fat-add" />
                    </span>
                    <span className="btn-inner--text">Comenzar a cargar mascotas!</span>
                </Button>
            </div>
        )  
    }

    return (
        <Form>
            <Row>
                <Col>
                <p className="subtitle text-secondary">Comencemos por lo más importante</p>
                <h2>Agregá tus mascotas</h2>
                </Col>
            </Row>
            
            <div className="text-center">
                {content}
            </div>

          
            {petUUIDs.length > 0 && <ActionButtons showPrev={false} nextActive={arAllFullfilled()} nextAction={validate} />}

          
        </Form>
    )
}