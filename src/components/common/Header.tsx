import React, { useState } from "react";
import FormBuilder from "../../pages/FormBuilder";

const Header: React.FC = () => {
  const tabs: { label: string; key: string }[] = [
    { label: "Practice Insurance", key: "practice-insurance" },
    { label: "Practice Procedure Code", key: "practice-procedure-code" },
    { label: "Insurance Service", key: "insurance-service" },
    { label: "Self-Paid Service", key: "self-paid-service" },
    { label: "Non-Billable Service", key: "non-billable-service" },
    { label: "Referring Physician", key: "referring-physician" },
    { label: "Form Builder", key: "form-builder" },
  ];

  const [activeTab, setActiveTab] = useState<string>("form-builder");

  const renderContent = () => {
    switch (activeTab) {
      case "practice-insurance":
        return <div>details...</div>;
      case "practice-procedure-code":
        return <div>details...</div>;
      case "insurance-service":
        return <div>details...</div>;
      case "self-paid-service":
        return <div>details...</div>;
      case "non-billable-service":
        return <div>details...</div>;
      case "referring-physician":
        return <div>details...</div>;
      case "form-builder":
        return <FormBuilder />;
      default:
        return <div>Select a tab to view content</div>;
    }
  };

  return (
    <div className="flex flex-col">
      <div className="bg-Gray p-4 flex gap-4 md:flex">
        {tabs.map((tab) => {
          let className = "px-4 py-2 rounded cursor-pointer";
          if (activeTab === tab.key) {
            className += " border-b-2 border-primary";
          }

          return (
            <div
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={className}
            >
              {tab.label}
            </div>
          );
        })}
      </div>
      <div className="p-4 bg-white shadow mt-4 rounded">
        {renderContent()}
      </div>
    </div>
  );
};

export default Header;
