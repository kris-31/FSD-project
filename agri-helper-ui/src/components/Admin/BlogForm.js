import React, { useState } from 'react';
import { Button, Form, Input, Space } from 'antd';
import './blogform.css';

const layout = {
  labelCol: {
    span: 9,
  },
  wrapperCol: {
    span: 16,
  },
};

const validateMessages = {
  required: '${label} is required!',
};

const BlogForm = () => {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const [url, setURL] = useState('');

  const handleSubmit = (values) => {
    console.log(values);
    const blog = {
      title: values.user.title,
      image: values.user.image,
      description: values.user.description,
      url: values.user.url,
    };
    createBlogForm(blog);
  };
const clearinpn=() =>{
  // Clear input fields
  setTitle("");
  setImage("");
  setDescription("");
  setURL("");
}
  const createBlogForm = async (data) => {
    try {
      const URL = 'http://localhost:8082/api/blogs';
      const response = await fetch(URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      console.log('Success:', result);
      clearinpn();
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="space-align-container">
      <div className="space-align-block">
        <Space align="center">
          <Form
            {...layout}
            name="nest-messages"
            onFinish={handleSubmit}
            style={{
              maxWidth: 600,
            }}
            validateMessages={validateMessages}
          >
            <Form.Item name={['user', 'title']} label="Title" rules={[{ required: true }]}>
              <Input value={title} onChange={(e) => setTitle(e.target.value)} />
            </Form.Item>
            <Form.Item name={['user', 'image']} label="Image" rules={[{ required: true }]}>
              <Input value={image} onChange={(e) => setImage(e.target.value)} />
            </Form.Item>
            <Form.Item
              name={['user', 'description']}
              label="Description"
              rules={[{ required: true }]}
            >
              <Input.TextArea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Item>
            <Form.Item name={['user', 'url']} label="URL" rules={[{ required: true }]}>
              <Input value={url} onChange={(e) => setURL(e.target.value)} />
            </Form.Item>
            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Space>
      </div>
    </div>
  );
};

export default BlogForm;
