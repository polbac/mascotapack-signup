
import Step1 from './step1'
import Step2 from './step2'
import { useStepNumber } from '../../hooks/signupStateForm'

function StepContainer() {
    const { stepNumber } = useStepNumber()
    const steps = [
        <Step1 />,
        <Step2 />,
    ]
    return steps[stepNumber - 1]

}

export default StepContainer