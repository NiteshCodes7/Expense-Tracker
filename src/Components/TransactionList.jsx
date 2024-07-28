import React from 'react';
import { useTransactions } from '../Context/GlobalState';

function TransactionList() {
  const { transactions, deleteTransaction } = useTransactions();

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <li key={transaction.id} className={transaction.amount < 0 ? 'minus' : 'plus'}>
            {transaction.text} <span>{transaction.amount < 0 ? '-' : '+'}Rs.{Math.abs(transaction.amount)}</span>
            <button className="delete-btn" onClick={() => deleteTransaction(transaction.id)}>x</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default TransactionList;
