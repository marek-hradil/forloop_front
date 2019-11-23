import React, { useEffect, useState } from 'react'
import { Row, Col, Typography, Timeline, Card, Icon } from 'antd'
import styled from '@emotion/styled'
import Axios from 'axios'
const { Title } = Typography

const getRandomOfficeImage = id =>
  [
    'http://belgradearthotel.com/wp-content/uploads/2017/04/andreaI2.jpg',
    'http://communityfoundation.org/forms/wp-content/uploads/Conference-Room-B-2.png',
    'https://758756.smushcdn.com/1347968/wp-content/uploads/2016/04/mark-hemingway-PHOTOGRAPHY-5017-1024x683.jpg?size=1024x1024&lossy=1&strip=1&webp=1',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ6Q-ZXNSuJ22KSOzjYofuV_KQOy6oZDLla-z_ZxbzUO0dKwWCWg&s',
    'https://kualalumpurhotels.impiana.com.my/wp-content/uploads/sites/183/2015/08/Biz-Centre.jpg',
    'https://www.albushotel.com/heading/guards-room_1.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA2iH217pvwv60LxvdrW_ad5imF0IOymPSXcrPQ3t6zsHp_QQm&s',
  ][id % 7]

const RoomDetail = ({ match: { params } }) => {
  const [room, setRoom] = useState({})
  const [timeline, setTimeline] = useState([])
  useEffect(async () => {
    const live = setInterval(async () => {
      const { data } = await Axios.get('/room/' + params.id)
      setRoom((data && data.room) || {})
    }, 5000)

    const { data: timeline } = await Axios.get('/timeline')
    setTimeline(timeline || {})

    return () => clearInterval(live)
  }, [params.id])
  return (
    <Row gutters={16}>
      <Col md={10} sm={24}>
        <img
          alt='Room image'
          style={{ width: '100%', marginTop: '1rem' }}
          src={getRandomOfficeImage(params.id)}
        />
      </Col>
      <Col md={14} sm={24} style={{ paddingTop: '1rem' }}>
        <Card style={{ paddingLeft: '1rem' }}>
          <Row>
            <Col span={24}>
              <Title level={2}>{room.name}</Title>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <Title level={4}>Informace o mísnosti</Title>
              <AdditionalRow>Sensor ID: {room.sensorId}</AdditionalRow>
              <AdditionalRow>Maximální počet lidí: {room.max_people}</AdditionalRow>
              <AdditionalRow>Lokace místnosti: {room.location}</AdditionalRow>
              <AdditionalRow>
                Úroveň baterie: {room.last_battery_percentage}% <Icon type='api' />
              </AdditionalRow>
              <Title level={4}>Status</Title>
              <AdditionalRow>
                <Dot isFull={room.is_full} />
                {room.is_full ? 'Plná' : 'Prázdná'}
              </AdditionalRow>
            </Col>
            <Col span={12}>
              <Title level={4} style={{ paddingBottom: '1rem' }}>
                Timeline
              </Title>
              <Timeline>
                {timeline.map(({ status, summary, startDateTime, endDateTime }) => (
                  <TimeLineItem isFree={room.is_free}>
                    {new Date(startDateTime).toLocaleDateString('cs-cz', {
                      timeStyle: 'short',
                      dateStyle: 'short',
                    })}{' '}
                    -{' '}
                    {new Date(endDateTime).toLocaleDateString('cs-cz', {
                      timeStyle: 'short',
                      dateStyle: 'short',
                    })}
                    <h3>{summary}</h3>
                    {status === 'confirmed' ? (
                      <span style={{ color: 'green ' }}>Potvrzeno</span>
                    ) : (
                      'Zamítnuto'
                    )}
                  </TimeLineItem>
                ))}
              </Timeline>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  )
}

const TimeLineItem = ({ children, isFree }) => (
  <Timeline.Item color='green'>{children}</Timeline.Item>
)

const AdditionalRow = styled.div`
  font-size: 0.95rem;
  padding-bottom: 0.5rem;
`

const Dot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 100%;
  display: inline-block;
  margin-right: 1rem;
  background: ${props => (props.isFull ? 'red' : 'green')};
`

export default RoomDetail
