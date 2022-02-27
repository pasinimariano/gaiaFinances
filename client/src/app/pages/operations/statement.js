import { useState } from 'react'

export const Statements = () => {
  const [transactions, setTransactions] = useState({
    incomes: 0,
    expenditures: 0,
    balance: 0
  })

  const intToString = value => {
    var suffixes = ['', 'k', 'm', 'b', 't']
    var suffixNum = Math.floor(('' + value).length / 3)
    var shortValue = parseFloat(
      (suffixNum != 0 ? value / Math.pow(1000, suffixNum) : value).toPrecision(
        2
      )
    )
    if (shortValue % 1 != 0) {
      shortValue = shortValue.toFixed(1)
    }
    return shortValue + suffixes[suffixNum]
  }

  const getIncomes = operations => {
    const incomes = operations.operations.filter(
      operation => operation.status === 'Income'
    )

    const total = incomes
      .map(income => income.amount)
      .reduce((prev, curr) => prev + curr)

    return total
  }

  const getExpenditures = operations => {
    const expenditures = operations.operations.filter(
      operation => operation.status === 'Expenditure'
    )

    const total = expenditures
      .map(expenditure => expenditure.amount)
      .reduce((prev, curr) => prev + curr)

    return total
  }

  const getBalance = (incomes, expenditures) => {
    const total = incomes - expenditures

    return intToString(total)
  }

  return {
    transactions,
    setTransactions,
    getIncomes,
    getExpenditures,
    getBalance,
    intToString
  }
}
