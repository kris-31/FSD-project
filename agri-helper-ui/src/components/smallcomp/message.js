import {
    BorderBottomOutlined,
    BorderTopOutlined,
    RadiusBottomleftOutlined,
    RadiusBottomrightOutlined,
    RadiusUpleftOutlined,
    RadiusUprightOutlined,
  } from '@ant-design/icons';
  import { Button, Divider, Space, notification } from 'antd';
  const Showmessage = () => {
    const [api, contextHolder] = notification.useNotification();
    const openNotification = (placement) => {
      api.info({
        message: `Notification ${placement}`,
        description:
          ' Login Success .',
        placement,
      });
    };
    return (
      <>
        {contextHolder}
        <Space>
          <Button type="primary" onClick={() => openNotification('top')} icon={<BorderTopOutlined />}>
            top
          </Button>
          <Button
            type="primary"
            onClick={() => openNotification('bottom')}
            icon={<BorderBottomOutlined />}
          >
            bottom
          </Button>
        </Space>
        
        <Space>
          
          <Button
            type="primary"
            onClick={() => openNotification('bottomRight')}
            icon={<RadiusBottomrightOutlined />}
          >
            bottomRight
          </Button>
        </Space>
      </>
    );
  };
  export default Showmessage;