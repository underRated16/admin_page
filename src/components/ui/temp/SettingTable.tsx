'use client'
import { tableData } from "@/Components/common/(pages)/setting/page";
// components/DataTable.js
import React, { useState } from "react";
interface ChildProps {
    data: tableData[];
  }
const SettingTable:React.FC<ChildProps> = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const paginate = (pageNumber:number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="my-4">
      <table className="w-full border-collapse border border-gray-300">
        <thead className="font-bold">
          <tr className="bg-gray-200 text-black">
            <th className="border border-gray-300 p-2 text-sm">SL</th>
            <th className="border border-gray-300 p-2 text-sm">ID</th>
            <th className="border border-gray-300 p-2 text-sm">Admin Name</th>
            <th className="border border-gray-300 p-2 text-sm">User Name</th>
            <th className="border border-gray-300 p-2 text-sm">Password</th>
            <th className="border border-gray-300 p-2">Gmail</th>
            <th className="border border-gray-300 p-2">Security Code</th>
            <th className="border border-gray-300 p-2">Access</th>
            <th className="border border-gray-300 p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item, index) => (
            <tr
              key={index}
              className={`text-center ${
                index % 2 === 0 ? "bg-gray-50" : "bg-white"
              }`}
            >
              <td className="border border-gray-300">{item.sl}</td>
              <td className="border border-gray-300 p-2">{item.id}</td>
              <td className="border border-gray-300 p-2">{item.adminName}</td>
              <td className="border border-gray-300 p-2">{item.userName}</td>
              <td className="border border-gray-300 p-2">{item.password}</td>
              <td className="border border-gray-300 p-2">{item.gmail}</td>
              <td className="border border-gray-300 p-2">
                {item.securityCode}
              </td>
              <td className="border border-gray-300 p-2">{item.access}</td>

              <td className="border border-gray-300 p-2">
                <span
                  className={`text-xs p-1 block ${
                    item.status === "Pending" ? "bg-yellow-200" : "bg-green-200"
                  }`}
                >
                  {item.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4">
        <ul className="flex space-x-2">
          {Array.from({ length: totalPages }, (_, index) => (
            <li key={index}>
              <button
                className={`${
                  currentPage === index + 1
                    ? "bg-blue-500 text-white"
                    : "bg-gray-300 text-gray-700"
                } px-3 py-1 rounded-full`}
                onClick={() => paginate(index + 1)}
              >
                {index + 1}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SettingTable;