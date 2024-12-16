import { useEffect, useState } from "react";
import { PersonalDetailsForm } from "./PersonalDetailsForm/PersonalDetailsForm";
import { ExperienceDetailsForm } from "./ExperienceDetailsForm/ExperienceDetailsForm";

const personalDetailsInputs = [
  { label: "First Name", id: "first-name", type: "text" },
  { label: "Last Name", id: "last-name", type: "text" },
  { label: "Email", id: "email", type: "email" },
  {
    label: "Phone",
    id: "phone",
    type: "tel",
    pattern: "[0-9]{10}",
  },
];

const educationalExperienceInputs = [
  {
    label: "Institution Name",
    id: "institution-name",
    type: "text",
  },
  {
    label: "Title of Study",
    id: "study-title",
    type: "text",
  },
  { label: "Date of Study", id: "study-date", type: "date" },
];

const professionalExperienceInputs = [
  { label: "Company Name", id: "company-name", type: "text" },
  {
    label: "Position Title",
    id: "position-title",
    type: "text",
  },
  {
    label: "Responsibilities",
    id: "responsibilities",
    type: "text",
  },
  { label: "Worked From", id: "worked-from", type: "date" },
  { label: "Worked Till", id: "worked-till", type: "date" },
];

export function Forms() {
  const [profile, setProfile] = useState(() => {
    const storedProfile = localStorage.getItem("profile");

    if (storedProfile) {
      return JSON.parse(storedProfile);
    } else {
      return {};
    }
  });

  useEffect(() => {
    localStorage.setItem("profile", JSON.stringify(profile));
    window.dispatchEvent(new Event("storageUpdate"));
  }, [profile]);

  const toCamelCase = (s) => s.replace(/-./g, (x) => x[1].toUpperCase());

  function handleSave(event, section) {
    const inputs = event.target.querySelectorAll("input");
    const newProfile = {};
    newProfile[section] = {};

    inputs.forEach((input) => {
      const camelisedId = toCamelCase(input.id);
      newProfile[section][camelisedId] = input.value;
    });

    setProfile({ ...profile, ...newProfile });
  }

  function handleAdd(event, section) {
    const form = event.target.closest("form");
    const inputs = form.querySelectorAll("input");

    const newProfile = { ...profile };
    if (!newProfile[section]) {
      newProfile[section] = [];
    }
    const index = newProfile[section].length;
    const newEntry = { id: index };

    inputs.forEach((input) => {
      const camelisedId = toCamelCase(input.id);
      newEntry[camelisedId] = input.value;
    });

    newProfile[section].push(newEntry);

    setProfile({ ...newProfile });
  }

  return (
    <div className="no-scrollbar space-y-4 overflow-auto py-8 drop-shadow-xl">
      <PersonalDetailsForm
        title="Personal Details"
        section="personalDetails"
        inputs={personalDetailsInputs}
        onSave={handleSave}
        profile={profile.personalDetails}
      />

      <ExperienceDetailsForm
        title="Educational Experience"
        section="educationalExperience"
        inputs={educationalExperienceInputs}
        onAdd={handleAdd}
        profile={profile.educationalExperience}
      />

      <ExperienceDetailsForm
        title="Professional Experience"
        section="professionalExperience"
        inputs={professionalExperienceInputs}
        onAdd={handleAdd}
        profile={profile.professionalExperience}
      />
    </div>
  );
}
