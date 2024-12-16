export function ExperienceEntry({ entry, toTitleCase }) {
  return (
    <div
      key={entry.id}
      className="space-y-2 rounded-xl border-4 border-green-500 p-4"
    >
      {Object.entries(entry).map(
        ([detail, value]) =>
          detail !== "id" && (
            <div key={detail} className="">
              <h2 className="text-lg font-bold">
                {toTitleCase(detail)}:
                <span className="font-normal"> {value}</span>
              </h2>
            </div>
          ),
      )}
    </div>
  );
}
