import React, { useEffect, useState } from 'react'
import { Row, Col, Typography, Timeline, Card } from 'antd'
import styled from '@emotion/styled'
import Axios from 'axios'
const { Title } = Typography

const timelineEvents = Array.from({ length: 10 }).map((_, index) => ({
  text: 'event ' + index,
  is_free: index % 2 === 0,
}))

const RoomDetail = ({ match: { params } }) => {
  const [room, setRoom] = useState({})
  useEffect(() => {
    ;(async () => {
      const { data } = await Axios.get('/room/' + params.id)
      setRoom((data && data.room) || {})
    })()
  }, [params.id])
  return (
    <Row gutters={16}>
      <Col span={10}>
        <img
          alt='Room image'
          style={{ maxWidth: '100%', marginTop: '1rem' }}
          src='https://wearespaces.com/toby/img/meeting-and-conference-rooms-rental-resized.jpg'
        />
      </Col>
      <Col span={14} style={{ paddingTop: '1rem', paddingLeft: '1rem' }}>
        <Card style={{ paddingLeft: '1rem' }}>
          <Row>
            <Col span={24}>
              <Title level={2}>{room.name}</Title>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Title level={4}>Informace o mísnosti</Title>
              <AdditionalRow>Sensor ID: {room.sensorId}</AdditionalRow>
              <AdditionalRow>Maximální počet lidí: {room.max_people}</AdditionalRow>
              <AdditionalRow>Lokace místnosti: {room.location}</AdditionalRow>
              <AdditionalRow>Úroveň baterie: {room.last_battery_percentage}%</AdditionalRow>
            </Col>
          </Row>
          <Row>
            <Col span={6}>
              <Title level={4} style={{ paddingBottom: '1rem' }}>
                Timeline
              </Title>
              <Timeline>
                {timelineEvents.map(({ text, is_free }) => (
                  <TimeLineItem isFree={room.is_free}>{room.is_free ? 'Volno' : text}</TimeLineItem>
                ))}
              </Timeline>
            </Col>
            <Col span={18}>
              <Title level={4}>Právě probíhající</Title>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  )
}

const TimeLineItem = ({ children, isFree }) => (
  <Timeline.Item color={isFree ? 'green' : 'red'}>{children}</Timeline.Item>
)

const AdditionalRow = styled.div`
  font-size: 0.95rem;
  padding-bottom: 0.5rem;
`

export default RoomDetail
