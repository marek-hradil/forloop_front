import React from 'react'
import styled from '@emotion/styled'
import { Card, Button } from 'antd'
import { Link } from 'react-router-dom'

const RoomCard = ({ name, id, img_path, is_occupied }) => (
  <Card
    bordered={false}
    hoverable
    cover={<img alt='room-img' src={img_path} />}
    style={{ marginBottom: '1rem' }}
  >
    <h3>{name}</h3>
    <OccupiedInfo>
      <span>
        <OccupiedInfoDot isActive={is_occupied} />
        {is_occupied ? 'Plné' : 'Prázdné'}
      </span>
      <Link to='/room'>
        <Button type='primary' shape='circle' icon='right' size='large' />
      </Link>
    </OccupiedInfo>
  </Card>
)

const OccupiedInfoDot = styled.div`
  display: inline-block;
  margin-right: 1rem;
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 100%;
  background: ${props => (props.isActive ? '#f5222d' : 'rgb(82, 196, 26)')};
`

const OccupiedInfo = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

export default RoomCard
