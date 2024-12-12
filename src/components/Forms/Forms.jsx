import { useState } from "react";
import { Form } from "./Form";

const personalDetailsInputs = [
  { label: "First Name", id: "first-name", type: "text", isRequired: true },
  { label: "Last Name", id: "last-name", type: "text", isRequired: true },
  { label: "Email", id: "email", type: "email", isRequired: true },
  {
    label: "Phone",
    id: "phone",
    type: "tel",
    pattern: "[0-9]{10}",
    isRequired: true,
  },
];

const educationalExperienceInputs = [
  {
    label: "Institution Name",
    id: "institution-name",
    type: "text",
    isRequired: true,
  },
  {
    label: "Title of Study",
    id: "study-title",
    type: "text",
    isRequired: true,
  },
  { label: "Date of Study", id: "study-date", type: "date", isRequired: true },
];

const professionalExperienceInputs = [
  { label: "Company Name", id: "company-name", type: "text", isRequired: true },
  {
    label: "Position Title",
    id: "position-title",
    type: "text",
    isRequired: true,
  },
  {
    label: "Responsibilities",
    id: "responsibilities",
    type: "text",
    isRequired: true,
  },
  { label: "Worked From", id: "worked-from", type: "date", isRequired: true },
  { label: "Worked Till", id: "worked-till", type: "date", isRequired: true },
];

export function Forms() {
  const [profile, setProfile] = useState({});
  const [isSaved, setSaved] = useState(false);

  const toCamelCase = (s) => s.replace(/-./g, (x) => x[1].toUpperCase());

  function handleSave(event) {
    if (isSaved) {
      event.preventDefault();
      setSaved((isSaved) => !isSaved);
      return;
    }

    event.preventDefault();

    const inputs = event.target.querySelectorAll("input");
    const newProfile = {};

    inputs.forEach((input) => {
      const camelisedId = toCamelCase(input.id);
      newProfile[camelisedId] = input.value;
    });

    setProfile({ ...profile, ...newProfile });
    setSaved((isSaved) => !isSaved);
  }

  return (
    <div className="no-scrollbar space-y-4 overflow-auto py-8 drop-shadow-xl">
      <Form
        title="Personal Details"
        inputs={personalDetailsInputs}
        onSave={handleSave}
        isSaved={isSaved}
      />

      <Form
        title="Educational Experience"
        inputs={educationalExperienceInputs}
        onSave={handleSave}
        isSaved={isSaved}
      />

      <Form
        title="Professional Experience"
        inputs={professionalExperienceInputs}
        onSave={handleSave}
        isSaved={isSaved}
      />
    </div>
  );
}
