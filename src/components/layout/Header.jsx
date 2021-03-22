import React from 'react'
import {Button, Layout, Menu, Avatar, Badge} from 'antd'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  QuestionOutlined,
  SettingOutlined,
  UserOutlined,
} from '@ant-design/icons'
import 'antd/dist/antd.css'

const {Header} = Layout

function HeaderComponent({toggle, closed}) {
  return (
    <Header className='site-layout-background' style={{background: 'white'}}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: 'white',
        }}
      >
        <div>
          <Button
            onClick={toggle}
            icon={closed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          ></Button>
        </div>

        <div>
          <Menu theme='light' mode='horizontal'>
            <Menu.Item key='1'>
              <QuestionOutlined style={{fontSize: '1.2rem'}} />
            </Menu.Item>
            <Menu.Item key='2'>
              <SettingOutlined style={{fontSize: '1.2rem'}} />
            </Menu.Item>
            <Menu.Item key='3'>
              <UserOutlined style={{fontSize: '1.2rem'}} />
            </Menu.Item>
            <span className='avatar-item'>
              <Badge count={1}>
                <Avatar
                  shape='circle'
                  src='https://west-sm-files.s3.amazonaws.com/6332-files-public/employee-ad879a7d-1aec-e111-834a-002590274606.jpg'
                />
              </Badge>
            </span>
          </Menu>
        </div>
      </div>

      {/* {React.createElement(closed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: toggle,
            
          })} */}
    </Header>
  )
}

export default HeaderComponent
