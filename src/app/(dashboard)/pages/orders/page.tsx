'use client'
// import OrderTable from "../../components/temp/OrderTable";
import React, { useState, useEffect } from "react";
import { AiOutlineFilter, AiOutlineSearch } from "react-icons/ai";
import { BsArrowDownShort } from "react-icons/bs";
import Modal from "@/components/ui/modal/Modal";
import { TableData } from "@/constants/orderData";
import PendingOrder from "../../../../components/common/orderPages/PendingOrder";
import WaittingOrder from "../../../../components/common/orderPages/WaittingOrder";
import DialogOrder from "@/components/ui/dialog/dialog";
import PaymentOrder from "../../../../components/common/orderPages/PaymentOrder";
import CompleteOrder from "../../../../components/common/orderPages/CompleteOrder";
import DeliveryOrder from "../../../../components/common/orderPages/DeliveryOrder";
import { OrderData } from "@/types/orderData";

const AllOrders: React.FC = () => {
  const [dropdown, setDropdown] = useState({
    countryDropDown: false,
    dateDropDown: false,
    projectDropDown: false,
    statusDropDown: false,
  });
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [showPopUp, setShowPopUp] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string>("");


  const itemsPerPage: number = 5;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = TableData.slice(indexOfFirstItem, indexOfLastItem);

  console.log(currentItems);
  useEffect(() => {
    if (showPopUp) {
      const timeoutId = setTimeout(() => setShowPopUp(false), 5000);
      return () => clearTimeout(timeoutId);
    }
  }, [showPopUp]);

  const handleOpenPopUp = () => {
    setShowPopUp(true);
  };

  const handleClosePopUp = () => {
    setShowPopUp(false);
  };
  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };



  const selectedButtonClass =
    "bg-indigo-700 p-2 font-semibold text-white mt-4 rounded-md flex justify-center items-center gap-2";
  const normalButtonClass =
    "bg-indigo-500 p-2 font-semibold text-white mt-4 rounded-md flex justify-center items-center gap-2";
  return (
    <div className="container mx-auto mt-2 min-h-screen">
      <div className="w-full flex justify-start mt-1 mb-3 ">

        <h1 className="text-lg font-bold text-blue-800 text-start w-fit  mx-3 bg-gradient-to-t to-yellow-300 from-pink-500 p-2 rounded-tl-lg rounded-br-lg   ">Orders</h1>
      </div>      
      <div className="flex items-up justify-between ">
        <div className="w-[350px] ">
          <div className="relative">
            <input
              type="password"
              placeholder=" hi im in your computer ..."
              className="w-full py-2 pl-4 pr-4 text-gray-800 border border-gray-300 rounded-lg bg-gray-300 focus:outline-none focus:border-[#3949ac] focus:bg-white"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
              // onClick={handleSearch}
              className="absolute top-2 right-0 m-2 text-[#3949ac] hover:text-blue-700"
            >
              <AiOutlineSearch className="w-4 h-4 " />
            </button>
          </div>
        </div>



        <div className="flex gap-4">
          <div className="relative">
            <button
              className={
                dropdown.countryDropDown
                  ? selectedButtonClass
                  : normalButtonClass
              }
              onClick={() =>
                setDropdown({
                  ...dropdown,
                  statusDropDown: false,
                  countryDropDown: !dropdown.countryDropDown,
                  projectDropDown: false,
                  dateDropDown: false,
                })
              }
            >
              Country
              <BsArrowDownShort className="font-bold w-6 h-6 text-white" />
            </button>

            {dropdown.countryDropDown && (
              <div className="absolute z-10 mt-2 bg-gray-100 border rounded border-gray-300 text-sm text- justify-start w-44 flex flex-col overflow-hidden">
                <button
                  className={`p-3 hover:bg-green-100 hover:text-black border  ${selectedCountry === "Nepal" ? "bg-[#3949ac] text-white" : ""
                    }`}
                  onClick={() => setSelectedCountry("Nepal")}
                >
                  All
                </button>
                <button
                  className={`p-3 hover:bg-green-100 border hover:text-black  ${selectedCountry === "All" ? "bg-[#3949ac] text-white" : ""
                    }`}
                  onClick={() => setSelectedCountry("Indian")}
                >
                  Indian
                </button>
                <button
                  className={`p-3 hover:bg-green-100 hover:text-black border  ${selectedCountry === "Bangladesh"
                    ? "bg-[#3949ac] text-white"
                    : ""
                    }`}
                  onClick={() => setSelectedCountry("Bangladesh")}
                >
                  Bangladesh
                </button>
              </div>
            )}
          </div>

          <div className="relative    ">
            <input
              type="date"
              name="date"
              className="p-[6px] mt-[18px] rounded-md bg-[#3949ac] text-white"
            />
            {dropdown.dateDropDown && (
              <div className="absolute z-10 mt-2 bg-gray-100 border rounded border-gray-300 text-sm text-center w-44 flex flex-col overflow-hidden">
                <button
                  className={` p-3 hover:bg-green-100  border   ${selectedDate === "All" ? "bg-[#3949ac] text-white" : ""
                    }`}
                  onClick={() => setSelectedDate("All")}
                >
                  All
                </button>
                <button
                  className={` p-3 hover:bg-green-100  border   ${selectedDate === "11-8-23" ? "bg-[#3949ac] text-white" : ""
                    }`}
                  onClick={() => setSelectedDate("11-8-23")}
                >
                  11-8-23
                </button>
                <button
                  className={` p-3 hover:bg-green-100  border   ${selectedDate === "28-2-23" ? "bg-[#3949ac] text-white" : ""
                    }`}
                  onClick={() => setSelectedDate("28-2-23")}
                >
                  28-2-23
                </button>
                <button
                  className={` p-3 hover:bg-green-100  border   ${selectedDate === "12-2-23" ? "bg-[#3949ac] text-white" : ""
                    }`}
                  onClick={() => setSelectedDate("12-2-23")}
                >
                  12-2-23
                </button>
              </div>
            )}
          </div>
          <div className="relative">
            <button
              className={
                dropdown.projectDropDown
                  ? selectedButtonClass
                  : normalButtonClass
              }
              onClick={() =>
                setDropdown({
                  ...dropdown,

                  countryDropDown: false,
                  projectDropDown: !dropdown.projectDropDown,
                  statusDropDown: false,
                  dateDropDown: false,
                })
              }
            >
              Project Name
              <BsArrowDownShort className="font-bold w-6 h-6 text-white" />
            </button>
            {dropdown.projectDropDown && (
              <div className="absolute z-10 mt-2 bg-gray-100 border rounded border-gray-300 text-sm text-center w-44 flex flex-col overflow-hidden">
                <button
                  className={` p-3 hover:bg-green-100  border   ${selectedProject === "All" ? "bg-[#3949ac] text-white" : ""
                    }`}
                  onClick={() => setSelectedProject("All")}
                >
                  All
                </button>
                <button
                  className={` p-3 hover:bg-green-100  border   ${selectedProject === "webDev" ? "bg-[#3949ac] text-white" : ""
                    }`}
                  onClick={() => setSelectedProject("webDev")}
                >
                  Web dev
                </button>
                <button
                  className={` p-3 hover:bg-green-100  border   ${selectedProject === "softDev"
                    ? "bg-[#3949ac] text-white"
                    : ""
                    }`}
                  onClick={() => setSelectedProject("softDev")}
                >
                  Soft dev
                </button>
                <button
                  className={` p-3 hover:bg-green-100  border   ${selectedProject === "appDev" ? "bg-[#3949ac] text-white" : ""
                    }`}
                  onClick={() => setSelectedProject("appDev")}
                >
                  App dev
                </button>
              </div>
            )}
          </div>
          <div className="relative">
            <button
              className={
                dropdown.statusDropDown
                  ? selectedButtonClass
                  : normalButtonClass
              }
              onClick={() =>
                setDropdown({
                  ...dropdown,
                  statusDropDown: !dropdown.statusDropDown,
                  countryDropDown: false,
                  dateDropDown: false,
                })
              }
            >
              Status
              <BsArrowDownShort className="font-bold w-6 h-6 text-white" />
            </button>
            {dropdown.statusDropDown && !isVisible && (
              <div className="absolute z-10 mt-2 py-2 bg-gray-100 min-w-full border rounded border-gray-300 text-sm text-center w-44 -left-[150px] flex flex-col">
                <button
                  className={`p-3 hover:bg-green-100 border  ${selectedStatus === "All" ? "bg-[#3949ac] text-white" : ""
                    }`}
                  onClick={() => setSelectedStatus("All")}
                >
                  All
                </button>
                <button
                  className={`p-3 hover:bg-green-100 border  ${selectedStatus === "Pending" ? "bg-[#3949ac] text-white" : ""
                    }`}
                  onClick={() => setSelectedStatus("Pending")}
                >
                  Pending
                </button>
                <button
                  className={`p-3 hover:bg-green-100 border  ${selectedStatus === "Payment" ? "bg-[#3949ac] text-white" : ""
                    }`}
                  onClick={() => setSelectedStatus("Payment")}
                >
                  Payment
                </button>
                <button
                  className={`p-3 hover:bg-green-100 border  ${selectedStatus === "Working" ? "bg-[#3949ac] text-white" : ""
                    }`}
                  onClick={() => setSelectedStatus("Working")}
                >
                  waiting
                </button>
                <button
                  className={`p-3 hover:bg-green-100 border  ${selectedStatus === "Complete"
                    ? "bg-[#3949ac] text-white"
                    : ""
                    }`}
                  onClick={() => setIsVisible(true)}
                >
                  working
                </button>
                <button
                  className={`p-3 hover:bg-green-100 border  ${selectedStatus === "Cancelation"
                    ? "bg-[#3949ac] text-white"
                    : ""
                    }`}
                  onClick={() => setSelectedStatus("Cancelation")}
                >
                  complete
                </button>
                <button
                  className={`p-3 hover:bg-green-100 border  ${selectedStatus === "Cancelation"
                    ? "bg-[#3949ac] text-white"
                    : ""
                    }`}
                  onClick={() => setSelectedStatus("Cancelation")}
                >
                  Delivery
                </button>
                <button
                  className={`p-3 hover:bg-green-100 border  ${selectedStatus === "Cancelation"
                    ? "bg-[#3949ac] text-white"
                    : ""
                    }`}
                  onClick={() => setSelectedStatus("Cancelation")}
                >
                  cancel
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="flex items-center gap-1 my-4">
        <AiOutlineFilter className="w-6 h-6" /> Filter by :
      </div>
      <div className="flex items-center gap-1">
        {selectedCountry && (
          <div className="flex items-center justify-start">
            <p className=" bg-indigo-200 p-1 text-sm"> {selectedCountry}</p>
            <button
              onClick={() => setSelectedCountry("")}
              className="cursor-pointer bg-green-300 p-1 hover:bg-indigo-200 text-sm"
            >
              x
            </button>
          </div>
        )}
        {selectedDate && (
          <div className="flex items-center justify-start">
            <p className=" bg-indigo-200 p-1 text-sm"> {selectedDate}</p>
            <button
              onClick={() => setSelectedDate("")}
              className="cursor-pointer bg-green-300 p-1 hover:bg-indigo-200 text-sm"
            >
              x
            </button>
          </div>
        )}
        {selectedProject && (
          <div className="flex items-center justify-start">
            <p className=" bg-indigo-200 p-1 text-sm"> {selectedProject}</p>
            <button
              onClick={() => setSelectedProject("")}
              className="cursor-pointer bg-green-300 p-1 hover:bg-indigo-200 text-sm"
            >
              x
            </button>
          </div>
        )}
        {selectedStatus && (
          <div className="flex items-center justify-start">
            <p className=" bg-indigo-200 p-1 text-sm"> {selectedStatus}</p>
            <button
              onClick={() => setSelectedStatus("")}
              className="cursor-pointer bg-green-300 p-1 hover:bg-indigo-200 text-sm"
            >
              x
            </button>
          </div>
        )}
      </div>
      {/* <OrderTable data={TableData} /> */}
      <Modal isVisible={isVisible} onClose={setIsVisible} >
        <div className="w-[450px]  ">
          <form className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 mb-2">
            <div className="mb-2">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="title"
              >
                Notice title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="mb-2">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="file"
              >
                Upload File
              </label>
              <input
                type="file"
                id="file"
                name="file"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-[#3949ac] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Add
              </button>
            </div>
          </form>
        </div>
      </Modal>
      <div className="relative overflow-x-auto shadow-md min-h-screen ">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500  dark:text-gray-400">
          <thead className=" text-xs	 uppercase bg-[#39b7ea] border border-white text-white dark:text-gray-400">
            <tr>
              <th scope="col" className="px-4 py-3 text-center">
                No
              </th>
              <th scope="col" className="px-4 py-3 text-center">
                Order ID              </th>
              <th scope="col" className="px-4 py-3">
                Project name
              </th>
              <th scope="col" className="px-4 py-3 text-left">
                Total project amount
              </th>
              <th scope="col" className="px-4 py-3 text-left">
                Total Online Deposit Rs
              </th>
              <th scope="col" className="px-4 py-3">
                Total Offline Deposits
              </th>

              <th scope="col" className="px-6 py-3">
                Money Left
              </th>
              <th scope="col" className="px-6 py-3">
                Project update
              </th>
              <th scope="col" className="px-6 py-3">
                Project Delivery Day
              </th>
              <th scope="col" className="px-6 py-3">
                Profits
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
              </th>
            </tr>
          </thead>
          <tbody>
          {currentItems?.map((item:any, i) => {
              console.log(item)
              return (
                (
                  <tr key={i} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {item.sl}
                    </th>
                    <td className="px-6 py-4">{item.id}</td>

                    <td className="px-6 py-4">{item.projectName}</td>
                    <td className="px-6 py-4">{item.projectTotalRs}</td>
                    <td className="px-6 py-4">{item.totalOnlineDepositRs}</td>
                    <td className="px-6 py-4">{item.totalOnlineDeposits}</td>
                    <td className="px-6 py-4">{item.moneyLeft}</td>
                    <td className="px-6 py-4 text-center">
                      <button className="bg-gray-100 text-black hover:bg-white hover:text-blue-600 hover:shadow-md rounded-md  py-1 px-3 text-[14px] transition-all " >
                        update                    </button>
                    </td>
                    <td className="px-6 py-4">{item.projectDeliveryDay}</td>
                    <td className="px-6 py-4">{item.profit}</td>
                    <td className="px-6 py-4">{item.status}</td>


                    <td className="px-6 py-4 text-center">
                      <button className="bg-blue-500 text-white hover:bg-white hover:text-blue-600 hover:shadow-md rounded-md  py-1 px-3 text-[14px] transition-all " onClick={handleOpenPopUp}>
                      {item.view}
                      </button>
                    </td>
                  </tr>
                )
              )
          
       
            })}
            </tbody>
             </table>
             {showPopUp && (
  
      <DialogOrder title="payment" content={<PaymentOrder />} />
   
 
)}






      </div>
    </div>
  );
};


export default AllOrders;