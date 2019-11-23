import React from 'react'
import MainLayout from './Layouts/Main'
import { Routes } from './Router'
import { BrowserRouter } from 'react-router-dom'
import Axios from 'axios'

Axios.defaults.baseURL = 'http://8ad71f8c.ngrok.io'

const App = () => (
  <BrowserRouter>
    <MainLayout>
      <Routes></Routes>
    </MainLayout>
  </BrowserRouter>
)

export default App
