import React from "react";
import jobportal from "./Assets/jobportal.png";
import voting from "./Assets/voting.png";
import admin from "./Assets/admin.png";
import alumnidb from "./Assets/alumnidb.png";
import contact from "./Assets/contact.png";
import ofctime from "./Assets/ofctime.png";
import Navbar from "./Components/Navbar";
import AppCard from "./Components/AppCard";

function Dashboard() {
  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6 justify-around items-center h-full p-6">
        <AppCard logo={jobportal} link="jobportal" name="Job Portal" />
        <AppCard logo={voting} link="voting" name="Voting Portal" />
        <AppCard logo={alumnidb} link="database" name="Alumni Database" />
        <AppCard logo={contact} link="contact" name="Contact Desk" />
        <AppCard logo={ofctime} link="timesheet" name="Office Timesheet" />
        <AppCard logo={admin} link="admin" name="Admin Panel" />
      </div>
    </div>
  );
}

export default Dashboard;
