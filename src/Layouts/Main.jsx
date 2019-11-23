import { Layout, Icon, Button } from 'antd'
import React from 'react'
import { withRouter } from 'react-router-dom'
import logo from './logo.png'

const { Header, Content, Footer } = Layout

const MainLayout = ({ children, history }) => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Layout>
        <Header style={{ background: '#fff', padding: 0 }}>
          <Button type='link' onClick={() => history.go(-1)}>
            <Icon type='left' style={{ fontSize: 20 }} />
          </Button>
          <img src={logo} style={{ maxWidth: 100, marginLeft: 30 }} />
          <h2 style={{ marginLeft: '2rem' }}>BusyRoom</h2>
        </Header>
        <Content style={{ margin: '0 16px' }}>{children}</Content>
        <Footer style={{ textAlign: 'center' }}>Room App</Footer>
      </Layout>
    </Layout>
  )
}

export default withRouter(MainLayout)
