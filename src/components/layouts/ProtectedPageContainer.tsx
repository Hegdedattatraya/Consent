import React, { ReactNode } from "react";
import { Footer, CommonNavBar } from "../common";

interface ProtectedPageContainerProps {
  children: ReactNode;
}

const ProtectedPageContainer: React.FC<ProtectedPageContainerProps> = ({
  children,
}) => {
  return (
    <div className="flex h-screen flex-col overflow-y-auto  ">
      <CommonNavBar />

      <div className="flex-1  flex-grow px-4 md:px-[10%]">{children}</div>

      <Footer />
    </div>
  );
};

export default ProtectedPageContainer;
