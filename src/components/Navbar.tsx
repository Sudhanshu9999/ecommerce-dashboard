import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">E-Commerce Dashboard</h1>
      <div>
        <button className="bg-blue-800 px-4 py-2 rounded">Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;
