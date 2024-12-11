import { Forms } from "./components/Forms/Forms";
import Preview from "./components/Preview/Preview";

function App() {
  return (
    <>
      <div className="ml-8 mt-8 flex h-1/2 flex-col justify-between self-start rounded-xl bg-white p-4 pt-2 dark:bg-zinc-800">
        <div>
          <h1 className="text-2xl font-bold">CV Generator</h1>
          <h2 className="w-[20ch] text-xl font-bold">
            Please enter your details to generate your CV
          </h2>
        </div>
        <p>
          CV Generator by{" "}
          <a
            href="https://github.com/SUD58"
            target="_blank"
            className="text-sky-600 underline hover:no-underline"
          >
            Suhrud Shringarputale
          </a>
        </p>
      </div>

      <Forms />

      <Preview />
    </>
  );
}

export default App;
