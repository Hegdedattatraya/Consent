import React, { useState } from "react";
import CommonSidebar from "../components/common/CommonSidebar";
import Header from "../components/common/Header";

const Dashboard: React.FC = () => {
  return (
    <div className="flex h-screen"> 
      <CommonSidebar />
      <div className="flex-1 flex flex-col bg-secondary"> 
        <Header />  
      </div>
    </div>
  );
};

export default Dashboard;
