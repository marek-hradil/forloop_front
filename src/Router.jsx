import React from 'react'
import { Route } from 'react-router-dom'
import RoomList from './Components/RoomList'
import RoomDetail from './Pages/RoomDetail'

export const Routes = () => (
  <>
    <Route path='/' exact={true} component={RoomList} />
    <Route path='/room' component={RoomDetail} />
  </>
)
