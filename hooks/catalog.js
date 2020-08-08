import {
  useState, useCallback,
} from 'react';
import { useLazyQuery } from '@apollo/client';
import { GET_PRODUCTS } from '../queries/product';
import Filters from '../schema/Filters';

function setParameters(filters) {
  const parameters = {};
  const Animal = filters.getProperty('type');

  if (Animal) {
    parameters.Animal = Animal;
  }

  const url = `/explorar?${Object.keys(parameters).map((p) => `${p}=${parameters[p]}`)}`;
  if (history) { history.pushState(parameters, '', url); }
}

function parseVariables(filters) {
  const variables = {};
  const Animal = filters.getProperty('type');

  if (Animal) {
    variables.Animal = Animal;
  }

  return variables;
}

function useFilters() {
  const [filters, setFilters] = useState(new Filters());
  return { filters, setFilters };
}

export function useCatalog() {
  const [loadProducts, { loading, data }] = useLazyQuery(GET_PRODUCTS);
  const { filters, setFilters: originalSetFilters } = useFilters();

  const load = useCallback(() => {
    loadProducts({ variables: parseVariables(filters) });
  }, []);

  const setFilters = useCallback((f) => {
    originalSetFilters(f);
    load();
    setParameters(f);
  }, []);

  return {
    loading, data, load, filters, setFilters,
  };
}
