import {
    Button,
    Form,
    Row
  } from "reactstrap";
import ActionButtons from '../action-buttons/action-buttons'
import PetInput from '../pet-input/pet-input'
import { usePets } from '../../hooks/signupStateForm'

export default function Step1() {
    const { addPet, petUUIDs } = usePets()
    return (
        <Form>
            <Row>
            <h3>Agregá tus mascotas</h3>
            </Row>
            
            <div className="text-center">

                {petUUIDs.map((uuid) => <PetInput uuid={uuid} />)}

                <Button onClick={addPet} className="btn-icon btn-3 " size="sm" outline color="primary" type="button">
                    <span className="btn-inner--icon">
                        <i className="ni ni-fat-add" />
                    </span>
                    <span className="btn-inner--text">Agregar Otra</span>
                </Button>
            </div>

          
            <ActionButtons showPrev={false} nextActive={false} />

          
        </Form>
    )
}