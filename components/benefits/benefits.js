import Svg from '../svg/svg'

export default function Benefits() {
  return (
    <section className="py-6 bg-gray-100 beneficios">
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
              <div className='icon-container'>
                <img src="f1.png" className="img-benefit-1"/>
                </div>
              <h3 className="h5">Despreocupate</h3>
              <p className="text-muted">
                Nos vamos a encargar de que nunca le falte nada. Ni alimento ni pipetas.
              </p>
            </div>
          </div>
          <div className="mb-3 mb-lg-0 text-center col-lg-4">
            <div className="px-0 px-lg-3">
            <div className='icon-container'>
              <img src="f2.png" className="img-benefit-2"/>
            </div>
              <h3 className="h5">Sin salir de tu casa</h3>
              <p className="text-muted">
                En estos tiempos nos preocupamos para que puedas cuidarte.
              </p>
            </div>
          </div>
          <div className="mb-3 mb-lg-0 text-center col-lg-4">
            <div className="px-0 px-lg-3">
            <div className='icon-container'>
              <img src="f3.png" width="80" className="img-benefit-3"/>
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
