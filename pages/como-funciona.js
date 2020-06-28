import Svg from '../components/svg/svg'

const HowPage = () => (
  <main>
    <section className="py-6">
      <div className="container">
      <h2 className="mb-5 text-center">Cómo funciona</h2>
        <div className="py-4">
          <h2 className="mb-5 text-primary">
            <Svg icon="open-box-1" size={30} />&nbsp;
            Acerca
          </h2>
          <div className="row">
            <div className="col-md-6">
              <h5>Qué es</h5>
              <p className="text-muted mb-4">
                Es un servicio de subscripción a un pack de comida, pipetas, elementos sanitarios y juguetes para tus mascotas.
              </p>
              <h5>Cómo funciona?</h5>
              <p className="text-muted mb-4">
                Nos contas sobre tus mascotas (perro/gato, edad, si tiene algún problema de salud) y te ofrecemos un pack con todo.
              </p>
            </div>
            <div className="col-md-6">
              <h5>Cuánto dura el pack</h5>
              <p className="text-muted mb-4">
                Un mes pero a medida que vayamos conociendono más vamos a ir aprendiendo sobre los consumos de tus mascotasy de esta manera ir optimizando costos..
              </p>

            </div>
          </div>
        </div>
        <div className="py-4">
          <h2 className="mb-5 text-primary"><Svg icon="secure-payment-1" size={30} />&nbsp;Pago</h2>
          <div className="row">
            <div className="col-md-6">
              <h5>Qué métodos de pago puedo usar</h5>
              <p className="text-muted mb-4">
                Podrás completar tu pago con MercadoPago.
              </p>
              <h5>No es automático</h5>
              <p className="text-muted mb-4">
                No te preocupes. Cuando te estés quedando si comida te avisaremos y podrás confirmar un nuevo pack, no será automático.
              </p>
            </div>
          </div>
        </div>

        <div className="py-4">
          <h2 className="mb-5 text-primary">
            <Svg icon="delivery-time-1" size={30} />&nbsp;
            Envío
          </h2>
          <div className="row">
            <div className="col-md-6">
              <h5>Cómo me llegará el pack</h5>
              <p className="text-muted mb-4">
                Te llegará al domicilio que nos digas durante la confirmación de tu pack.
              </p>
              <h5>Envíos en COVID19</h5>
              <p className="text-muted mb-4">
                Cuando salgas a buscar tu pack, por favor usa máscara para cuidarnos entre todos.
              </p>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  </main>
);

export default HowPage;
