import { createContext, useState } from 'react'
import Person from '../schema/Person'
const SignupStateContext = createContext({})

export function SignupStateContextProvider({children}) {
    const [stepNumber, setStepNumber] = useState(1)
    const [petUUIDs, setPetUUIDs] = useState([])
    const [pets, setPets] = useState({})
    const [person, setPerson] = useState(new Person())
    
    return <SignupStateContext.Provider value={{
        stepNumber,
        setStepNumber,
        petUUIDs,
        setPetUUIDs,
        pets,
        setPets,
        person,
        setPerson
    }}>
        {children}
    </SignupStateContext.Provider>
}

export default SignupStateContext