import React from "react";
import StatsCard from "../components/Dashboard/StatsCard";
import SalesChart from "../components/Dashboard/SalesChart";
import StockChart from "../components/Dashboard/StockChart";
import { AiOutlineDollarCircle, AiOutlineShoppingCart, AiOutlineWarning } from "react-icons/ai";

const DashboardPage: React.FC = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <StatsCard
          title="Total Sales"
          value="$10,000"
          icon={<AiOutlineDollarCircle size={24} />}
          color="bg-green-500"
        />
        <StatsCard
          title="Orders"
          value="120"
          icon={<AiOutlineShoppingCart size={24} />}
          color="bg-blue-500"
        />
        <StatsCard
          title="Low Stock"
          value="15 items"
          icon={<AiOutlineWarning size={24} />}
          color="bg-red-500"
        />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <SalesChart />
        <StockChart />
      </div>
    </div>
  );
};

export default DashboardPage;
