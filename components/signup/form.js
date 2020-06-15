
import { Container } from "reactstrap";
import Breadcrumb from '../breadcrumb/breadcrumb'
import StepContainer from './step-container'

export default () => {
    console.log('form')
    return (
        <Container>
            <Breadcrumb key="breadcrumb" />
            <StepContainer />
        </Container>
    )
}