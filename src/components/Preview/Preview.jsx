import { useState, useEffect } from "react";

export default function Preview() {
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
    <div id="profile" className="shadow- my-8 mr-8 rounded-xl bg-white p-4">
      <h1 className="text-2xl font-bold">Generated CV</h1>
      {/* Personal Details Section */}
      <section id="personal-details">
        {personalDetails && (
          <>
            <h2>Personal Details</h2>
            <p>
              Name: {personalDetails.firstName + " " + personalDetails.lastName}
            </p>
            <p>Email: {personalDetails.email}</p>
            <p>Phone Number: {personalDetails.phone}</p>
          </>
        )}
      </section>

      {/* Education Details Section */}
      <section id="education-details">
        {educationalExperience && educationalExperience.length > 0 && (
          <>
            <h2>Education Details</h2>
            {educationalExperience.map((entry) => (
              <div key={entry.id}>
                <p>Institution Name: {entry.institutionName}</p>
                <p>Title of Study: {entry.studyTitle}</p>
                <p>Date of Study: {entry.studyDate}</p>
              </div>
            ))}
          </>
        )}
      </section>

      {/* Professional Experience Section */}
      <section id="professional-experience">
        {professionalExperience && professionalExperience.length > 0 && (
          <>
            <h2>Professional Experience</h2>
            {professionalExperience.map((entry) => (
              <div key={entry.id}>
                <p>Company Name: {entry.companyName}</p>
                <p>Position Title: {entry.positionTitle}</p>
                <p>Responsibilities: {entry.responsibilities}</p>
                <p>Worked From: {entry.workedFrom}</p>
                <p>Worked Till: {entry.workedTill}</p>
              </div>
            ))}
          </>
        )}
      </section>
    </div>
  );
}
