import { SaveButton } from "./SaveButton/SaveButton";
import { InputGroup } from "./InputGroup/InputGroup";
import { useState } from "react";

export function Form({ title, inputs, onSave }) {
  const [isSaved, setSaved] = useState(false);

  function handleSave(event) {
    event.preventDefault();
    if (isSaved) {
      event.preventDefault();
      setSaved((isSaved) => !isSaved);
      return;
    }

    onSave(event);
    setSaved((isSaved) => !isSaved);
  }

  return (
    <form onSubmit={handleSave}>
      <details
        open={title === "Personal Details"}
        className="rounded-xl bg-white p-4 hover:bg-zinc-400 open:hover:bg-white dark:bg-zinc-800 dark:hover:bg-zinc-700 dark:open:hover:bg-zinc-800"
      >
        <summary className="cursor-pointer px-4 py-2 text-2xl font-bold">
          {title}
        </summary>
        <fieldset disabled={isSaved} className="space-y-3">
          {inputs.map((input, index) => (
            <InputGroup
              key={index}
              label={input.label}
              id={input.id}
              type={input.type}
              pattern={input.pattern}
              isRequired={input.isRequired}
            />
          ))}
        </fieldset>
        <SaveButton isSaved={isSaved} />
      </details>
    </form>
  );
}
