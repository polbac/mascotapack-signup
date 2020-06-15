import SignupState from '../context/SignupState'
import { useContext } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Pet from '../schema/Pet'
import { produce } from 'immer'

function getUniqueId() {
    return uuidv4()
}

export function usePets() {
    const { pets, petUUIDs, setPetUUIDs, setPets } = useContext(SignupState)
    
    const addPet = () => { 
        const uuid = getUniqueId()
        setPetUUIDs(currentPetUUIDs => produce(currentPetUUIDs, v => {
            v.push(uuid)
        }))
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

    const removePet = () => {}

    return { addPet, pets, petUUIDs, savePets, removePet, getPetByUUID }
}

export function useStepNumber() {
    const { stepNumber, setStepNumber } = useContext(SignupState)
    return { stepNumber, setStepNumber }
}