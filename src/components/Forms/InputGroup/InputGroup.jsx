export function InputGroup({ label, type = "text", id, pattern, value }) {
  return (
    <label className="flex flex-col gap-1" htmlFor={id}>
      {label}
      <input
        type={type}
        id={id}
        pattern={pattern}
        className="rounded-xl bg-zinc-200 px-4 py-2 outline-none focus:outline-zinc-400 disabled:cursor-not-allowed disabled:text-zinc-600 dark:bg-zinc-600 [&:user-invalid]:outline-red-500"
        defaultValue={value}
      />
    </label>
  );
}
