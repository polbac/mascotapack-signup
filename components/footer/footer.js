import Link from "next/link";

export default function Footer() {
    return (
        <footer className="position-relative z-index-10 d-print-none">
            <div className="container light-footer">
                <div className="row">
                    <div className="mb-6 mb-lg-0 col-lg-6">
                        <h4>Medios de Pago</h4>
                        <img className='card' src="cards/1.png"></img>
                        <img className='card' src="cards/2.png"></img>
                        <img className='card' src="cards/3.png"></img>
                        <img className='card' src="cards/4.png"></img>
                        <img className='card' src="cards/5.png"></img>
                        <img className='card' src="cards/6.png"></img>
                        <img className='card' src="cards/7.png"></img>
                        <img className='card' src="cards/8.png"></img>
                        <img className='card' src="cards/9.png"></img>
                    </div>
                    <div className="mb-6 mb-lg-0 col-lg-6">
                        <h4>Sigamos conectados</h4>
                        <a className='icon-circle-social' href='https://instagram.com'>
                        <svg className="icon-inline icon-lg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="white" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
                        </a>
                    </div>
                </div>
            </div>
            <div className="py-6 bg-gray-200 text-muted">
                <div className="container">
                    <div className="row">
                        <div className="mb-5 mb-lg-0 col-lg-4">
                            <div className="font-weight-bold text-uppercase text-dark mb-3">
                                mascotapack
                            </div>
                            <p>Todos los derechos reservados 2020</p>   
                        </div>
                        <div className="mb-5 mb-lg-0 col-lg-4">
                                <div>
                                    
                                <Link href="/comenzar">
                                    <a className="btn btn-primary rounded-xl">COMENZAR</a>
                                </Link>
                                </div>
                                <br/>
                                <div>
                                <Link href='/como-funciona'>
                                    <a>Cómo funciona</a>
                                </Link>
                                </div>
                                <div>
                                <Link href='/zonas-de-entrega'>
                                    <a>Zonas de entrega</a>
                                </Link>
                                </div>
                                <div>
                                <Link href='/zonas-de-entrega'>
                                    <a>Contacto</a>
                                </Link>
                                </div>
                                
                        </div>
                        <div className="mb-5 mb-lg-0 col-lg-4">
                            <div className="font-weight-bold text-uppercase text-dark mb-3">
                                NOVEDADES
                            </div>
                            <p>Suscribite y conocé nuestras ofertas</p>
                            <form id="newsletter-form" className="">
                                <div className="input-group mb-3">
                                    <input type="email" placeholder="Tu cuenta de email" aria-label="Tu cuenta de email" class="bg-transparent border-dark border-right-0 form-control" />
                                        <div className="input-group-append">
                                            <button className="btn-outline-dark border-left-0 btn btn-deoco"><i class="fa fa-paper-plane text-lg"></i></button></div>
                                        </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    )
}