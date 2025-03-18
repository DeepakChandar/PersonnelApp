import React from 'react';
import { Layout } from 'antd';
import './App.css';
import MenuContainer from './components/Menu/MenuContainer';
import SideNavigation from './components/SideNavigation/SideNavigation';
import AppHeader from './components/Header/Header';

const { Content, Sider } = Layout;
const App = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <AppHeader />
      <Layout>
        <Content style={{ padding: '16px', margin: '0 16px' }}>
          <MenuContainer />
        </Content>
        <Sider width={500} style={{ background: '#fff' }}>
          <SideNavigation />
        </Sider>
      </Layout>
    </Layout>
  );
};
export default App;