import React from 'react'
import { Row, Col, Typography } from 'antd'
import EventForm from '../Components/EventForm'
const { Title } = Typography

const CreateEvent = () => (
  <Row gutters={16} style={{ paddingTop: '1rem' }}>
    <Col span={24}>
      <Title level={2} style={{ marginLeft: '1rem' }}>
        Vytvořit meeting
      </Title>
    </Col>
    <Col span={18}>
      <EventForm />
    </Col>
  </Row>
)

export default CreateEvent
