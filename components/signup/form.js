import { Container } from 'reactstrap';
import Breadcrumb from '../breadcrumb/breadcrumb';
import StepContainer from './step-container';
import Summary from './summary';

export default () => (
  <Container>
    <Breadcrumb key="breadcrumb" />

    <div className="container">
      <div className="row">
        <div className="col-lg-7">
          <StepContainer />
        </div>
        <div className="col-lg-5">
          <Summary />
        </div>

      </div>
    </div>

  </Container>
);
