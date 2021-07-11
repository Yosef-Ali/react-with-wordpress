import React from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import { getUserName } from "../function";

const Dashboard = (props) => {
  const userName = getUserName() ? getUserName() : "";
  console.log("username:", userName);
  return (
    <DashboardLayout>
      {userName ? <h2>Welcome {userName}!!</h2> : ""}
    </DashboardLayout>
  );
};

export default Dashboard;
