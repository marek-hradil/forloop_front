import React, { useEffect, useState } from 'react'
import { Row, Col, Card, Typography, Empty } from 'antd'
import RoomCard from './RoomCard'
import RoomForm from './RoomForm'
import axios from 'axios'
import EventForm from './EventForm'

const { Title } = Typography

const RoomList = () => {
  const [rooms, setRooms] = useState([])
  useEffect(() => {
    fetchRoom()
    const live = setInterval(() => fetchRoom(), 5000)
    return () => clearTimeout(live)
  }, [])

  document.addEventListener('refetch_rooms', () => fetchRoom())

  const fetchRoom = async () => {
    const { data } = await axios.get('/room/list')
    setRooms((data && data.rooms) || [])
  }

  return (
    <Row gutters={16}>
      <Col lg={14} md={24} style={{ paddingTop: '1rem' }}>
        <Row gutter={16}>
          {rooms.length === 0 && <Empty style={{ marginTop: '5rem' }} />}
          {rooms.map(room => (
            <Col md={8} sm={12} xs={24}>
              <RoomCard {...room} />
            </Col>
          ))}
        </Row>
      </Col>
      <Col
        lg={10}
        md={24}
        style={{
          paddingTop: '1rem',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <Card style={{ width: '97%', marginBottom: '1rem' }}>
          <Title level={3} style={{ marginBottom: '1rem' }}>
            Create a Meeting
          </Title>
          <EventForm />
        </Card>
        <Card style={{ width: '97%' }}>
          <Title level={3} style={{ marginBottom: '1rem' }}>
            Create a Room
          </Title>
          <RoomForm />
        </Card>
      </Col>
    </Row>
  )
}

export default RoomList
