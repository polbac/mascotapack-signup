import SignupState from '../context/SignupState'
import { useContext } from 'react'

export function useSignupStateForm() {
    const { formState, setState } = useContext(SignupState)
    const { stepNumber } = formState

    const setPersonalInformation = () => {}
    const addPet = () => {}
    const removePet = () => {}
    const editPet = () => {}
    const stepStepNumber = () => {}

    return { stepNumber, stepStepNumber }
}