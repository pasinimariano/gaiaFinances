import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { HomePage } from './pages/homePage'

export const RoutesWeb = () => {
  return (
    <Routes>
      <Route exact path='/' element={<HomePage />} />
      <Route />
      <Route />
    </Routes>
  )
}
