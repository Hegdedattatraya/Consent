import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import { EnvironmentOutlined, FileTextOutlined, FormOutlined, HomeOutlined, TeamOutlined, UserOutlined } from "@ant-design/icons";

const CommonSidebar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  const menuItems: { label: string; path: string; icon: JSX.Element }[] = [
    { label: "Main", path: "/main", icon: <HomeOutlined /> }, 
    { label: "Location", path: "/location", icon: <EnvironmentOutlined /> }, 
    { label: "Provider", path: "/provider", icon: <UserOutlined /> }, 
    { label: "Staff", path: "/staff", icon: <TeamOutlined /> }, 
    { label: "Sub-Practice", path: "/sub-practice", icon: <FileTextOutlined /> }, 
    { label: "Form Builder", path: "/form-builder", icon: <FormOutlined /> }, 
  ];

  return (
    <div className="flex">
      
      <div className="bg-primary text-secondary h-screen flex flex-col transition-all duration-300">
       
        <div className="p-4 font-bold text-lg border-b border-lightGray flex items-center justify-between gap-2">
          <img src="\images\logo.jpeg" alt="Logo" className="w-6 h-6 rounded-full" />
          {!collapsed && <span>Zophy Solutions</span>}
          <button
            className="text-secondary focus:outline-none"
            onClick={() => setCollapsed(!collapsed)}
          >
            {collapsed ? <FaBars size={20} /> : <RxCross1 size={20} />}
          </button>
        </div>

        
        <ul className="mt-4 flex-grow">
          {menuItems.map((item, index) => (
            <li key={index} className="p-2 hover:bg-primary">
              <NavLink
                to={item.path}
                className="flex items-center gap-2 justify-start bg-primary rounded"
              >
                <span>{item.icon}</span>
                {!collapsed && <span>{item.label}</span>}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      
      
    </div>
  );
};

export default CommonSidebar;
