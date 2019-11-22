import React from 'react'
import { Route } from 'react-router-dom'
import RoomList from './Components/RoomList'
import RoomDetail from './Pages/RoomDetail'
import CreateEvent from './Pages/CreateEvent'
import CreateRoom from './Pages/CreateRoom'

export const Routes = () => (
  <>
    <Route path='/' exact={true} component={RoomList} />
    <Route path='/room' component={RoomDetail} />
    <Route path='/create-event' exact={true} component={CreateEvent} />
    <Route path='/create-room' exact={true} component={CreateRoom} />
  </>
)
