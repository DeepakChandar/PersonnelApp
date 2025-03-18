import React, { useState } from 'react';
import { Menu } from 'antd';
import ProfessionalSummary from './ProfessionalSummary';
import Stories from './Stories';
import SkillSet from './SkillSet';
import WorkSummary from './WorkSummary';
import LinkedinLink from './LinkedinLink';
import ProfessionalSummaryContent from './Content/ProfessionalSummaryContent';
import StoriesContent from './Content/StoriesContent';
import SkillSetContent from './Content/SkillSetContent';
import WorkSummaryContent from './Content/WorkSummaryContent';
import LinkedinLinkContent from './Content/LinkedinLinkContent';

const MenuContainer = () => {
  const [current, setCurrent] = useState('stories');

  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  const items = [
    Stories,
    ProfessionalSummary,
    SkillSet,
    WorkSummary,
    LinkedinLink
  ];

  // Render content based on selected menu item
  const renderContent = () => {
    switch (current) {
      case 'stories':
        return <StoriesContent />;
      case 'mail':
        return <ProfessionalSummaryContent />;
      case 'app':
        return <SkillSetContent />;
      case 'setting:1':
      case 'setting:2':
      case 'setting:3':
      case 'setting:4':
      case 'SubMenu':
        return <WorkSummaryContent />;
      case 'linkedin':
        return <LinkedinLinkContent />;
      default:
        return <StoriesContent />;
    }
  };

  return (
    <div>
      <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
      <div style={{ marginTop: '10px', padding: '24px', background: '#fff', minHeight: 500 }}>
        {renderContent()}
      </div>
    </div>
  );
};

export default MenuContainer;