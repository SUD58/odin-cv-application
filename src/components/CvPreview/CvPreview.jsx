import { useState, useEffect } from "react";
import { ExperienceDetailsPreview } from "./ExperienceDetailsPreview/ExperienceDetailsPreview";

export default function CvPreview() {
  const [profile, setProfile] = useState(() => {
    // Load initial profile from localStorage
    const storedProfile = localStorage.getItem("profile");
    return storedProfile ? JSON.parse(storedProfile) : {};
  });

  const personalDetails = profile.personalDetails;
  const educationalExperience = profile.educationalExperience;
  const professionalExperience = profile.professionalExperience;

  useEffect(() => {
    // Event listener for the custom 'storageUpdate' event
    const handleStorageUpdate = () => {
      const storedProfile = localStorage.getItem("profile");
      setProfile(storedProfile ? JSON.parse(storedProfile) : {});
    };

    // Listen for the custom event
    window.addEventListener("storageUpdate", handleStorageUpdate);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener("storageUpdate", handleStorageUpdate);
    };
  }, []);

  return (
    <div
      id="profile"
      className="my-8 mr-8 flex flex-col gap-4 rounded-xl bg-white p-4"
    >
      <h1 className="text-2xl font-bold">Generated CV</h1>

      {/* Personal Details Section */}
      <section
        className="rounded-xl bg-zinc-200 p-4 dark:bg-zinc-200"
        id="personal-details"
      >
        {personalDetails && (
          <>
            <h2 className="text-xl">Personal Details</h2>
            <div>
              <span className="font-semibold">Name:</span>{" "}
              <span>
                {personalDetails.firstName + " " + personalDetails.lastName}
              </span>
            </div>
            <div>
              <span className="font-semibold">Email:</span>{" "}
              <span>{personalDetails.email}</span>
            </div>
            <div>
              <span className="font-semibold">Phone Number:</span>{" "}
              <span>{personalDetails.phone}</span>
            </div>
          </>
        )}
      </section>

      {/* Education Details Section */}
      <ExperienceDetailsPreview
        title="Education Details"
        data={educationalExperience}
      />

      {/* Professional Experience Section */}
      <ExperienceDetailsPreview
        title="Professional Experience"
        data={professionalExperience}
      />
    </div>
  );
}
