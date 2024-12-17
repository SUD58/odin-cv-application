export function AddButton() {
  return (
    <button
      type="submit"
      className="ml-4 mt-4 flex items-center gap-2 rounded-full bg-green-300 px-4 py-2 font-bold hover:bg-green-600"
    >
      Add
      <i className="fa-solid fa-plus text-green-800"></i>
    </button>
  );
}
