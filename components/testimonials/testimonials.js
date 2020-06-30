import React from "react";

export default function Testimonials() {
  return (
    <div className="testimonials bg-gray-100 py-5 px-3 px-lg-5 rounded-lg shadow-sm container">
        <h3>MASCOTEROS FELICES</h3>
        <div className="row">
            <div className="col-lg-6">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="p-1">
                            <img
                            src="/testimonials-1.png"
                            
                            className="img-fluid rounded-circle shadow-sm"
                            />
                        </div>
                    </div>
                    <div className="d-flex align-items-center col-lg-6">
                        <div>
                            <blockquote className="blockquote-icon">
                            <p className="text-lg text-gray-700 mb-4">
                                Desde que pido a mascotapack ya me olvidé de olvidarme de la comida de Oliver y eso me alegró esta cuarentena.
                            </p>
                            <h6 className="text-lg text-uppercase text-primary">
                                — Romi, Capital Federal
                            </h6>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="p-1">
                            <img
                            src="/testimonials-2.png"
                            
                            className="img-fluid rounded-circle shadow-sm"
                            />
                        </div>
                    </div>
                    <div className="d-flex align-items-center col-lg-6">
                        <div>
                            <blockquote className="blockquote-icon">
                            <p className="text-lg text-gray-700 mb-4">
                                Siempre cumplieron en tiempo en forma. ¡Me salvaron un montón de veces!
                            </p>
                            <h6 className="text-lg text-uppercase text-primary">
                                — Leo, Capital Federal
                            </h6>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
