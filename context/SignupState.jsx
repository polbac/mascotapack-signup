import React, { createContext, useState } from 'react';
import Person from '../schema/Person';
import Delivery from '../schema/Delivery';

const SignupStateContext = createContext({});

export function SignupStateContextProvider({ children }) {
  const [stepNumber, setStepNumber] = useState(1);
  const [petUUIDs, setPetUUIDs] = useState([]);
  const [pets, setPets] = useState({});
  const [person, setPerson] = useState(new Person());
  const [products, setProducts] = useState([]);
  const [delivery, setDelivery] = useState(new Delivery());
  const [summary, setSummary] = useState(null);
  const [order, setOrder] = useState(null);

  return (
    <SignupStateContext.Provider value={{
      stepNumber,
      setStepNumber,
      petUUIDs,
      setPetUUIDs,
      pets,
      setPets,
      person,
      setPerson,
      delivery,
      setDelivery,
      summary,
      setSummary,
      order,
      setOrder,
      products,
      setProducts,
    }}
    >
      {children}
    </SignupStateContext.Provider>
  );
}

export default SignupStateContext;
