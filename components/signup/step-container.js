
import Step1 from './step1'
import { useStepNumber } from '../../hooks/signupStateForm'

function StepContainer() {
    const { stepNumber } = useStepNumber()
    if (stepNumber === 1) return (<Step1 />)

}

export default StepContainer