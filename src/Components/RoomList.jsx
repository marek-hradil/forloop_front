import React from 'react'
import { Row, Col } from 'antd'
import RoomCard from './RoomCard'
import styled from '@emotion/styled'

const rooms = Array.from({ length: 10 }).map((_, index) => ({
  id: index,
  rpi_ids: [],
  name: 'Room ' + index,
  img_path: 'https://wearespaces.com/toby/img/meeting-and-conference-rooms-rental-resized.jpg',
  max_people: index + 12,
  is_occupied: index % 2 === 0,
}))

const RoomList = () => {
  return (
    <RoomContainer>
      <Row gutter={16}>
        {rooms.map(room => (
          <Col span={8}>
            <RoomCard {...room} />
          </Col>
        ))}
      </Row>
    </RoomContainer>
  )
}

const RoomContainer = styled.div`
  width: 60%;
  padding-top: 1rem;
`

export default RoomList
