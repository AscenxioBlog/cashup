import React from 'react';
import { notification } from 'antd';
import { SmileOutlined } from '@ant-design/icons';

function CartNotification({ label, style, onClick, className }) {
  const [api, contextHolder] = notification.useNotification();

  const openNotification = () => {
    api.open({
      message: 'Custom Notification',
      description: 'Here is a custom notification triggered by your action!',
      icon: <SmileOutlined style={{ color: '#108ee9' }} />,
      duration: 5, // Progress bar will last for 5 seconds
      showProgress: true,
      style: {
        backgroundColor: 'white',
        border: '1px solid #108ee9',
        borderRadius: '8px',
        color: 'white',
        
      },
    });
  };

  return (
    <div>
      {contextHolder}
      <button type='primary'
        onClick={() => {
          openNotification();
          if (onClick) onClick();
        }}
        className={className}
        style={style}
      >
        {label}
      </button>
    </div>
  );
}

export default CartNotification;
