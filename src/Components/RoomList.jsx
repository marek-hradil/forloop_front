import React, { useEffect, useState } from 'react'
import { Row, Col, Card, Typography } from 'antd'
import RoomCard from './RoomCard'
import RoomForm from './RoomForm'
import axios from 'axios'

const { Title } = Typography

const RoomList = () => {
  const [rooms, setRooms] = useState([])
  useEffect(() => {
    ;(async () => {
      const { data } = await axios.get('/room/list')
      setRooms((data && data.rooms) || [])
    })()
  }, [])

  return (
    <Row gutters={16}>
      <Col lg={14} md={24} style={{ paddingTop: '1rem' }}>
        <Row gutter={16}>
          {rooms.map(room => (
            <Col span={8}>
              <RoomCard {...room} />
            </Col>
          ))}
        </Row>
      </Col>
      <Col
        lg={10}
        md={24}
        style={{ paddingTop: '1rem', display: 'flex', justifyContent: 'center' }}
      >
        <Card style={{ width: '97%' }}>
          <Title level={3} style={{ marginBottom: '1rem' }}>
            Založit místnost
          </Title>
          <RoomForm />
        </Card>
      </Col>
    </Row>
  )
}

export default RoomList
