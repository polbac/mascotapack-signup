import { getConfirmation } from '../../hooks/confirmation';

export async function getServerSideProps({ query }) {
  const { external_reference } = query;

  const {
    loading,
    error,
    data,
  } = getConfirmation(external_reference);
  console.log('data', data);
  return {
    props: {
      external_reference,
      data,
    },
  };
}

const Success = ({ external_reference }) => (
  <main>
    <section className="py-7 how-work">
      <div className="container">
        <h2 className="mb-5 text-center">Felicitaciones!</h2>
        <p>
          Tu pago ha sido confirmado
          {external_reference}
        </p>
      </div>
    </section>
  </main>
);

export default Success;
