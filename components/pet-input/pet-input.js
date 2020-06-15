import { Input, FormGroup } from "reactstrap"
import { usePets } from '../../hooks/signupStateForm'
import { Formik } from 'formik'
import Pet from "../../schema/Pet"


function PetInput({ uuid }) {
    const { getPetByUUID, savePets } = usePets()
    const pet = getPetByUUID(uuid)

    return (
        <div className='pet-input'>
            <FormGroup className='form-control-alternative'>
                <Input
                    error
                    id="name"
                    key="name"
                    placeholder="Nombre"
                    type="text"
                    defaultValue={pet.getName()}
                    onChange={e => savePets(pet.setName(e.currentTarget.value))}
                />
            </FormGroup>
        </div>
    )
}

export default PetInput;