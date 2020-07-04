
import Step1 from './step1'
import Step3 from './step3'
import Step4 from './step4'
import Step5 from './step5'
import { useStepNumber } from '../../hooks/signupStateForm'

function StepContainer() {
    const { stepNumber } = useStepNumber()
    const steps = [
        <Step1 />,
        <Step3 />,
        <Step4 />,
        <Step5 />,
    ]
    return steps[stepNumber - 1]

}

export default StepContainer