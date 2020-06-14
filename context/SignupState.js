import { createContext, useState } from 'react'

const initState = { 
    stepNumber: 1,
    name: '',
    email: '',
    cellphone: '',
    pets: [],
}
const SignupStateContext = createContext(initState)

export function SignupStateContextProvider({children}) {
    const [formState, setState] = useState(initState)
    
    return <SignupStateContext.Provider value={{formState, setState}}>
        {children}
    </SignupStateContext.Provider>
}

export default SignupStateContext