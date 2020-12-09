import React from 'react';
import { Tooltip } from 'antd';
import { EditOutlined } from '@ant-design/icons';

export default function EditButton({
  title,
  filename,
  sourcePath = 'https://github.com/tikivn/tiki-miniapp-docs',
}) {
  return (
    <Tooltip title={title}>
      <a className="edit-button" target="_blank" href={`${sourcePath}${filename}`}>
        <EditOutlined />
      </a>
    </Tooltip>
  );
}
