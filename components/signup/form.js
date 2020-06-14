import dynamic from "next/dynamic"
import { Container } from "reactstrap";
import { useSignupStateForm } from '../../hooks/signupStateForm'
import Breadcrumb from '../breadcrumb/breadcrumb'

function stepFactory(step) {
    return dynamic(import(`./step${step}`))
}

export default () => {
    const { stepNumber } = useSignupStateForm()
    const Step = stepFactory(stepNumber)

    return (
        <Container>
            <Breadcrumb />
            <Step />
        </Container>
    )
}