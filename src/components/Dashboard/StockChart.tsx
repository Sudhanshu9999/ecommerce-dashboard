import React from "react";
import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const stockData = [
  { product: "Laptop", stock: 50 },
  { product: "Phone", stock: 120 },
  { product: "Headphones", stock: 80 },
  { product: "Camera", stock: 30 },
  { product: "Monitor", stock: 70 },
];

const StockChart: React.FC = () => {
  return (
    <div className="bg-white shadow-lg rounded p-4">
      <h2 className="text-lg font-semibold mb-4">Stock Levels</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={stockData}>
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="product" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="stock" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StockChart;
