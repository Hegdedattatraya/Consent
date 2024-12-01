import React, { useState } from "react";
import { Button, Form, Input } from "antd";
import { LockOutlined, UserOutlined, MailOutlined, MobileOutlined } from "@ant-design/icons";
import RegistrationIcon from "../assets/svg/RegistrationIcon";
import { CommonNavBar, Footer } from "../components/common";

const Registration = () => {
  const [password, setPassword] = useState("");

  const onFinish = (values: any) => {
    console.log(values);
  };

  return (
    <div>
      <CommonNavBar/>
    <div className="flex flex-col lg:flex-row items-center h-screen">
      <div className="hidden lg:block lg:w-1/2">
        <RegistrationIcon />
      </div>
      <div className="w-full lg:w-1/2 flex flex-col items-center">
        <h2 className="text-3xl text-primary font-bold">Create Account</h2>
        <Form className="w-80 bg-white p-8 shadow-lg rounded-xl mt-6" onFinish={onFinish}>
          <Form.Item name="username" rules={[{ required: true, message: "Username is required!" }]}>
            <Input prefix={<UserOutlined />} placeholder="Username" />
          </Form.Item>
          <Form.Item name="email" rules={[{ required: true, message: "Email is required!" }, { type: "email" }]}>
            <Input prefix={<MailOutlined />} placeholder="Email" />
          </Form.Item>
          <Form.Item name="phone" rules={[{ required: true, message: "Phone number is required!" }]}>
            <Input prefix={<MobileOutlined />} placeholder="Phone" />
          </Form.Item>
          <Form.Item name="password" rules={[{ required: true, message: "Password is required!" }]}>
            <Input
              prefix={<LockOutlined />}
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Item>
          <Form.Item
            name="confirmPassword"
            rules={[
              { required: true, message: "Confirm password is required!" },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error("Passwords do not match!"));
                },
              }),
            ]}
          >
            <Input prefix={<LockOutlined />} type="password" placeholder="Confirm Password" />
          </Form.Item>
          <Button type="primary" htmlType="submit" className="w-full bg-btnColor text-white">
            Register
          </Button>
        </Form>
      </div>
    </div>
         <Footer/>
    </div>
  );
};

export default Registration;
