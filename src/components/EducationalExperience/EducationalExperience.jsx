import { InputGroup } from "../InputGroup/InputGroup";

export function EducationalExperience() {
  return (
    <>
      <h2 className="text-xl font-bold">Educational Experience</h2>
      <fieldset className="grid grid-cols-3 gap-2 border-b-2 border-zinc-500 pb-4">
        <InputGroup
          label="School Name"
          id="school-name"
          type="text"
        ></InputGroup>
        <InputGroup
          label="Title of Study"
          id="study-title"
          type="text"
        ></InputGroup>
        <InputGroup
          label="Date of Study"
          id="study-date"
          type="date"
        ></InputGroup>
      </fieldset>
    </>
  );
}
