"use client";
import React, { useState } from "react";

// import { users } from "../../mokeData";
import { ImCross } from "react-icons/im";
import { CiSearch } from "react-icons/ci";
import { users } from "@/constants/userData";
const AllUsers:React.FC = () => {


  console.log(users);
  const options: string[] = ["Help", "About"];
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage: number = 5;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = users.slice(indexOfFirstItem, indexOfLastItem);
  console.log(currentItems);

  const [showPopUp, setShowPopUp] = useState<boolean>(false);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const handlePopUp = () => {
    setShowPopUp(true);
    setIsOpen(false);
  };

  const handleClosePop = () => {
    setShowPopUp(false);
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    
    <div className=" rounded-lg">
       <div className="w-full flex justify-start mt-1 mb-3 ">

<h1 className="text-lg font-bold text-blue-800 text-start w-fit  mx-3 bg-gradient-to-t to-yellow-300 from-pink-500 p-2 rounded-tl-lg rounded-br-lg   ">All Users</h1>
</div>
      <div className="bg-blue-900 p-4">
        {/* Main content start here */}
        <div className="flex justify-between">
          <div className="flex justify-center items-center space-x-2">
         
            <input
              type="date"
              required
              // placeholder="Search Here"
              className=" bg-white py-2 px-6 outline-none rounded-md shadow-sm w-full mt-1"
            />
            <div className="flex gap-1 p-1 border-2 border-white outline-none rounded-md  ">
        <button className={`text-2xl  hover:scale-125  text-white`}>
          <CiSearch />
        </button>
        <input
          type="text"
          className={`outline-none border-none hover:border-none w-[250px] bg-blue-900  text-white pl-2 `}
          placeholder="Write to Search...."
        />
      </div>
          </div>
          
          <div className="relative inline-block text-left">
            <div>
              <span className="rounded-md shadow-sm">
                <button
                  type="button"
                  className="inline-flex justify-between w-[10.5rem] px-4 py-2 text-sm font-medium hover:text-gray-700 hover:bg-white border border-gray-300 rounded-md bg-blue-600 text-white focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200 active:bg-blue-600"
                  id="options-menu"
                  aria-haspopup="true"
                  aria-expanded="true"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  {selectedOption || "Country"}
                  <svg
                    className="-mr-1 ml-2 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 12a1 1 0 0 1-.707-.293l-4-4a1 1 0 0 1 1.414-1.414L10 9.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-.707.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </span>
            </div>

            {isOpen && (
              <div className="origin-top-right absolute right-0 mt-2 w-[10.5rem] z-10 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <div className="py-1">
                  {options.map((option:string, index) => (
                    <button
                      key={index}
                      onClick={() => handleOptionClick(option)}
                      className=" px-4 py-2 text-sm text-gray-700 hover:bg-blue-200 hover:text-blue-800 flex justify-between w-[100%]"
                    >
                      {option}
                      <div>
                        
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="relative overflow-x-auto shadow-md min-h-screen ">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500  dark:text-gray-400">
          <thead className="text-xs  uppercase bg-[#39b7ea] border border-white text-white dark:text-gray-400">
            <tr> 
              <th scope="col" className="px-6 py-3">
                No
              </th>
              <th scope="col" className="px-6 py-3">
                user Id
              </th>
              <th scope="col" className="px-6 py-3">
                Full name
              </th>
              <th scope="col" className="px-6 py-3">
                Gender
              </th>
              <th scope="col" className="px-6 py-3">
                Contry Name
              </th>
              <th scope="col" className="px-6 py-3">
                Total Order
              </th>
              <th scope="col" className="px-6 py-3">
                Total Paid
              </th>
              <th scope="col" className="px-6 py-3">
                Money Left
              </th>
              <th scope="col" className="px-6 py-3">
                Refund Amount
              </th>
              <th scope="col" className="px-6 py-3">
                User View
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
                      {item.no}
                    </th>
                    <td className="px-6 py-4">{item.userId}</td>
                    <td className="px-6 py-4">{item.userName}</td>
                    <td className="px-6 py-4">{item.gender}</td>
                    <td className="px-6 py-4">{item.countryName}</td>
                    <td className="px-6 py-4">{item.totalOrder}</td>
                    <td className="px-6 py-4">{item.totalPaid}</td>
                    <td className="px-6 py-4">{item.moneyLeft}</td>
                    <td className="px-6 py-4">{item.refundAmount}</td>
                    <td className="px-6 py-4 text-center">
                      <button className="bg-blue-500 text-white hover:bg-white hover:text-blue-600 hover:shadow-md rounded-md  py-1 px-3 text-[14px] transition-all" onClick={handlePopUp}>
                        View
                      </button>
                    </td>
                  </tr>
                )
              )
            })}
          </tbody>
        </table>

{showPopUp &&(
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-700 bg-opacity-75">
    <div className="bg-gray-300  rounded-md  mt-8 h-[620px]  m-8  relative">
    <div className="flex h-[60px]">
                <div className="w-[300px] h-[620px] px-2  bg-gradient-to-tr to-blue-400 from-yellow-300 border-l-2 border-yellow-200 text-white flex flex-col justify-end items-end ">
                  <button className="w-full p-2 flex justify-center my-1  cursor-pointer  rounded hover:bg-blue-400 bg-blue-500 items-center text-white">
                    Device Info
                  </button>
                </div>
                <div className="w-[800px] p-2   mx-4 mt-9">

                   <div className="flex flex-col bg-blue-500 border rounded p gap-2 space-y-2 ">
                    <div className="flex gap-2">
                    <div className=" bg-blue-500 border rounded  p-1 ">
                          <h2 className="text-white">Device Type/Modal:</h2>
                          <p>Desktop or laptop </p>
                          <hr className="bg-white" />
                          <h2 className="text-white">Operating</h2>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam impedit, sint hic quo nesciunt a id deleniti quia deserunt?  </p>
                        </div>
                        <div className=" bg-blue-500 border rounded  p-1 ">
                          <h2 className="text-white">Device Type/Modal:</h2>
                          <p>Desktop or laptop </p>
                          <hr className="bg-white" />
                          <h2 className="text-white">Operating</h2>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam impedit, sint hic quo nesciunt a id deleniti quia deserunt?  </p>
                        </div>
                        <div className=" bg-blue-500 border rounded  p-1 ">
                          <h2 className="text-white">Device Type/Modal:</h2>
                          <p>Desktop or laptop </p>
                          <hr className="bg-white" />
                          <h2 className="text-white">Operating</h2>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam impedit, sint hic quo nesciunt a id deleniti quia deserunt?  </p>
                        </div>
                    </div>
                          <div className="flex gap-2">

                  
                        <div className=" bg-blue-500 border rounded  p-1 ">
                          <h2 className="text-white">Device Type/Modal:</h2>
                          <p>Desktop or laptop </p>
                          <hr className="bg-white" />
                          <h2 className="text-white">Operating</h2>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam impedit, sint hic quo nesciunt a id deleniti quia deserunt?  </p>
                        </div>
                        <div className=" bg-blue-500 border  rounded  p-1 s">
                          <h2 className="text-white">Device Type/Modal:</h2>
                          <p>Desktop or laptop </p>
                          <hr className="bg-white" />
                          <h2 className="text-white">Operating</h2>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam impedit, sint hic quo nesciunt a id deleniti quia deserunt?  </p>
                        </div>

                   </div>
                   </div>
                </div>
              </div>



      
      <div className="mt-4 flex justify-end absolute top-0 right-1">
        <button
          className="px-4 py-2 mr-2 bg-red-600 hover-bg-red-500 text-white rounded-md p-1 "
          onClick={handleClosePop}
        >
          <ImCross className="35"/>
        </button>
        
      </div>
    </div>
  </div>
)}

        <div className="flex justify-end p-4">
          <div className="flex items-center space-x-2">
            {Array.from(
              { length: Math.ceil(users.length / itemsPerPage) },
              (_, i) => (
                <button
                  key={i}
                  onClick={() => paginate(i + 1)}
                  className={`px-3 py-1 rounded-md ${
                    i + 1 === currentPage
                      ? "bg-blue-500 text-white"
                      : "bg-gray-300 text-gray-700 hover:bg-blue-200 hover:text-blue-800"
                  }`}
                >
                  {i + 1}
                </button>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
