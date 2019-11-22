import React from 'react'
import MainLayout from './Layouts/Main'
import { Routes } from './Router'
import { BrowserRouter } from 'react-router-dom'

const App = () => (
  <BrowserRouter>
    <MainLayout>
      <Routes></Routes>
    </MainLayout>
  </BrowserRouter>
)

export default App
