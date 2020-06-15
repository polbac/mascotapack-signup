import { Col, Input, FormGroup, Row, Button, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap"
import { usePets } from '../../hooks/signupStateForm'
import { PetType, PetSize, PetAge, HealthProblems } from "../../schema/Pet"


function PetInput({ uuid }) {
    const { getPetByUUID, savePets, removePet } = usePets()
    const pet = getPetByUUID(uuid)

    return (
        <div className='pet-input'>
            
            <div class='text-center'>  
                
                <div onClick={e => savePets(pet.setType(PetType.DOG))} className={`pet-selector ${pet.getType() === PetType.DOG ? 'active' : 'semi-transparent'}`}>
                    <img className='pet-icon' src="icon-dog.svg" alt=""/><br/>perro
                </div>
                <div onClick={e => savePets(pet.setType(PetType.CAT))} className={`pet-selector ${pet.getType() === PetType.CAT ? 'active' : 'semi-transparent'}`}>
                    <img className='pet-icon' src="icon-cat.svg" alt=""/><br/>gato
                </div>
            </div>

            <FormGroup className={`form-control-alternative ${pet.getErrors().name ? 'has-danger' : ''}`} >
                <Row>
                    <Input
                        error
                        id="name"
                        key="name"
                        placeholder="Nombre de tu mascota"
                        type="text"
                        defaultValue={pet.getName()}
                        onChange={e => savePets(pet.setName(e.currentTarget.value))}
                    />
                </Row>
            </FormGroup>


            {pet.getType() === PetType.DOG && (<Row>
                <Col>
                    <label>¿Qué tamaño tiene?</label>

                    <Button color="primary" outline={!pet.isSize(PetSize.BIG)} type="button" size="sm" onClick={() => savePets(pet.setSize(PetSize.BIG))}>
                        Grande
                    </Button>

                    <Button color="primary" outline={!pet.isSize(PetSize.MEDIUM)} type="button" size="sm" onClick={() => savePets(pet.setSize(PetSize.MEDIUM))}>
                        Mediano
                    </Button>

                    <Button color="primary" outline={!pet.isSize(PetSize.SMALL)} type="button" size="sm" onClick={() => savePets(pet.setSize(PetSize.SMALL))}>
                        Pequeño
                    </Button>

                    <Button color="primary" outline={!pet.isSize(PetSize.TOY)} type="button" size="sm" onClick={() => savePets(pet.setSize(PetSize.TOY))}>
                        Toy
                    </Button>
                    
                </Col>
            </Row>)}

            <Row>
                <Col>
                    <label>¿Qué edad tiene?</label>

                    <Button color="primary" outline={!pet.isAge(PetAge.PUPPY)} type="button" size="sm" onClick={() => savePets(pet.setAge(PetAge.PUPPY))}>
                        Cachorro
                    </Button>

                    <Button color="primary" outline={!pet.isAge(PetAge.ADULT)} type="button" size="sm" onClick={() => savePets(pet.setAge(PetAge.ADULT))}>
                        Adulto
                    </Button>

                    <Button color="primary" outline={!pet.isAge(PetAge.SENIOR)} type="button" size="sm" onClick={() => savePets(pet.setAge(PetAge.SENIOR))}>
                        Senior
                    </Button>

                    
                </Col>
            </Row>

            <Row>
                <Col>
                    <label>¿Tiene problemas de obesidad?</label>

                    <Button color="primary" outline={!pet.hasHealthProblem(HealthProblems.OBESITY)} type="button" size="sm" onClick={() => savePets(pet.addHelathProblem(HealthProblems.OBESITY))}>
                        Si
                    </Button>

                    <Button color="primary" outline={pet.hasHealthProblem(HealthProblems.OBESITY)} type="button" size="sm" onClick={() => savePets(pet.removeHealthProblem(HealthProblems.OBESITY))}>
                        No
                    </Button>
                    
                </Col>
            </Row>

            <Row>
                <Col>
                    <label>¿Tiene problemas de alergía?</label>

                    <Button color="primary" outline={!pet.hasHealthProblem(HealthProblems.ALLERGY)} type="button" size="sm" onClick={() => savePets(pet.addHelathProblem(HealthProblems.ALLERGY))}>
                        Si
                    </Button>

                    <Button color="primary" outline={pet.hasHealthProblem(HealthProblems.ALLERGY)} type="button" size="sm" onClick={() => savePets(pet.removeHealthProblem(HealthProblems.ALLERGY))}>
                        No
                    </Button>
                    
                </Col>
            </Row>

            <Row>
                <Col>
                    <label>¿Tiene problemas urinarios?</label>

                    <Button color="primary" outline={!pet.hasHealthProblem(HealthProblems.URINARY)} type="button" size="sm" onClick={() => savePets(pet.addHelathProblem(HealthProblems.URINARY))}>
                        Si
                    </Button>

                    <Button color="primary" outline={pet.hasHealthProblem(HealthProblems.URINARY)} type="button" size="sm" onClick={() => savePets(pet.removeHealthProblem(HealthProblems.URINARY))}>
                        No
                    </Button>
                    
                </Col>
            </Row>


            

            <div className="text-right">
                <Button onClick={() => removePet(uuid)} className="btn-icon btn-3 " size="sm" outline color="secondary" type="button">
                    <span className="btn-inner--icon">
                        <i className="ni ni-fat-add" />
                    </span>
                    <span className="btn-inner--text">Eliminar</span>
                </Button>
            </div>
            
        </div>
    )
}

export default PetInput;