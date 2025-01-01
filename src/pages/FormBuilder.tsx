import { FormOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const FormBuilder: React.FC = () => {
  const navigate = useNavigate();
  const [forms, setForms] = useState([
    { id: "1", name: "Initial Assessment", description: "Template for initial assessments", status: "Active" },
    { id: "2", name: "Follow-up Form", description: "Template for follow-up consultations", status: "Active" },
    
  ]);

  const handleEditForm = (formId: string) => {
    navigate("/form-builder/edit/" + formId); 
  };

  const handleDeleteForm = (formId: string) => {  
    const updatedForms = forms.filter(form => form.id !== formId);
    setForms(updatedForms); 
    alert("Form with ID: " + formId + " has been deleted"); 
  };

  return (
    <div>
      <h2 className="text-justify font-bold mb-2">Form Builder</h2>
      <div className="flex items-center justify-between mb-4">
        
        <h2 className="text-lg font-semibold"><FormOutlined /> My Forms</h2>
        <button
          onClick={() => navigate("/form-builder/new")}
          className="bg-green text-secondary px-4 py-2 rounded hover:bg-green"
        >
          New Form
        </button>
      </div>
      <table className="w-full bg-secondary border border-lightGray shadow-sm rounded">
        <thead>
          <tr className="bg-lightGray">
            <th className="p-2 border">Form Name</th>
            <th className="p-2 border">Description</th>
            <th className="p-2 border">Status</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {forms.map(form => (
            <tr key={form.id}>
              <td className="p-2 border">{form.name}</td>
              <td className="p-2 border">{form.description}</td>
              <td className="p-2 border">{form.status}</td>
              <td className="p-2 border flex justify-center gap-6">
                <button
                  onClick={() => handleEditForm(form.id)}
                  className="bg-primary text-secondary px-2 py-1 rounded hover:bg-primary"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteForm(form.id)}
                  className="bg-red text-secondary px-2 py-1 rounded hover:bg-red"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FormBuilder;
