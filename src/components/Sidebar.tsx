import React from "react";
import { Link } from "react-router-dom";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <aside
      className={`fixed top-0 left-0 h-screen w-64 bg-gray-800 text-white transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 xl:translate-x-0 z-50`}
    >
      {/* Close Button for Small Screens */}
      <button
        className="absolute top-4 right-4 text-white xl:hidden"
        onClick={onClose}
      >
        ✖
      </button>
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
