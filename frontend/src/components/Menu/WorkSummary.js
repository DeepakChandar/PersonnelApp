import React from 'react';
import { LaptopOutlined } from '@ant-design/icons';

const WorkSummary = {
  label: 'Work Summary',
  key: 'SubMenu',
  icon: <LaptopOutlined />,
  children: [
    {
      type: 'group',
      label: '2019-2025',
      children: [
        {
          label: 'job1',
          key: 'setting:1',
        }

      ],
    },
    {
      type: 'group',
      label: '2016-2019',
      children: [
        {
          label: 'job2',
          key: 'setting:3',
        }
      ],
    },
    {
      type: 'group',
      label: '2011-2016',
      children: [
        {
          label: 'job3',
          key: 'setting:3',
        }
      ],
    },
    {
      type: 'group',
      label: '2006-2011',
      children: [
        {
          label: 'job4',
          key: 'setting:3',
        }
      ],
    }
  ],
};

export default WorkSummary;