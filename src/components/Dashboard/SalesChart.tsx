import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Mock data for sales
const salesData = [
  { day: "Mon", sales: 300 },
  { day: "Tue", sales: 450 },
  { day: "Wed", sales: 200 },
  { day: "Thu", sales: 400 },
  { day: "Fri", sales: 350 },
  { day: "Sat", sales: 500 },
  { day: "Sun", sales: 600 },
];

const SalesChart: React.FC = () => {
  return (
    <div className="bg-white shadow-lg rounded p-4">
      <h2 className="text-lg font-semibold mb-4">Sales Over Time</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={salesData}>
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="sales" stroke="#8884d8" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SalesChart;
