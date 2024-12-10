import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import { Link } from "react-router-dom";
import LoginPageIcon from "../assets/svg/LoginPageIcon";
import { CommonNavBar, Footer } from "../components/common";


const Login = () => {
  const onFinish = (values: { username: string; password: string }) => {
    console.log(values);
  };

  return (
    <div>
      <CommonNavBar/>
    <div className="flex flex-col lg:flex-row items-center justify-center h-screen">
      <div className="w-full lg:w-1/2 flex justify-center">
        <LoginPageIcon />
      </div>
      <div className="w-full lg:w-1/2 flex flex-col items-center">
        <h2 className="text-3xl text-primary font-bold">Login</h2>
        <Form className="w-80 bg-white p-8 shadow-lg rounded-xl mt-6" onFinish={onFinish}>
          <Form.Item name="username" rules={[{ required: true, message: "Username is required!" }]}>
            <Input prefix={<UserOutlined style={{ color: "#1E3A8A" }} />} placeholder="Username"/>
          </Form.Item>
          <Form.Item name="password" rules={[{ required: true, message: "Password is required!" }]}>
            <Input prefix={<LockOutlined style={{ color: "#1E3A8A" }} />} type="password" placeholder="Password" />
          </Form.Item>
          <Button type="primary" htmlType="submit" className="w-full bg-green text-lightBlack">
            Login
          </Button>
          
          <div className="flex justify-between  mt-4">
          <Link to="/register">Register</Link>
          <Link to="/forgot-password">Forgot Password?</Link>
          </div>


          
        </Form>
        
      </div>
    </div>
      <Footer/>
    </div>
  );
};

export default Login;
