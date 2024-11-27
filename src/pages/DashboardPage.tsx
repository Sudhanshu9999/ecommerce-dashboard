import React from "react";
import SalesChart from "../components/Dashboard/SalesChart";
import StockChart from "../components/Dashboard/StockChart";

const DashboardPage: React.FC = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      {/* Dynamic Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <SalesChart />
        <StockChart />
      </div>
    </div>
  );
};

export default DashboardPage;
