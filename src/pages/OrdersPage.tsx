import React from "react";

const OrdersPage: React.FC = () => {
  const orders = [
    { id: 101, customer: "John Doe", total: "$499.99", status: "Shipped" },
    { id: 102, customer: "Jane Smith", total: "$249.99", status: "Pending" },
    { id: 103, customer: "Chris Johnson", total: "$749.99", status: "Delivered" },
  ];

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Orders</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2 text-left">Order ID</th>
              <th className="px-4 py-2 text-left">Customer</th>
              <th className="px-4 py-2 text-left">Total</th>
              <th className="px-4 py-2 text-left">Status</th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-b">
                <td className="px-4 py-2">{order.id}</td>
                <td className="px-4 py-2">{order.customer}</td>
                <td className="px-4 py-2">{order.total}</td>
                <td className="px-4 py-2">{order.status}</td>
                <td className="px-4 py-2">
                  <button className="text-blue-600 mr-2">View</button>
                  <button className="text-green-600">Update</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrdersPage;
