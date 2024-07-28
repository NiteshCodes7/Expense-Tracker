import React, { useEffect, useState } from 'react'
import { useTransactions } from '../Context/GlobalState'

function Balance() {

  const {transactions} = useTransactions()

  const [balance, setBalance] = useState(0)

  useEffect(() => {
    const income = transactions.filter((transaction) => transaction.amount > 0)
    .reduce((acc, transaction) => (acc+=transaction.amount), 0)

    const expense = transactions.filter((transaction) => transaction.amount < 0)
    .reduce((acc, transaction) => (acc-=transaction.amount), 0)

    setBalance(Math.abs(income - expense))
  }, [transactions])

  return (
    <>
      <h4>Your Balance</h4>
      <h1 id="balance">Rs.{balance}</h1>
    </>
  )
}

export default Balance
