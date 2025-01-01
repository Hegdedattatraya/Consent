import React, { useState } from "react";
import { Button, Input, Select, DatePicker, Checkbox, Typography, Menu } from "antd";
import { EditOutlined, PlusOutlined } from "@ant-design/icons";

const { Title } = Typography;

const FormEditor: React.FC = () => {
  const [formFields, setFormFields] = useState<any[]>([]);

  const addField = (category: string) => {
    let newField;
    switch (category) {
      case "Client Information":
        newField = { type: category, label: "Client Information", id: Date.now() };
        break;
      case "Provider Information":
        newField = { type: category, label: "Provider Information", id: Date.now() };
        break;
      case "Medical History":
        newField = { type: category, label: "Medical History", id: Date.now() };
        break;
      default:
        newField = { type: category, label: "New Field", id: Date.now() };
    }
    setFormFields([...formFields, newField]);
  };

  const updateFieldLabel = (id: number, label: string) => {
    const updatedFields = formFields.map(field =>
      field.id === id ? { ...field, label } : field
    );
    setFormFields(updatedFields);
  };

  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr 1fr", gap: "16px", padding: "16px" }}>  
      <div className="border-r p-4">
        <h3>Search</h3>
        <Input placeholder="Search fields..." />
        <h4>Fields</h4>
        <ul className="list-none p-0">
          {["Basic Fields", "Report Information", "Client Information", "Provider Information", "Medical History"].map(category => (
            <li key={category} className="mb-2">
              <Button 
                className="w-full" 
                onClick={() => addField(category)}
              >
                {category}
              </Button>
            </li>
          ))}
        </ul>
      </div>
      <div className="p-4 border rounded-md">
        <div className="flex justify-between mb-4">
          <Title level={4}>
            Initial Assessment <EditOutlined />
          </Title>
          <Button type="primary" icon={<PlusOutlined />}>Add Logo</Button>
        </div>        
        {formFields.map(field => (
          <div key={field.id} className="border-dashed p-2 mb-2">
            <Input
              value={field.label}
              onChange={e => updateFieldLabel(field.id, e.target.value)}
              placeholder="Field Label"
            />
            {field.type === "Client Information" && (
              <div className="flex gap-2 mt-2">
                <Input placeholder="Client Name" />
                <DatePicker placeholder="DOB" />
                <Select placeholder="Gender" options={[{ label: "Male", value: "Male" }, { label: "Female", value: "Female" }]} />
              </div>
            )}
            {field.type === "Provider Information" && (
              <div className="flex gap-2 mt-2">
                <Input placeholder="Provider Name" />
                <Input placeholder="License Number" />
                <Select placeholder="Specialization" options={[{ label: "Cardiology", value: "Cardiology" }, { label: "Neurology", value: "Neurology" }]} />
              </div>
            )}
            {field.type === "Medical History" && (
              <div className="flex gap-2 mt-2">
                <Select
                  placeholder="Select Diagnosis"
                  options={[{ label: "Diabetes", value: "Diabetes" }, { label: "Hypertension", value: "Hypertension" }, { label: "Asthma", value: "Asthma" }, { label: "Other", value: "Other" }]}
                  style={{ width: "100%" }}
                />
                <DatePicker placeholder="Diagnosis Date" style={{ width: "100%" }} />
                <Select
                  placeholder="Severity"
                  options={[{ label: "Mild", value: "Mild" }, { label: "Severe", value: "Severe" }]}
                  style={{ width: "100%" }}
                />
              </div>
            )}
          </div>
        ))}

        <Button onClick={() => addField("Custom Field")} type="dashed" className="mt-4">
          Add Field
        </Button>
      </div>
      <div className="border-l p-4">
        <h4>Properties</h4>
        <Input placeholder="Label Caption" className="mb-2" />
        <Input.TextArea placeholder="Description" rows={4} className="mb-2" />
        <Select
          placeholder="Font"
          options={[{ label: "Arial", value: "Arial" }, { label: "Times New Roman", value: "Times New Roman" }]}
          className="mb-2"
        />
        <Checkbox className="mb-2">Required</Checkbox>
        <Checkbox className="mb-2">Read Only</Checkbox>
      </div>
      <div className="col-span-3 flex justify-end gap-2 mt-4">
        <Button>Edit</Button>
        <Button>Save & Close</Button>
        <Button>Save</Button>
        <Button>Print</Button>
      </div>
    </div>
  );
};

export default FormEditor;
