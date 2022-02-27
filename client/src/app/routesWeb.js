import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'

import HomePage from './pages/home/homePage'
import OperationsPage from './pages/operations/operationsPage'

export const RoutesWeb = ({ isLoggin }) => {
  return (
    <Routes>
      <Route exact path='/' element={<HomePage />} />
      <Route
        exact
        path='/dashboard'
        element={!isLoggin ? <Navigate to='/' /> : <OperationsPage />}
      />
      <Route />
    </Routes>
  )
}
