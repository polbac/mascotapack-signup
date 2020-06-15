import { createContext, useState } from 'react'

const SignupStateContext = createContext({})

export function SignupStateContextProvider({children}) {
    const [stepNumber, setStepNumber] = useState(1)
    const [petUUIDs, setPetUUIDs] = useState([])
    const [pets, setPets] = useState({})
    
    return <SignupStateContext.Provider value={{
        stepNumber,
        setStepNumber,
        petUUIDs,
        setPetUUIDs,
        pets,
        setPets
    }}>
        {children}
    </SignupStateContext.Provider>
}

export default SignupStateContext