import { ProfessionalExperience } from "./components/ProfessionalExperience/ProfessionalExperience";
import { EducationalExperience } from "./components/EducationalExperience/EducationalExperience";
import { PersonalDetails } from "./components/PersonalDetails/PersonalDetails";

function App() {
  return (
    <>
      <h1 className="text-2xl font-bold">CV Generator</h1>

      <PersonalDetails />

      <EducationalExperience />

      <ProfessionalExperience />
    </>
  );
}

export default App;
