import React from 'react';
import { Button } from 'reactstrap';
import { trimName } from '../../helpers/name';

const ProductBox = ({
  data: {
    Categoria, Marca, Nombre, PesoBolsa, PrecioLista, Imagen,
  },
}) => (
  <article className="product-box">
    <div className="info-container">
      <p className="name">{trimName(Nombre)}</p>
      {PesoBolsa && (
      <p className="weight">
        {PesoBolsa}
        K
      </p>
      )}
    </div>
    <div className="text-center">
      <img src={Imagen.url} />
    </div>
    <div className="action">

      <a className="btn btn-secondary rounded-xs btn-sm ">AGREGAR</a>
    </div>
  </article>
);
export default ProductBox;
