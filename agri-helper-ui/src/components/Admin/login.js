import React, { useState } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { ReactSession } from 'react-client-session';
import { useHistory } from "react-router-dom";

const isEmail = (email) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

export default function Login() {
  const [form] = Form.useForm();
  const [formValid, setFormValid] = useState(null);
  const [success, setSuccess] = useState(null);
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const history = useHistory();

  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    setEmailInput(emailValue);
  };

  const handlePasswordChange = (e) => {
    const passwordValue = e.target.value;
    setPasswordInput(passwordValue);
  };

  const handleSubmit = () => {
    form.validateFields().then((values) => {
      if (!values.email || !values.password) {
        setFormValid("Email and password are required.");
        return;
      }

      setFormValid(null);

      fetch(`http://localhost:8083/api/users/${emailInput}`)
        .then(response => response.json())
        .then(data => {
          const verifyEmail = data.email;
          const verifyPassword = data.password;
          const username = data.name;

          if (verifyEmail !== emailInput) {
            setFormValid("Email does not match");
          } else if (verifyPassword !== passwordInput) {
            setFormValid("Password does not match");
          } else {
            setSuccess("Form submitted successfully.");
            ReactSession.set("username", username);
            ReactSession.set("password", passwordInput);
            ReactSession.set("email", emailInput);
            if(username==='admin'){
              history.push("/admin/admin");
            }else{
              history.push("/products");
            }
            
          }
        })
        .catch(error => {
          console.log("Error:", error);
          setFormValid("An error occurred while processing the request.");
        });
    });
  };

  return (
    <div style={{ width: "350px", padding: "10px", margin: "auto" }}>
      <Form form={form}>
        <Form.Item
          name="email"
          rules={[{ required: true, message: "Please enter your email" }]}
        >
          <Input placeholder="Email Address" onChange={handleEmailChange} />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please enter your password" }]}
        >
          <Input.Password
            placeholder="Password"
            onChange={handlePasswordChange}
          />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked">
          <Checkbox>Remember Me</Checkbox>
        </Form.Item>

        <Form.Item>
          <Button type="primary" onClick={handleSubmit}>
            Login
          </Button>
        </Form.Item>
      </Form>

      {formValid && <p style={{ color: "red" }}>{formValid}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}
    </div>
  );
}
