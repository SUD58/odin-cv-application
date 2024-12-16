import React, { useState, useEffect } from "react";

export default function Preview() {
  const [profile, setProfile] = useState(() => {
    // Load initial profile from localStorage
    const storedProfile = localStorage.getItem("profile");
    return storedProfile ? JSON.parse(storedProfile) : {};
  });

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
        <p>Name: {profile.firstName + " " + profile.lastName}</p>
        <p>Email: {profile.email}</p>
        <p>Phone Number: {profile.phone}</p>
      </section>

      {/* Education Details Section */}
      <section id="education-details">
        <h2>Education Details</h2>
        <p>Institution Name: {profile.institutionName}</p>
        <p>Title of Study: {profile.titleOfStudy}</p>
        <p>Date of Study: {profile.dateOfStudy}</p>
      </section>

      {/* Professional Experience Section */}
      <section id="professional-experience">
        <h2>Professional Experience</h2>
        <p>Company Name: {profile.companyName}</p>
        <p>Position Title: {profile.positionTitle}</p>
        <p>Responsibilities: {profile.responsibilities}</p>
        <p>Worked From: {profile.workedFrom}</p>
        <p>Worked Till: {profile.workedTill}</p>
      </section>
    </div>
  );
}
