import {
  useContext, useEffect, useState, useCallback,
} from 'react';
import { v4 as uuidv4 } from 'uuid';
import { produce } from 'immer';
import SignupState from '../context/SignupState';
import { useScroll } from './scroll';
import Pet from '../schema/Pet';

function getUniqueId() {
  return uuidv4();
}

export function useStepNumber() {
  const { stepNumber, setStepNumber } = useContext(SignupState);
  const { setScroll } = useScroll();

  const next = () => {
    setScroll(0);
    setStepNumber(stepNumber + 1);
  };

  const prev = () => {
    setScroll(0);
    setStepNumber(stepNumber - 1);
  };

  return { stepNumber, next, prev };
}

export function usePets() {
  const {
    pets, petUUIDs, setPetUUIDs, setPets,
  } = useContext(SignupState);
  const { next } = useStepNumber();

  const addPet = () => {
    const uuid = getUniqueId();
    const newPet = new Pet(uuid);
    setPetUUIDs((currentPetUUIDs) => produce(currentPetUUIDs, (v) => {
      v.push(uuid);
    }));
    setPets((currentPets) => produce(currentPets, (v) => ({
      ...pets,
      [uuid]: newPet,
    })));
  };

  const savePets = (newPet) => {
    setPets((currentPets) => produce(currentPets, (v) => ({
      ...pets,
      [newPet.getUUID()]: newPet,
    })));
  };

  const getPetByUUID = (uuid) => pets[uuid] || new Pet(uuid);

  const removePet = (uuid) => {
    setPetUUIDs((currentPetUUIDs) => produce(currentPetUUIDs, (v) => v.filter((_uuid) => _uuid !== uuid)));
    setPets((currentPets) => produce(currentPets, (v) => {
      delete v[uuid];
    }));
  };

  const arAllFullfilled = () => Object.keys(pets).reduce((acc, uuid) => {
    const p = pets[uuid];
    return p.isFullfilled() && acc;
  }, true) && Object.keys(pets).length !== 0;

  const validate = () => {
    petUUIDs.forEach((uuid) => pets[uuid].validate());

    if (arAllFullfilled()) {
      next();
    }
  };

  return {
    addPet, pets, petUUIDs, savePets, removePet, getPetByUUID, arAllFullfilled, validate,
  };
}

export function usePersonalInformation() {
  const { person, setPerson } = useContext(SignupState);
  const { next } = useStepNumber();

  const validate = () => {
    setPerson(person.validate());
    if (person.isValid()) {
      next();
    }
  };

  return { person, setPerson, validate };
}

export function useDeliveryInformation() {
  const { delivery, setDelivery } = useContext(SignupState);
  const { next } = useStepNumber();

  const validate = () => {
    setDelivery(delivery.validate());
    if (delivery.isValid()) {
      next();
    }
  };

  return { delivery, setDelivery, validate };
}

export function useOrder() {
  const {
    products, order, setOrder, delivery, person, pets,
  } = useContext(SignupState);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const postOrder = useCallback(async () => {
    try {
      const response = await fetch(`${process.env.api}ordenes/start`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          productIds: products.map((product) => product.id),
          client: {
            Nombre: person.getName(),
            Email: person.getEmail(),
            Telefono: person.getPhone(),
            Domicilio: delivery.street,
            Piso: delivery.floor,
            Numero: delivery.number,
            Barrio: delivery.neighbourhood,
            InformacionAdicional: delivery.extra,
          },
          pets: Object.keys(pets).map((p) => ({
            Nombre: pets[p].getName(),
            Edad: pets[p].getAge(),
            Animal: pets[p].getType(),
          })),
        }),
      });
      const o = await response.json();
      setOrder(o);
    } catch (err) {
      setError(true);
    }
    setLoading(false);
  }, [setOrder, order]);

  useEffect(() => {
    if (order) return;
    postOrder();
  }, [postOrder]);

  return {
    loading,
    error,
    order,
  };
}
