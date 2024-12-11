import { Form } from "./Form";

const personalDetailsInputs = [
  { label: "First Name", id: "first-name", type: "text" },
  { label: "Last Name", id: "last-name", type: "text" },
  { label: "Email", id: "email", type: "email" },
  { label: "Phone", id: "phone", type: "tel", pattern: "[0-9]{10}" },
];

const educationalExperienceInputs = [
  { label: "Institution Name", id: "institution-name", type: "text" },
  { label: "Title of Study", id: "study-title", type: "text" },
  { label: "Date of Study", id: "study-date", type: "date" },
];

const professionalExperienceInputs = [
  { label: "Company Name", id: "company-name", type: "text" },
  { label: "Position Title", id: "position-title", type: "text" },
  { label: "Responsibilities", id: "responsibilities", type: "text" },
  { label: "Worked From", id: "worked-from", type: "date" },
  { label: "Worked Till", id: "worked-till", type: "date" },
];

export function Forms() {
  return (
    <div className="no-scrollbar space-y-4 overflow-auto py-8 drop-shadow-xl">
      <Form title="Personal Details" inputs={personalDetailsInputs} />

      <Form
        title="Educational Experience"
        inputs={educationalExperienceInputs}
      />

      <Form
        title="Professional Experience"
        inputs={professionalExperienceInputs}
      />
    </div>
  );
}
