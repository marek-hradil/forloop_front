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
          <Button type='link' onClick={() => history.push('/')}>
            <Icon type='left' style={{ fontSize: 20 }} />
          </Button>
          <img src={logo} style={{ maxWidth: 100, marginLeft: 30 }} />
        </Header>
        <Content style={{ margin: '0 16px' }}>{children}</Content>
        <Footer style={{ textAlign: 'center' }}>
          <b>Forloop {new Date().getFullYear()}</b>
        </Footer>
      </Layout>
    </Layout>
  )
}

export default withRouter(MainLayout)
