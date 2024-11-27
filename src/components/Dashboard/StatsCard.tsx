import React from "react";

interface StatsCardProps {
  title: string;
  value: string;
  color: string;
}

const StatsCard: React.FC<StatsCardProps> = ({ title, value, color }) => {
  return (
    <div className={`p-4 rounded shadow-lg text-white ${color}`}>
      <h3 className="text-lg">{title}</h3>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
};

export default StatsCard;
