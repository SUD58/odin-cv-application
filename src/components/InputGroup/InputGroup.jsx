export function InputGroup({ label, type, id, pattern }) {
  return (
    <label className="flex flex-col gap-1" htmlFor={id}>
      {label}
      <input
        type={type}
        id={id}
        pattern={pattern}
        className="rounded-full bg-zinc-800 px-4 py-2 outline-none invalid:outline-red-500 focus:outline-zinc-400"
      />
    </label>
  );
}
