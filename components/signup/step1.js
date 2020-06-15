import {
    Button,
    Form,
    Row
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
            <div class='start-now'>
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
            <h3>Agregá tus mascotas</h3>
            </Row>
            
            <div className="text-center">
                {content}
            </div>

          
            <ActionButtons showPrev={false} nextActive={arAllFullfilled()} nextAction={validate} />

          
        </Form>
    )
}