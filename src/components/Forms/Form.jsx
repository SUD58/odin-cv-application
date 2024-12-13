import { SaveButton } from "./SaveButton/SaveButton";
import { InputGroup } from "./InputGroup/InputGroup";
import { useEffect, useState } from "react";

export function Form({ title, inputs, onSave, profile }) {
  const [isSaved, setSaved] = useState(false);
  const [isOpen, setOpen] = useState(() => {
    const storedOpenState = localStorage.getItem(`${title} isOpen`);

    return storedOpenState !== null
      ? JSON.parse(storedOpenState)
      : title === "Personal Details";
  });

  const toCamelCase = (s) => s.replace(/-./g, (x) => x[1].toUpperCase());

  useEffect(() => {
    const profileFields = inputs.map((input) => toCamelCase(input.id));
    const hasRequiredProfileValues = profileFields.some(
      (key) => profile && profile[key],
    );
    setSaved(hasRequiredProfileValues);
  }, [inputs, profile]);

  useEffect(() => {
    console.log(title, isOpen);

    localStorage.setItem(`${title} isOpen`, isOpen);
  }, [isOpen, title]);

  function handleOpen(event) {
    console.log(isOpen);
    event.preventDefault();
    setOpen((isOpen) => !isOpen);
  }

  function handleSave(event) {
    event.preventDefault();
    if (isSaved) {
      setSaved((isSaved) => !isSaved);
      return;
    }

    onSave(event);
    setSaved((isSaved) => !isSaved);
  }

  return (
    <form onSubmit={handleSave}>
      <details
        open={isOpen}
        className="rounded-xl bg-white p-4 hover:bg-zinc-400 open:hover:bg-white dark:bg-zinc-800 dark:hover:bg-zinc-700 dark:open:hover:bg-zinc-800"
      >
        <summary
          onClick={handleOpen}
          className="cursor-pointer px-4 py-2 text-2xl font-bold"
        >
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
              value={profile ? profile[toCamelCase(input.id)] : ""}
            />
          ))}
        </fieldset>
        <SaveButton isSaved={isSaved} />
      </details>
    </form>
  );
}
