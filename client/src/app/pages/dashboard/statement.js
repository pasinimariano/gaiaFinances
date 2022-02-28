import { useState } from 'react'

export const Statements = () => {
  const [transactions, setTransactions] = useState({
    incomes: 0,
    expenditures: 0,
    balance: 0
  })
  const [lastTransactions, setLastTransactions] = useState()

  const intToString = value => {
    if (value > 999 && value < 1000000) return (value / 1000).toFixed(1) + 'K'
    if (value > 1000000) return (value / 1000000).toFixed(1) + 'M'

    return value
  }

  const getIncomes = operations => {
    const incomes = operations.operations.filter(
      operation => operation.status === 'Income'
    )
    if (incomes.length > 0) {
      const total = incomes
        .map(income => income.amount)
        .reduce((prev, curr) => prev + curr)

      return total
    }
    return 0
  }

  const getExpenditures = operations => {
    const expenditures = operations.operations.filter(
      operation => operation.status === 'Expenditure'
    )

    if (expenditures.length > 0) {
      const total = expenditures
        .map(expenditure => expenditure.amount)
        .reduce((prev, curr) => prev + curr)

      return total
    }
    return 0
  }

  const getBalance = (incomes, expenditures) => {
    const total = incomes - expenditures

    return intToString(total)
  }

  const getLastTransactions = operations => {
    const order = operations.sort((a, b) => new Date(b.date) - new Date(a.date))

    const lastest = order.slice(0, 10)

    setLastTransactions(lastest)
  }

  return {
    transactions,
    setTransactions,
    getIncomes,
    getExpenditures,
    getBalance,
    intToString,
    lastTransactions,
    getLastTransactions
  }
}
