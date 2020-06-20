import SignupState from '../context/SignupState'
import { useContext, useCallback } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Pet from '../schema/Pet'
import { produce } from 'immer'

function getUniqueId() {
    return uuidv4()
}

export function usePets() {
    const { pets, petUUIDs, setPetUUIDs, setPets } = useContext(SignupState)
    const { next } = useStepNumber()

    const addPet = () => { 
        const uuid = getUniqueId()
        const newPet = new Pet(uuid)
        setPetUUIDs(currentPetUUIDs => produce(currentPetUUIDs, v => {
            v.push(uuid)
        }))
        setPets(currentPets => produce(currentPets, v => ({
            ...pets,
            [uuid]: newPet
        })))
        
    }

    const savePets = (newPet) => {
        setPets(currentPets => produce(currentPets, v => ({
            ...pets,
            [newPet.getUUID()]: newPet
        })))
    }

    const getPetByUUID = uuid => {
        return pets[uuid] || new Pet(uuid)
    }

    const removePet = (uuid) => {
        setPetUUIDs(currentPetUUIDs => produce(currentPetUUIDs, v => {
            return v.filter(_uuid => _uuid !== uuid)
        }))
        setPets(currentPets => produce(currentPets, v => {
            delete v[uuid]
        }))
    }

    const arAllFullfilled = () => {
        return Object.keys(pets).reduce((acc, uuid) => {
            const p = pets[uuid]
            return p.isFullfilled() && acc
        }, true) && Object.keys(pets).length !== 0
    }

    const validate = () => {
        petUUIDs.forEach(uuid => pets[uuid].validate())
        
        if (arAllFullfilled()) {
            next()
        }
    }

    return { addPet, pets, petUUIDs, savePets, removePet, getPetByUUID, arAllFullfilled, validate }
}

export function usePersonalInformation() {
    const { person, setPerson } = useContext(SignupState)
    const { next } = useStepNumber()

    const validate = () => {
        setPerson(person.validate())
        if (person.isValid()) {
            next()
        }
    }

    return { person, setPerson, validate }
}

export function useDeliveryInformation() {
    const { delivery, setDelivery } = useContext(SignupState)
    const { next } = useStepNumber()

    const validate = () => {
        setDelivery(delivery.validate())
        if (delivery.isValid()) {
            next()
        }
    }

    return { delivery, setDelivery, validate }
}


export function useStepNumber() {
    const { stepNumber, setStepNumber } = useContext(SignupState)

    const next = () => {
        setStepNumber(stepNumber + 1)
    }

    const prev = () => {
        setStepNumber(stepNumber - 1)
    }

    return { stepNumber, next, prev }
}