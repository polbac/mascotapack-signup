import React, { useEffect } from 'react';
import { useCatalog } from '../hooks/catalog';
import ProductBox from '../components/product-box/product-box';
import Filters from '../components/filters/filters';

const Explorar = () => {
  const {
    loading, data, load, filters, setFilters,
  } = useCatalog();

  useEffect(() => {
    load();
  }, [load]);

  return (
    <main className="expolorar">
      <Filters filters={filters} setFilters={setFilters} />
      <section className="product-list">
        {data && data.products.map((producto) => <ProductBox data={producto} />)}
      </section>
    </main>
  );
};

export default Explorar;
