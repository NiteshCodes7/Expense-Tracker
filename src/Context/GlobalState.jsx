import React, { createContext, useContext, useState, useEffect } from 'react';

// Create a context with default values
const GlobalState = createContext({
  transactions: [],
  addTransaction: () => {},
  deleteTransaction: () => {},
});

// Custom hook to use the GlobalState context
export const useTransactions = () => {
  return useContext(GlobalState);
};

// Global context provider component
export const GlobalContextProvider = ({ children }) => {
  const [transactions, setTransactions] = useState(() => {
  const localData = localStorage.getItem('transactions');
  return localData ? JSON.parse(localData) : [];
});

  // Function to add a transaction
  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  // Function to delete a transaction by id
  const deleteTransaction = (id) => {
    setTransactions(transactions.filter(transaction => transaction.id !== id));
  };

  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(transactions));
  }, [transactions]);
  

  return (
    <GlobalState.Provider value={{ transactions, addTransaction, deleteTransaction }}>
      {children}
    </GlobalState.Provider>
  );
};

export default GlobalState;
