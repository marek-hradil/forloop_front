import React from 'react'
import styled from '@emotion/styled'
import { Card, Button, Icon } from 'antd'
import { Link } from 'react-router-dom'

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

const RoomCard = ({ name, id, is_full, last_battery_percentage }) => (
  <Card
    loading={!id}
    bordered={false}
    hoverable
    cover={
      <img
        alt='room-img'
        src={getRandomOfficeImage(id)}
        style={{ objectFit: 'cover', height: 300 }}
      />
    }
    style={{ marginBottom: '1rem' }}
  >
    <h3>{name}</h3>
    <OccupiedInfo>
      <span>
        <OccupiedInfoDot isActive={is_full} />
        {is_full ? 'Busy' : 'Empty'}
      </span>
      <span>
        <Icon type='api' />
        {last_battery_percentage}%
      </span>
      <Link to={`/room/${id}`}>
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
