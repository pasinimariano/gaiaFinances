import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'

import HomePage from './pages/home/homePage'
import DashboardPage from './pages/dashboard/dashboardPage'
import OperationsPage from './pages/operations/operationsPage'
import SettingsPage from './pages/settings/settingsPage'

export const RoutesWeb = ({ isLoggin }) => {
  return (
    <Routes>
      <Route exact path='/' element={<HomePage />} />
      <Route
        exact
        path='/dashboard'
        element={!isLoggin ? <Navigate to='/' /> : <DashboardPage />}
      />

      <Route
        exact
        path='/operations'
        element={!isLoggin ? <Navigate to='/' /> : <OperationsPage />}
      />
      <Route exact path='/settings' element={<SettingsPage />} />
    </Routes>
  )
}
