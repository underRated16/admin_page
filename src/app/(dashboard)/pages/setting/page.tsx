import SettingTable from "@/components/ui/temp/SettingTable";
import React from "react";
export interface tableData {
    sl:number;
    id:number;
    adminName:string;
    userName:string;
    password:string;
    gmail:string;
    securityCode:string;
    access:string;
    status:string;
}
const tableData:tableData[] = [
  {
    sl: 1,
    id: 1,
    adminName: "John Doe",
    userName: "johndoe123",
    password: "********",
    gmail: "john.doe@example.com",
    securityCode: "12345",
    access: "Admin",
    status: "Active",
  },
  {
    sl: 2,
    id: 2,
    adminName: "Jane Smith",
    userName: "janesmith456",
    password: "********",
    gmail: "jane.smith@example.com",
    securityCode: "54321",
    access: "User",
    status: "Active",
  },
  {
    sl: 3,
    id: 3,
    adminName: "Alice Johnson",
    userName: "alicej",
    password: "********",
    gmail: "alice.j@example.com",
    securityCode: "98765",
    access: "Admin",
    status: "Inactive",
  },
];

const Setting:React.FC = () => {
  return (
    <div className="container mx-auto mt-6 min-h-screen">
      <h1 className="text-3xl font-bold mb-10 text-center">Order</h1>
      <div className="flex items-center justify-end gap-4">
        <button className="bg-blue-500 p-2 font-semibold text-white mt-4 rounded-md">
          Sub Admin Create
        </button>
        <button className="bg-blue-500 p-2 font-semibold text-white mt-4 rounded-md">
          Change Password
        </button>
      </div>
      <div>
        <SettingTable data={tableData} />
      </div>
    </div>
  );
};

export default Setting;
