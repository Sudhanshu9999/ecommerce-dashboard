import React from "react";

interface StatsCardProps {
  title: string;
  value: string | number;
  icon?: JSX.Element;
  color?: string; // Tailwind CSS color classes (e.g., "bg-blue-500")
}

const StatsCard: React.FC<StatsCardProps> = ({ title, value, icon, color = "bg-blue-500" }) => {
  return (
    <div className={`flex items-center p-4 rounded-lg shadow-md ${color} text-white`}>
      {/* Icon Section */}
      {icon && <div className="p-2 rounded-full bg-white bg-opacity-20 mr-4">{icon}</div>}

      {/* Content Section */}
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-2xl font-bold">{value}</p>
      </div>
    </div>
  );
};

export default StatsCard;
