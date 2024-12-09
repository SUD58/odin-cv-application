import { InputGroup } from "../InputGroup/InputGroup";

export function ProfessionalExperience() {
  return (
    <>
      <h2 className="text-xl font-bold">Practical Experience</h2>
      <fieldset className="grid grid-cols-3 gap-2 border-b-2 border-zinc-500 pb-4">
        <InputGroup
          label="Company Name"
          id="company-name"
          type="text"
        ></InputGroup>
        <InputGroup
          label="Position Title"
          id="position-title"
          type="text"
        ></InputGroup>
        <InputGroup
          label="Responsibilities"
          id="responsibilities"
          type="text"
        ></InputGroup>
        <InputGroup
          label="Worked From"
          id="worked-from"
          type="date"
        ></InputGroup>
        <InputGroup
          label="Worked Till"
          id="worked-till"
          type="date"
        ></InputGroup>
      </fieldset>
    </>
  );
}
