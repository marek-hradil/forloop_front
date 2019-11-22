import { Layout, Menu, Icon } from 'antd'
import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'

const { Header, Content, Footer, Sider } = Layout

const MainLayout = ({ children, history }) => {
  const [collapsed, setCollapsed] = useState(false)
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onClick={() => setCollapsed(!collapsed)}>
        <div className='logo' />
        <Menu theme='dark' defaultSelectedKeys={['1']} mode='inline'>
          <Menu.Item key='1' style={{ marginTop: '4rem' }} onClick={() => history.push('/')}>
            <Icon type='pie-chart' />
            <span>Dashboard</span>
          </Menu.Item>
          <Menu.Item key='2'>
            <Icon type='desktop' />
            <span>Lidé</span>
          </Menu.Item>
          <Menu.Item key='9'>
            <Icon type='file' />
            <span>Místnosti</span>
          </Menu.Item>
        </Menu>
      </Sider>
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
