import Svg from '../svg/svg'

export default function Benefits() {
  return (
    <section className="py-6 bg-gray-100">
      <div className="container">
        <div className="text-center pb-lg-4">
          <p className="subtitle text-secondary">
            Beneficios!
          </p>
          <h2 className="mb-5">Pack pensado para tu mascota!</h2>
        </div>
        <div className="row">
          <div className="mb-3 mb-lg-0 text-center col-lg-4">
            <div className="px-0 px-lg-3">
              <div className="icon-rounded bg-primary-light mb-3">
                <Svg size={40} icon="delivery-time-1" />
              </div>
              <h3 className="h5">Despreocupate</h3>
              <p className="text-muted">
                Nos vamos a encargar de que nunca le falte nada. Ni alimento ni pipetas.
              </p>
            </div>
          </div>
          <div className="mb-3 mb-lg-0 text-center col-lg-4">
            <div className="px-0 px-lg-3">
              <div className="icon-rounded bg-primary-light mb-3">
                <Svg size={40} icon="diamond-1" />
              </div>
              <h3 className="h5">Sin salir de tu casa</h3>
              <p className="text-muted">
                En estos tiempos nos preocupamos para que puedas cuidarte.
              </p>
            </div>
          </div>
          <div className="mb-3 mb-lg-0 text-center col-lg-4">
            <div className="px-0 px-lg-3">
              <div className="icon-rounded bg-primary-light mb-3">
                <Svg size={40} icon="money-box-1" />
              </div>
              <h3 className="h5">Compra inteligente</h3>
              <p className="text-muted">
                Vamos aprendiendo del consumo de tus mascotas para que tu pack se ajuste a ello.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
