import React from "react";
import { FaUser, FaChartLine, FaCogs } from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50 p-6">
      <h1 className="text-4xl font-bold text-blue-700 text-center mb-10">Welcome to Stackvil Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl shadow-xl p-6 transform hover:scale-105 hover:shadow-2xl transition duration-300 border border-blue-100">
          <div className="flex items-center gap-4">
            <FaUser className="text-blue-600 text-3xl" />
            <div>
              <h2 className="text-xl font-semibold">User Info</h2>
              <p className="text-sm text-gray-500">View and manage user profiles</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-6 transform hover:scale-105 hover:shadow-2xl transition duration-300 border border-blue-100">
          <div className="flex items-center gap-4">
            <FaChartLine className="text-blue-600 text-3xl" />
            <div>
              <h2 className="text-xl font-semibold">Analytics</h2>
              <p className="text-sm text-gray-500">See performance stats</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-6 transform hover:scale-105 hover:shadow-2xl transition duration-300 border border-blue-100">
          <div className="flex items-center gap-4">
            <FaCogs className="text-blue-600 text-3xl" />
            <div>
              <h2 className="text-xl font-semibold">Settings</h2>
              <p className="text-sm text-gray-500">Adjust preferences</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center">
        <p className="text-sm text-gray-500">© 2025 Stackvil Solutions. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Dashboard;
