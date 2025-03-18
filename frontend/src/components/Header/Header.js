import React from 'react';
import { Layout, Row, Col, Space, Input } from 'antd';
import { LinkedinOutlined, BellOutlined, MessageOutlined, UserOutlined, SearchOutlined } from '@ant-design/icons';

const { Header } = Layout;

const LinkedinLink = {
  icon: <LinkedinOutlined />,
  label: (
    <a href="https://www.linkedin.com/in/deepak-chandar-profile/" target="_blank" rel="noopener noreferrer">
      Linkedin
    </a>
  ),
};

const AppHeader = () => {
  return (
    <Header style={{ backgroundColor: '#fff', padding: 0 }}>
      <Row justify="space-between" align="middle" style={{ padding: '0px 20px' }}>
        <Col>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            {/* <img 
              src="/logo.png" 
              alt="Logo" 
              style={{ height: 40, marginRight: 10 }} 
            /> */}
            <h2 style={{ margin: 0, color: '#607d8b' }}>DC Deepak Chandar</h2>
            <Input.Search
              placeholder="Search..."
              style={{ width: 250, marginLeft: 20 }}
              prefix={<SearchOutlined />}
            />
          </div>
        </Col>
        <Col>
          <Space size="large">
            <LinkedinOutlined style={{ fontSize: 20 }} />
            <BellOutlined style={{ fontSize: 20 }} />
            <MessageOutlined style={{ fontSize: 20 }} />
            <UserOutlined style={{ fontSize: 20 }} />
          </Space>
        </Col>
      </Row>
    </Header>
  );
};

export default AppHeader;