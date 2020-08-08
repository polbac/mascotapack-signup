import { useLazyQuery } from '@apollo/client';
import { useEffect, useContext } from 'react';
import _ from 'lodash';
import { GET_PRODUCTS } from '../queries/product';
import { usePets } from './signup';
import SignupState from '../context/SignupState';

const mapData = (data) => {
  const total = data.products.reduce((accumulator, current) => accumulator + current.PrecioLista, 0);
  return {
    ..._.groupBy(data.products, 'Categoria'),
    Total: total,
  };
};

export function useSumary() {
  const { summary, setSummary } = useContext(SignupState);
  const { setProducts } = useContext(SignupState);
  const { pets, petUUIDs } = usePets();
  const [loadProducts, { loading, data }] = useLazyQuery(GET_PRODUCTS);

  useEffect(() => {
    if (Object.keys(pets).length) {
      loadProducts();
    } else {
      setSummary(null);
    }
  }, [petUUIDs.length]);

  useEffect(() => {
    if (data && petUUIDs.length) {
      setSummary(mapData(data));
      setProducts(data.products);
    } else {
      setSummary(null);
    }
  }, [data, petUUIDs.length]);

  return {
    empty: summary === null, loading, summary,
  };
}
