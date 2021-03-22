import {Layout, Menu} from 'antd'
import {
  UserOutlined,
  LaptopOutlined,
  BellOutlined,
  FileOutlined,
  NotificationOutlined,
} from '@ant-design/icons'
const {Sider} = Layout
const {SubMenu} = Menu

function SidebarComponent({toggleClosed}) {
  return (
    <Sider trigger={null} collapsible collapsed={toggleClosed}>
      <div className='logo'>
        <img src='https://brunopaula.com/images/logo-white.png' alt='' />
      </div>
      <Menu theme='dark' mode='inline' defaultSelectedKeys={['1']}>
        <SubMenu key='sub1' icon={<UserOutlined />} title='Account'>
          <Menu.Item key='1'>Account List</Menu.Item>
          <Menu.Item key='2'>Activities</Menu.Item>
          <Menu.Item key='3'>Billing</Menu.Item>
          <Menu.Item key='4'>Tags</Menu.Item>
        </SubMenu>
        <SubMenu key='sub2' icon={<BellOutlined />} title='Leads'>
          <Menu.Item key='5'>option5</Menu.Item>
          <Menu.Item key='6'>option6</Menu.Item>
          <Menu.Item key='7'>option7</Menu.Item>
          <Menu.Item key='8'>option8</Menu.Item>
        </SubMenu>
        <SubMenu key='sub3' icon={<FileOutlined />} title='Orders'>
          <Menu.Item key='9'>option9</Menu.Item>
          <Menu.Item key='10'>option10</Menu.Item>
          <Menu.Item key='11'>option11</Menu.Item>
          <Menu.Item key='12'>option12</Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  )
}

export default SidebarComponent
