import { Layout } from 'antd'
import React from 'react'
import { withRouter } from 'react-router-dom'

const { Header, Content, Footer } = Layout

const MainLayout = ({ children, history }) => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Layout>
        <Header style={{ background: '#fff', padding: 0 }}>
          <h2 style={{ marginLeft: '2rem' }}>Buro</h2>
        </Header>
        <Content style={{ margin: '0 16px' }}>{children}</Content>
        <Footer style={{ textAlign: 'center' }}>Room App</Footer>
      </Layout>
    </Layout>
  )
}

export default withRouter(MainLayout)
