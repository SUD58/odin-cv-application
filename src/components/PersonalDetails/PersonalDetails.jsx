import { InputGroup } from "../InputGroup/InputGroup";

export function PersonalDetails() {
  return (
    <>
      <h2 className="text-xl font-bold">Personal Details</h2>
      <fieldset className="grid grid-cols-3 gap-2 border-b-2 border-zinc-500 pb-4">
        <InputGroup label="Name"></InputGroup>
        <InputGroup label="Email" type="email" id="email"></InputGroup>
        <InputGroup
          label="Phone Number"
          type="tel"
          id="phone"
          pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
        ></InputGroup>
      </fieldset>
    </>
  );
}
