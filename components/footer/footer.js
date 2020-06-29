import Link from "next/link";

export default function Footer() {
    return (
        <footer className="position-relative z-index-10 d-print-none">
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
                                <div class="input-group mb-3">
                                    <input type="email" placeholder="Tu cuenta de email" aria-label="Tu cuenta de email" class="bg-transparent border-dark border-right-0 form-control" />
                                        <div class="input-group-append">
                                            <button class="btn-outline-dark border-left-0 btn btn-deoco"><i class="fa fa-paper-plane text-lg"></i></button></div>
                                        </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    )
}