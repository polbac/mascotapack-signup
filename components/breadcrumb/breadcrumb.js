import { useStepNumber } from '../../hooks/signupStateForm'

function isComplete(current, stepNumber) {
    return current <= stepNumber
}

const steps = ['Mascotas', 'Tu Pack', 'Datos Personales', 'Pago', 'Listo!']

function BreadcrumbStep(text, stepNumber, active) {
    const className = `step ${stepNumber <= active ? 'complete' : ''}`

    return <div key={`step-${stepNumber}`} className={className}>{text}</div>
}

function Breadcrumb() {
    const { stepNumber } = useStepNumber()

    return (
        <div className='breadcrumb'>
            {steps.map((text, index) => BreadcrumbStep(text, index + 1, stepNumber))}
        </div>
    )
}

export default Breadcrumb