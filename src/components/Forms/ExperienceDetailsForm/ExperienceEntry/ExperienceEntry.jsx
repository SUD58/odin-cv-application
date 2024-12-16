export function ExperienceEntry({ entry, toTitleCase, onRemove }) {
  function handleRemove() {
    onRemove(entry.id);
  }

  return (
    <div
      key={entry.id}
      className="flex items-start rounded-xl border-4 border-green-500 p-4"
    >
      <div className="grow space-y-2">
        {Object.entries(entry).map(
          ([detail, value]) =>
            detail !== "id" &&
            value && (
              <div key={detail}>
                <h2 className="text-lg font-bold">
                  {toTitleCase(detail)}:
                  <span className="font-normal"> {value}</span>
                </h2>
              </div>
            ),
        )}
      </div>
      <button
        type="button"
        className="fa-solid fas fas fa-minus-circle fa-xl aspect-square text-red-500"
        onClick={handleRemove}
      ></button>
    </div>
  );
}
