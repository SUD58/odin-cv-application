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
    <div id="profile" className="my-8 mr-8 rounded-xl bg-white shadow-xl">
      {/* Personal Details Section */}
      <section id="personal-details">
        <h2>Personal Details</h2>
        <p>
          Name: {personalDetails.firstName + " " + personalDetails.lastName}
        </p>
        <p>Email: {personalDetails.email}</p>
        <p>Phone Number: {personalDetails.phone}</p>
      </section>

      {/* Education Details Section */}
      <section id="education-details">
        <h2>Education Details</h2>
        {educationalExperience.map((entry) => {
          return (
            <div key={entry.id}>
              <p>Institution Name: {entry.institutionName}</p>
              <p>Title of Study: {entry.titleOfStudy}</p>
              <p>Date of Study: {entry.dateOfStudy}</p>
            </div>
          );
        })}
      </section>

      {/* Professional Experience Section */}
      <section id="professional-experience">
        <h2>Professional Experience</h2>
        {professionalExperience.map((entry) => {
          return (
            <div key={entry.id}>
              <p>Company Name: {entry.companyName}</p>
              <p>Position Title: {entry.positionTitle}</p>
              <p>Responsibilities: {entry.responsibilities}</p>
              <p>Worked From: {entry.workedFrom}</p>
              <p>Worked Till: {entry.workedTill}</p>
            </div>
          );
        })}
      </section>
    </div>
  );
}
