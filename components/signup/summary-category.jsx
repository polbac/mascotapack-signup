import React from 'react';
import { parsePrice } from '../../helpers/price';

export default function SummaryCategory({ name, items }) {
  if (name === 'Total') return (<></>);
  return (
    <tbody>
      <tr className="category-summary">
        <th className="font-weight-normal py-2">{name}</th>
      </tr>
      {items?.map(({ Nombre, PrecioLista }) => (
        <tr>
          <th className="font-weight-normal py-2 item-title">{Nombre}</th>
          <td className="text-right py-2">{parsePrice(PrecioLista)}</td>
        </tr>
      ))}

    </tbody>
  );
}
