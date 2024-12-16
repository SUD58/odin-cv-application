import { InputGroup } from "../InputGroup/InputGroup";
import { AddButton } from "../AddButton/AddButton";
import { ExperienceEntry } from "./ExperienceEntry/ExperienceEntry.jsx";
import { useEffect, useState } from "react";

export function ExperienceDetailsForm({
  title,
  section,
  inputs,
  onAdd,
  onRemove,
  profile,
}) {
  const [isOpen, setOpen] = useState(() => {
    const storedOpenState = localStorage.getItem(`${title} isOpen`);

    return storedOpenState !== null ? JSON.parse(storedOpenState) : false;
  });

  const toCamelCase = (s) => s.replace(/-./g, (x) => x[1].toUpperCase());

  const toTitleCase = (camelCase) =>
    // Insert a space before all capital letters, capitalize the first letter, and lowercase the rest
    camelCase
      .replace(/([A-Z])/g, " $1") // Add space before uppercase letters
      .replace(/^./, (str) => str.toUpperCase()) // Capitalize the first letter
      .trim(); // Remove leading/trailing spaces

  useEffect(() => {
    localStorage.setItem(`${title} isOpen`, isOpen);
  }, [isOpen, title]);

  function handleOpen(event) {
    event.preventDefault();
    setOpen((isOpen) => !isOpen);
  }

  function handleAdd(event) {
    event.preventDefault();
    onAdd(event, section);
  }

  function handleRemove(entryId) {
    onRemove(entryId, section);
  }

  return (
    <form onSubmit={handleAdd}>
      <details
        open={isOpen}
        className="space-y-4 rounded-xl bg-white p-4 hover:bg-zinc-400 open:hover:bg-white dark:bg-zinc-800 dark:hover:bg-zinc-700 dark:open:hover:bg-zinc-800"
      >
        <summary
          onClick={handleOpen}
          className="cursor-pointer px-4 py-2 text-2xl font-bold"
        >
          {title}
        </summary>
        {profile && profile.length > 0 && (
          <>
            <details className="space-y-2 rounded-lg bg-zinc-200 p-2 hover:bg-zinc-400 open:hover:bg-zinc-200 dark:bg-zinc-400 dark:hover:bg-zinc-700 dark:open:hover:bg-zinc-400">
              <summary className="cursor-pointer">Existing Entries</summary>
              {profile &&
                profile.map((entry) => {
                  return (
                    <ExperienceEntry
                      key={entry.id}
                      entry={entry}
                      toTitleCase={toTitleCase}
                      onRemove={handleRemove}
                    />
                  );
                })}
            </details>
          </>
        )}
        <fieldset className="space-y-3">
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
        <AddButton />
      </details>
    </form>
  );
}
