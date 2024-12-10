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
    <div className="flex flex-col lg:flex-row items-center justify-center h-screen">
      <div className="w-full lg:w-1/2 flex justify-center">
        <RegistrationIcon />
      </div>
      <div className="w-full lg:w-1/2 flex flex-col items-center">
        <h2 className="text-3xl text-primary font-bold">Create Account</h2>
        <Form className="w-80 bg-white p-8 shadow-lg rounded-xl mt-6" onFinish={onFinish}>
          <Form.Item name="username" rules={[{ required: true, message: "Username is required!" }]}>
            <Input prefix={<UserOutlined style={{ color: "#1E3A8A" }} />} placeholder="Username" />
          </Form.Item>
          <Form.Item name="email" rules={[{ required: true, message: "Email is required!" }, { type: "email" }]}>
            <Input prefix={<MailOutlined style={{ color: "#1E3A8A" }} />} placeholder="Email" />
          </Form.Item>
          <Form.Item name="phone" rules={[{ required: true, message: "Phone number is required!" }]}>
            <Input prefix={<MobileOutlined style={{ color: "#1E3A8A" }} />} placeholder="Phone" />
          </Form.Item>
          <Form.Item name="password" rules={[{ required: true, message: "Password is required!" }]}>
            <Input
              prefix={<LockOutlined style={{ color: "#1E3A8A" }} />}
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
            <Input prefix={<LockOutlined style={{ color: "#1E3A8A" }} />} type="password" placeholder="Confirm Password" />
          </Form.Item>
          <Button type="primary" htmlType="submit" className="w-full bg-green text-lightBlack">
            Create your account
          </Button>
        </Form>
        <p className="text-justify text-sm text-gray-600 font-sans mt-4">
         By creating an account, you agree to 
         <span className="text-blue-500"> Conditions of <br /> Use</span>
         <span className="text-black"> and</span> 
         <span className="text-blue-500"> Privacy</span>  
         <span className="text-black"> Notice</span>
        </p>


      </div>
    </div>
      <Footer/>
    </div>
  );
};

export default Registration;
