import { useState } from 'react'

export const Statemets = () => {
  const [indexFirstOperation, setindexFirstOperation] = useState(0)
  const [indexLastOperation, setindexLastOperation] = useState(10)
  const [selection, setSelection] = useState()
  const operationsXpage = 10

  const nextPage = operation => {
    if (indexLastOperation < operation.length) {
      setindexFirstOperation(indexFirstOperation + operationsXpage)
      setindexLastOperation(indexLastOperation + operationsXpage)
    }
  }

  const prevPage = () => {
    if (indexFirstOperation > 0) {
      setindexFirstOperation(indexFirstOperation - operationsXpage)
      setindexLastOperation(indexLastOperation - operationsXpage)
    }
  }

  return {
    indexFirstOperation,
    setindexFirstOperation,
    indexLastOperation,
    setindexLastOperation,
    nextPage,
    prevPage,
    operationsXpage,
    selection,
    setSelection
  }
}
