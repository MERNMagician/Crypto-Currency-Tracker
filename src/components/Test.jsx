import React from "react";

const Table = () => {
  const data = [
    { id: 1, name: "Alice Johnson", email: "alice@example.com", role: "Admin" },
    { id: 2, name: "Bob Smith", email: "bob@example.com", role: "User" },
    {
      id: 3,
      name: "Charlie Brown",
      email: "charlie@example.com",
      role: "Moderator",
    },
  ];

  return (
    <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
      <thead className="bg-gray-900 text-white">
        <tr>
          <th className="p-3">ID</th>
          <th className="p-3">Name</th>
          <th className="p-3">Email</th>
          <th className="p-3">Role</th>
        </tr>
      </thead>
      <tbody>
        {data.map((user) => (
          <tr key={user.id} className="text-center border-b hover:bg-gray-100">
            <td className="p-3">{user.id}</td>
            <td className="p-3">{user.name}</td>
            <td className="p-3">{user.email}</td>
            <td className="p-3">{user.role}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
import React from "react";
import Table from "../components/Table";

const Dashboard = () => {
  return (
    <div className="p-5">
      <h2 className="text-xl font-semibold mb-4">User Management</h2>
      <Table />
    </div>
  );
};

export default Dashboard;



import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <Dashboard />
      </div>
    </div>
  );
};

export default App;

export default Table;
