import React, { useState, useEffect } from 'react';
import { useTransactions } from '../Context/GlobalState';

function IncomeExpenses() {
  const [plus, setPlus] = useState(0);
  const [minus, setMinus] = useState(0);

  const { transactions } = useTransactions();

  useEffect(() => {
    const income = transactions
      .filter(transaction => transaction.amount > 0)
      .reduce((acc, transaction) => (acc += transaction.amount), 0);

    const expense = transactions
      .filter(transaction => transaction.amount < 0)
      .reduce((acc, transaction) => (acc += transaction.amount), 0);

    setPlus(income);
    setMinus(expense);
  }, [transactions]);

  return (
    <>
      <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p id="money-plus" className="money plus">+Rs.{plus}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p id="money-minus" className="money minus">-Rs.{Math.abs(minus)}</p>
        </div>
      </div>
    </>
  );
}

export default IncomeExpenses;
