import React from 'react'
import MainLayout from './Layouts/Main'
import { Routes } from './Router'
import { BrowserRouter } from 'react-router-dom'
import Axios from 'axios'

Axios.defaults.baseURL = 'http://10.10.10.90:3000'

const App = () => (
  <BrowserRouter>
    <MainLayout>
      <Routes></Routes>
    </MainLayout>
  </BrowserRouter>
)

export default App
