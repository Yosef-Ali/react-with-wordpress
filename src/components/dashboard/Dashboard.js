import React from "react";
import DashboardLayout from "./../layouts/DashboardLayout";
import { getUserName } from "../function";

const Dashboard = () => {
  const userName = getUserName() ? getUserName() : "";

  return (
    <DashboardLayout>
      {userName ? <h2>Welcome {userName}!!</h2> : ""}
    </DashboardLayout>
  );
};

export default Dashboard;
