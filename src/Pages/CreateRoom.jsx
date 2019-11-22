import React from 'react'
import { Row, Col, Typography } from 'antd'
import RoomForm from '../Components/RoomForm'
const { Title } = Typography

const CreateRoom = () => (
  <Row gutters={16} style={{ paddingTop: '1rem' }}>
    <Col span={24}>
      <Title level={2} style={{ marginLeft: '1rem' }}>
        Vytvoř zasedačku
      </Title>
    </Col>
    <Col span={18}>
      <RoomForm />
    </Col>
  </Row>
)

export default CreateRoom
