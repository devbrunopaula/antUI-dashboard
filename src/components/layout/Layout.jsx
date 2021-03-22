import React, {useState} from 'react'
import 'antd/dist/antd.css'
import {Layout, PageHeader} from 'antd'
import SidebarComponent from '../layout/Sidebar'
import HeaderComponent from '../layout/Header'
function LayoutComponent({children}) {
  let [closed, setClosed] = useState(false)
  const {Content} = Layout

  const toggle = () => {
    setClosed((closed = !closed))
  }

  const routes = [
    {
      path: 'index',
      breadcrumbName: 'Home',
    },
    {
      path: 'first',
      breadcrumbName: 'Dashboard',
    },
  ]
  return (
    <Layout style={{height: '100vh'}}>
      <SidebarComponent toggleClosed={closed} />

      <Layout className='site-layout'>
        <HeaderComponent toggle={toggle} closed={closed} />
        <PageHeader className='site-page-header' breadcrumb={{routes}} />
        <Content
          className='site-layout-background'
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  )
}

export default LayoutComponent
