export function ExperienceDetailsPreview({ title, data }) {
  return (
    <section className="rounded-xl bg-zinc-200 p-4 dark:bg-zinc-200">
      <div className="space-y-2">
        <h2 className="text-xl">{title}</h2>
        {data.map((entry) => (
          <div key={entry.id} className="border-b border-zinc-400 pb-2">
            {Object.entries(entry).map(
              ([key, value]) =>
                key !== "id" &&
                value && (
                  <div key={key}>
                    <span className="font-semibold">{toTitleCase(key)}:</span>{" "}
                    <span>{value}</span>
                  </div>
                ),
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

function toTitleCase(str) {
  return str
    .replace(/([a-z])([A-Z])/g, "$1 $2") // Add space between camelCase
    .replace(/^./, (str) => str.toUpperCase());
}
