import {
  Col, Input, FormGroup, Row, Button, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem,
} from 'reactstrap';
import { usePets } from '../../hooks/signup';
import {
  PetType, PetSize, PetAge, HealthProblems, Sex, Bit,
} from '../../schema/Pet';

function PetInput({ uuid }) {
  const { getPetByUUID, savePets, removePet } = usePets();
  const pet = getPetByUUID(uuid);

  return (
    <div className="box-step">

      <Row className="text-block">

        <Col>
          <label className="h5">¿Qué tipo de mascota es?</label>
          <br />
          <Button color="primary" outline={pet.getType() !== PetType.DOG} type="button" size="sm" onClick={() => savePets(pet.setType(PetType.DOG))}>
            Ladra
          </Button>

          <Button color="primary" outline={pet.getType() !== PetType.CAT} type="button" size="sm" onClick={() => savePets(pet.setType(PetType.CAT))}>
            Maulla
          </Button>
        </Col>
      </Row>

      <Row className="text-block">

        <Col>
          <label className="h5">¿Es macho o hembra?</label>
          <br />
          <Button color="primary" outline={pet.getSex() !== Sex.MALE} type="button" size="sm" onClick={() => savePets(pet.setSex(PetType.MALE))}>
            Macho
          </Button>

          <Button color="primary" outline={pet.getSex() !== Sex.FEMALE} type="button" size="sm" onClick={() => savePets(pet.setSex(PetType.FEMALE))}>
            Hembra
          </Button>
        </Col>
      </Row>

      <Row className="text-block">
        <Col>
          <label className="h5">¿Cómo se llama?</label>
          <Input
            error
            id="name"
            key="name"
            placeholder="Nombre de tu mascota"
            type="text"
            defaultValue={pet.getName()}
            onChange={(e) => savePets(pet.setName(e.currentTarget.value))}
          />
        </Col>
      </Row>

      {pet.getType() === PetType.DOG && (
      <Row className="text-block">
        <Col>
          <label className="h5">¿Qué tamaño tiene?</label>
          <br />
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
      </Row>
      )}

      {pet.getType() === PetType.DOG && (
      <Row className="text-block">
        <Col>
          <label className="h5">¿Qué mordida tiene?</label>
          <br />
          <Button color="primary" outline={!(pet.getBit() === Bit.BIG)} type="button" size="sm" onClick={() => savePets(pet.setBit(Bit.BIG))}>
            Grande
          </Button>

          <Button color="primary" outline={!(pet.getBit() === Bit.SMALL)} type="button" size="sm" onClick={() => savePets(pet.setBit(Bit.SMALL))}>
            Chica
          </Button>

        </Col>
      </Row>
      )}

      <Row className="text-block">
        <Col>
          <label className="h5">¿Qué edad tiene?</label>
          <br />
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

      <Row className="text-block">
        <Col>
          <label className="h5">¿Tiene problemas de obesidad?</label>
          <br />
          <Button color="primary" outline={!pet.hasHealthProblem(HealthProblems.OBESITY)} type="button" size="sm" onClick={() => savePets(pet.addHelathProblem(HealthProblems.OBESITY))}>
            Si
          </Button>

          <Button color="primary" outline={pet.hasHealthProblem(HealthProblems.OBESITY)} type="button" size="sm" onClick={() => savePets(pet.removeHealthProblem(HealthProblems.OBESITY))}>
            No
          </Button>

        </Col>
      </Row>

      <Row className="text-block">
        <Col>
          <label className="h5">¿Tiene problemas de alergía?</label>
          <br />
          <Button color="primary" outline={!pet.hasHealthProblem(HealthProblems.ALLERGY)} type="button" size="sm" onClick={() => savePets(pet.addHelathProblem(HealthProblems.ALLERGY))}>
            Si
          </Button>

          <Button color="primary" outline={pet.hasHealthProblem(HealthProblems.ALLERGY)} type="button" size="sm" onClick={() => savePets(pet.removeHealthProblem(HealthProblems.ALLERGY))}>
            No
          </Button>

        </Col>
      </Row>

      <Row className="text-block">
        <Col>
          <label className="h5">¿Tiene problemas urinarios?</label>
          <br />
          <Button color="primary" outline={!pet.hasHealthProblem(HealthProblems.URINARY)} type="button" size="sm" onClick={() => savePets(pet.addHelathProblem(HealthProblems.URINARY))}>
            Si
          </Button>

          <Button color="primary" outline={pet.hasHealthProblem(HealthProblems.URINARY)} type="button" size="sm" onClick={() => savePets(pet.removeHealthProblem(HealthProblems.URINARY))}>
            No
          </Button>

        </Col>
      </Row>

      <Row className="text-block">
        <Col>
          <label className="h5">¿Tiene problemas gastrointestinales?</label>
          <br />
          <Button color="primary" outline={!pet.hasHealthProblem(HealthProblems.GASTRO)} type="button" size="sm" onClick={() => savePets(pet.addHelathProblem(HealthProblems.GASTRO))}>
            Si
          </Button>

          <Button color="primary" outline={pet.hasHealthProblem(HealthProblems.GASTRO)} type="button" size="sm" onClick={() => savePets(pet.removeHealthProblem(HealthProblems.GASTRO))}>
            No
          </Button>

        </Col>
      </Row>

      <Row className="text-block">
        <Col>
          <label className="h5">¿Tiene problemas renales?</label>
          <br />
          <Button color="primary" outline={!pet.hasHealthProblem(HealthProblems.RENAL)} type="button" size="sm" onClick={() => savePets(pet.addHelathProblem(HealthProblems.RENAL))}>
            Si
          </Button>

          <Button color="primary" outline={pet.hasHealthProblem(HealthProblems.RENAL)} type="button" size="sm" onClick={() => savePets(pet.removeHealthProblem(HealthProblems.RENAL))}>
            No
          </Button>

        </Col>
      </Row>

      <Row className="text-block">
        <Col>
          <label className="h5">¿Está esterelizado?</label>
          <br />
          <Button color="primary" outline={!pet.hasHealthProblem(HealthProblems.STERIL)} type="button" size="sm" onClick={() => savePets(pet.addHelathProblem(HealthProblems.STERIL))}>
            Si
          </Button>

          <Button color="primary" outline={pet.hasHealthProblem(HealthProblems.STERIL)} type="button" size="sm" onClick={() => savePets(pet.removeHealthProblem(HealthProblems.STERIL))}>
            No
          </Button>

        </Col>
      </Row>

      <div className="text-left">
        <br />
        <Button onClick={() => removePet(uuid)} className="btn-icon btn-3 delete" size="sm" outline color="secondary" type="button">
          <span className="btn-inner--icon">
            <i className="ni ni-fat-add" />
          </span>
          <span className="btn-inner--text">Eliminar</span>
        </Button>
      </div>

    </div>
  );
}

export default PetInput;
