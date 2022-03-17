import { useState } from 'react'
import axios from 'axios'

export const Statements = () => {
  const [transactions, setTransactions] = useState({
    incomes: 0,
    totalIncomes: 0,
    expenditures: 0,
    totalExpenditures: 0,
    balance: 0
  })
  const [lastTransactions, setLastTransactions] = useState()
  const [chartDataX, setChartDataX] = useState([0])
  const [chartDataY, setChartDataY] = useState([0])
  const [roudedChartData, setRoundedChartData] = useState({})
  const [categories, setCategories] = useState()

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
      const count = incomes.length
      const total = incomes
        .map(income => income.amount)
        .reduce((prev, curr) => prev + curr)

      return { total, count }
    }
    return 0
  }

  const getExpenditures = operations => {
    const expenditures = operations.operations.filter(
      operation => operation.status === 'Expenditure'
    )

    if (expenditures.length > 0) {
      const count = expenditures.length
      const total = expenditures
        .map(expenditure => expenditure.amount)
        .reduce((prev, curr) => prev + curr)

      return { total, count }
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

  const getAllCategories = async () => {
    const response = await axios.get('http://localhost:3001/categories/all')

    setCategories(response.data.categories)
  }

  const getChartData = operations => {
    const order = operations.sort((a, b) => new Date(a.date) - new Date(b.date))
    order.forEach(operation => {
      setChartDataX(chartDataX => [...chartDataX, operation.date.slice(0, 10)])

      if (operation.status === 'Expenditure') {
        setChartDataY(chartDataY => [
          ...chartDataY,
          chartDataY[chartDataY.length - 1] - operation.amount
        ])
      } else {
        setChartDataY(chartDataY => [
          ...chartDataY,
          chartDataY[chartDataY.length - 1] + operation.amount
        ])
      }
    })
  }

  const getRoundedChartData = operations => {
    operations.forEach(operation => {
      const category = categories.filter(
        cat => cat._id === operation.CategoryId
      )
      const categoryName = category[0].name
      setRoundedChartData(prevState => ({
        ...prevState,
        [categoryName]: (prevState[categoryName] || 0) + 1
      }))
    })
  }

  return {
    transactions,
    setTransactions,
    getIncomes,
    getExpenditures,
    getBalance,
    intToString,
    lastTransactions,
    getLastTransactions,
    getChartData,
    chartDataX,
    chartDataY,
    roudedChartData,
    getAllCategories,
    categories,
    getRoundedChartData
  }
}
