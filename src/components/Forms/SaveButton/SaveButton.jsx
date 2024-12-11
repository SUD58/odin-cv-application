export function SaveButton({ isSaved }) {
  return (
    <button
      type="submit"
      className="mt-4 flex items-center gap-2 rounded-full bg-green-300 px-4 py-2 font-bold hover:bg-green-600"
    >
      {isSaved ? "Unsave" : "Save"}
      <i className="fa-solid fa-check text-green-800"></i>
    </button>
  );
}
