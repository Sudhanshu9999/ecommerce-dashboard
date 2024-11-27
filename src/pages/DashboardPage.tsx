import React from "react";
import StatsCard from "../components/Dashboard/StatsCard";

const DashboardPage: React.FC = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      <div className="grid grid-cols-3 gap-4">
        <StatsCard title="Total Sales" value="$10,000" color="bg-green-500" />
        <StatsCard title="Orders" value="120" color="bg-blue-500" />
        <StatsCard title="Low Stock" value="15 items" color="bg-red-500" />
      </div>
    </div>
  );
};

export default DashboardPage;
