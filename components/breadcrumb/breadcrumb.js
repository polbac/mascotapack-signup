import { useStepNumber } from '../../hooks/signup';

function isComplete(current, stepNumber) {
  return current <= stepNumber;
}

const steps = ['Mascotas', 'Tu Pack', 'Datos Personales', 'Envío', 'Pago'];

function BreadcrumbStep(text, stepNumber, active) {
  const className = `step ${stepNumber <= active ? 'complete' : ''}`;

  return <div key={`step-${stepNumber}`} className={className}>{text}</div>;
}

function Breadcrumb() {
  const { stepNumber } = useStepNumber();
  const width = `${(100 / 5) * stepNumber}%`;
  return (
    <>
      <div className="progress rounded-0 sticky-top"><div role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" className="progress-bar" style={{ width }} /></div>
    </>
  );
}

export default Breadcrumb;
