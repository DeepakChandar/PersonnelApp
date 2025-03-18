import React, { useState, useEffect } from 'react';
import { Avatar, List, Typography, Spin } from 'antd';

const { Title } = Typography;

const SideNavigation = () => {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStories = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5002/api/readings/');
        const data = await response.json();
        setStories(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching stories:', error);
        setLoading(false);
      }
    };

    fetchStories();
  }, []);
  if (loading) {
    return <Spin size="large" />;
  }

  return (
    <div style={{ padding: '0 16px' }} >
      <Title level={3}>Interesting Read</Title>
      <div style={{ height: '400px', overflow: 'auto', border: '1px solid #e8e8e8', borderRadius: '4px', padding: '0 16px' }}>
        <List
          itemLayout="vertical"
          dataSource={stories}
          renderItem={item => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src="https://randomuser.me/api/portraits/women/11.jpg" />}
                title={<a href={item.link}>{item.title}</a>}
                description={item.site}
              />
            </List.Item>
          )}
        />
      </div>
    </div>
  );
};

export default SideNavigation;