import React from "react";
import { Link } from "react-router-dom";

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-gray-800 text-white h-screen">
      <nav className="p-4">
        <ul className="space-y-4">
          <li>
            <Link to="/" className="block py-2 px-4 bg-gray-700 rounded">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/products" className="block py-2 px-4 bg-gray-700 rounded">
              Products
            </Link>
          </li>
          <li>
            <Link to="/orders" className="block py-2 px-4 bg-gray-700 rounded">
              Orders
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
