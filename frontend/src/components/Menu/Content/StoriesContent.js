import React, { useState, useEffect } from 'react';
import { List, Typography, Spin } from 'antd';

const { Title } = Typography;

const StoriesContent = () => {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStories = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5003/api/stories/');
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
    <div>
      <Title level={2}>Stories</Title>
      <div style={{ height: '400px', overflow: 'auto', border: '1px solid #e8e8e8', borderRadius: '4px', padding: '0 16px' }}>
        <List
          itemLayout="vertical"
          dataSource={stories}
          renderItem={item => (
            <List.Item>
              <List.Item.Meta
                title={item.title}
                description={item.description}
              />
            </List.Item>
          )}
        />
      </div>
    </div>
  );
};

export default StoriesContent;