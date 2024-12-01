import React, { ReactNode } from "react";
import { Footer, CommonNavBar } from "../common";

interface PageContainerProps {
  children: ReactNode;
}

const PageContainer: React.FC<PageContainerProps> = ({ children }) => {
  return (
    <div className="flex h-screen flex-col overflow-y-auto  ">
      <CommonNavBar />

      <div className="flex-1  flex-grow bg-gray-100 h-full px-2 md:px-[10%]">
        {children}
      </div>

      <Footer />
    </div>
  );
};

export default PageContainer;
