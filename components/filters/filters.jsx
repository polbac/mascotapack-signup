import React from 'react';
import { useCatalog } from '../../hooks/catalog';
import { PetType } from '../../schema/Pet';

const Filters = ({ filters, setFilters }) => (
  <aside className="filters">

    <div className="filter-section">
      <p className="title">Mascota</p>
      <p className="option" onClick={() => setFilters(filters.setType(PetType.DOG))}>Perro</p>
      <p className="option" onClick={() => setFilters(filters.setType(PetType.CAT))}>Gato</p>
    </div>

  </aside>
);
export default Filters;
