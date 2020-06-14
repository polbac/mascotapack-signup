import { useSignupStateForm } from '../../hooks/signupStateForm'

function isComplete(current, stepNumber) {
    return current <= stepNumber
}

const steps = ['Armá tu pack', 'Datos personales', 'Envío', 'Pago', 'Listo!']

function BreadcrumbStep(text, stepNumber, active) {
    const className = `step ${stepNumber <= active ? 'complete' : ''}`

    return <div className={className}>{text}</div>
}

function Breadcrumb() {
    const { stepNumber } = useSignupStateForm()

    return (
        <div className='breadcrumb'>
            {steps.map((text, index) => BreadcrumbStep(text, index + 1, stepNumber))}
        </div>
    )
}

export default Breadcrumb