"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { CiSearch } from "react-icons/ci";
import { ImCross } from "react-icons/im";
import { BiSend } from "react-icons/bi";
export default function OfflinePaymentChecking() {
  const [age, setAge] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isOpen2, setIsOpen2] = useState<boolean>(false);
  const [isOpenMode, setIsOpenMode] = useState<boolean>(false);
  const [isOpenStatus, setIsOpenStatus] = useState<boolean>(false);
  const [msg, setShowMsg] = useState<boolean>(false)
  //  for offline payment data
  const [isOpen3, setIsOpen3] = useState<boolean>(false);
  const [isOpen4, setIsOpen4] = useState<boolean>(false);

  const [selectedOption, setSelectedOption] = useState<string>("");
  const [ispaymentTypeOption, setIsPaymentTypeOption] = useState<string>("");
  const [ispaymentModeOption, setIsPaymentModeOption] = useState<string>("");
  const [ispaymentStatusOption, setIsPaymentStatusOption] = useState<string>("");
  // this is offline payment  hooks
  const [isContry, setIsContry] = useState<string>("");
  const [isPaymentRecived, setIspaymentRecived] = useState<string>("");

  const [selectedOptionMenu, setSelectedOptionMenu] = useState<string>("online");
  const router = useRouter();
  const [popUp, setShowpop] = useState<boolean>(false)
  

  const handlePopUp = ()=>{
    setShowpop(true)
  }
  const handleopenMag = ()=>{
    setShowMsg(true)
  }
 const closePOp = ()=>{
  setShowpop(false)
 }
 const closeMag = ()=>{
  setShowMsg(false)
 }

  function handleclick() {
    router.replace("payment-checking-details");
  }
  type OptionArr = string[]
  // payment btn optoin of dropdown manu
  const paymentOptions:OptionArr = ["Online", "Offline"];
  const handleOptionClick = (option:string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };
  // Payment Type
  const paymentTypeOption:OptionArr = ["Bank", "Mobile Wallet"];
  const handlepaymentTypeClick = (option:string) => {
    setIsPaymentTypeOption(option);
    setIsOpen2(false);
  };
  // payment mood
  const paymentModeOption:OptionArr = ["All ", "Sbi Bank", "Cti Bank"];
  const handlepaymentModeClick = (option:string) => {
    setIsPaymentModeOption(option);
    setIsOpenMode(false);
  };
  // payment Status
  const paymentStatusOption:OptionArr = ["All ", "Pandding", "accepted", "Spam"];
  const handlepaymentStatusClick = (option:string) => {
    setIsPaymentStatusOption(option);
    setIsOpenStatus(false);
  };

  //   this is offline payment data
  // Conutry optin
  const countryOption:OptionArr = ["England", "Pakistan"];
  const handleContryeClick = (option:string) => {
    setIsContry(option);
    setIsOpen3(false);
  };
  // payment mood
  const paymentReciveOption:OptionArr = ["Mr Jack", "Mr Dani"];
  const handlepaymentReciveeClick = (option:string) => {
    setIspaymentRecived(option);
    setIsOpen4(false);
  };
  // payment Status
  // const paymentStatusOption = ["All ","Pandding","accepted","Spam" ]
  // const handlepaymentOptionClick = (option) => {
  //   setIsPaymentStatusOption(option);
  //   setIsOpenStatus(false);
  // };

  const handleOptionChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOptionMenu(event.target.value);
  };

  //  this is for dynamic  btns
  const [selectedOption2, setSelectedOption2]= useState('option1');

   const handleDropdownChange = (e:React.ChangeEvent<HTMLSelectElement>)=>{
    setSelectedOption2(e.target.value)
   }

   const renterButtons =()=>{
    switch (selectedOption2) {
      case 'option1':
           return(
          <div className="flex gap-3">
            <div className="w-full flex justify-start mt-1 mb-3 ">

            <h1 className="text-lg font-bold text-blue-800 text-start w-fit  mx-3 bg-gradient-to-t to-yellow-300 from-pink-500 p-2 rounded-tl-lg rounded-br-lg   ">All Payments</h1>
            </div>
            
             
           <button className="p-2 border bg-orange-500 hover:bg-orange-600 text-nowrap rounded-md">Admin Notepad</button>
     <button className="p-2 border bg-orange-500 hover:bg-orange-600 text-nowrap rounded-md" onClick={handleopenMag}>Response</button>
     <button className="p-2 border bg-orange-500 hover:bg-orange-600 text-nowrap rounded-md">Status</button> 
            </div>
           )
      case 'option2':
        return(
          <div className="flex gap-3">
          <button className="p-2 border bg-orange-500 hover:bg-orange-600 text-nowrap rounded-md">Button C</button>
          <button className="p-2 border bg-orange-500 hover:bg-orange-600 text-nowrap rounded-md">Button D</button>
          </div>
        )
        case 'option3':
          return(
            <div className="flex gap-3">
            <button className="p-2 border bg-orange-500 hover:bg-orange-600 text-nowrap rounded-md">Button E</button>
            <button className="p-2 border bg-orange-500 hover:bg-orange-600 text-nowrap rounded-md">Button F</button>
            </div>
          )       
       
    
      default:
        return(
          <button className="btn"> Btn</button>
        )
    }
   }

  return (
    <section className="min-h-screen  flex flex-col  items-center">
      <div className="flex gap-1 p-1 rounded-full  border-2 border-blue-800 outline-none w-[340px]  bg-indigo-400  ">
        <button className={`text-2xl  hover:scale-125  text-white`}>
          <CiSearch />
        </button>
        <input
          type="text"
          className={`outline-none border-none hover:border-none p-1  bg-indigo-400  text-white `}
          placeholder="Write to Search...."
        />
      </div>

      {/* offline  Payment Option  */}

      <div className=" mt-10 grid grid-cols-4 space-x-2 gap-4">
        {/* payment Itmes Drop Manu */}

        {/* Date Manu */}
        <div className=" relative ">
          <input
            type="date"
            required
            // placeholder="Search Here"
            className=" py-1 bg-indigo-500 px-1 outline-none text-white rounded-md shadow-sm w-full mt-1"
          />
        </div>
        {/* Contry Type Drop Manu  */}
        <div className="relative inline-block  text-left">
          <div>
            <span className="rounded-md shadow-sm">
              <button
                type="button"
                className="inline-flex justify-between w-[10.5rem] px-4 py-2 text-sm font-medium outline-none  hover:text-gray-700 hover:bg-white border border-gray-300 rounded-md bg-indigo-500 text-white focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200 active:bg-indigo-600"
                id="options-menu"
                aria-haspopup="true"
                aria-expanded="true"
                onClick={() => setIsOpen3(!isOpen3)}
              >
                {isContry || "Country"}
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

          {isOpen3 && (
            <div className="origin-top-right absolute  mt-2 w-[10.5rem] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
              <div className="py-1">
                {countryOption.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleContryeClick(option)}
                    className=" px-4 py-2 text-sm text-gray-700 hover:bg-blue-200 hover:text-blue-800 flex justify-between w-[100%]"
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Offline payment  Mode Drop Manu  */}
        <div className="relative inline-block  text-left">
          <div>
            <span className="rounded-md shadow-sm">
              <button
                type="button"
                className="inline-flex justify-between -ml-6   p-2 text-sm font-medium outline-none  hover:text-gray-700 hover:bg-white border border-gray-300 rounded-md bg-indigo-500 text-white focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200 active:bg-indigo-600"
                id="options-menu"
                aria-haspopup="true"
                aria-expanded="true"
                onClick={() => setIsOpen4(!isOpen4)}
              >
                {isPaymentRecived || "Payment Recipient person"}
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

          {isOpen4 && (
            <div className="origin-top-right absolute  mt-2 w-[10.5rem] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
              <div className="py-1">
                {paymentReciveOption.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handlepaymentReciveeClick(option)}
                    className=" px-4 py-2 text-sm text-gray-700 hover:bg-blue-200 hover:text-blue-800 flex justify-between w-[100%]"
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
        {/* payment Status Drop Manu  */}
        <div className="relative inline-block  text-left">
          <div>
            <span className="rounded-md shadow-sm">
            <div className="popUp">
            <select name="" id="" onChange={handleDropdownChange} value={selectedOption2} className="dropdown justify-between w-[10.5rem] px-4 py-2 text-sm font-medium outline-none  hover:text-gray-700 hover:bg-white border border-gray-300 rounded-md bg-indigo-500 text-white focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200 active:bg-indigo-600"
                >
              <option value="default">Payment Status</option>
              <option value="option1">All</option>
              <option value="option2">Active</option>
              <option value="option3">Deactive</option>
              <option value="option3">complete</option>
            </select>
          </div>
              {/* <button
                type="button"
                className="inline-flex justify-between w-[10.5rem] px-4 py-2 text-sm font-medium outline-none  hover:text-gray-700 hover:bg-white border border-gray-300 rounded-md bg-indigo-500 text-white focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200 active:bg-indigo-600"
                id="options-menu"
                aria-haspopup="true"
                aria-expanded="true"
                onClick={() => setIsOpenStatus(!isOpenStatus)}
              >
                {ispaymentStatusOption || "Payment Status"}
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
              </button> */}
            </span>
          </div>

          

          {isOpenStatus && (
            <div className="origin-top-right absolute  mt-2 w-[10.5rem] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
              <div className="py-1">
                {paymentModeOption.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handlepaymentStatusClick(option)}
                    className=" px-4 py-2 text-sm text-gray-700 hover:bg-blue-200 hover:text-blue-800 flex justify-between w-[100%]"
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <div>
        {/* <div className="flex ... mt-10 "> */}
        <table className="table my-8 mr-1 border border-gray-500  ">
          <thead>
            <tr className="bg-blue-400 text-white">
              <th className="py-2 px-4  border-2">No</th>
              <th className="py-2 px-4  border-2">Payment ID</th>
              <th className="py-2 px-4  border-2">Project Name</th>
              <th className="py-2 px-4  border-2">Transaction Id</th>
              <th className="py-2 px-4  border-2">Check Number</th>
              <th className="py-2 px-4  border-2">chack Holder Name</th>
              <th className="py-2 px-4  border-2">Payment Recipient person</th>
              <th className="py-2 px-4  border-2">Pay Amount</th>
              <th className="py-2 px-4  border-2">payment Day</th>
              <th className="py-2 px-4  border-2">Status</th>
              <th className="py-2 px-4  border-2">see</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-gray-200">
              <td className="py-3 px-4 border-2 border-gray-100">45</td>
              <td className="py-2 px-4 border-2 border-gray-100">466466</td>
              <td className="py-2 px-4 border-2 border-gray-100">
                web dev
              </td>
              <td className="py-2 px-4 border-2 border-gray-100">46UHHGH45</td>
              <td className="py-2 px-4 border-2 border-gray-100">5325532</td>
              <td className="py-2 px-4 border-2 border-gray-100">Mr Dani</td>
              <td className="py-2 px-4 border-2 border-gray-100">mr jams</td>
              <td className="py-2 px-4 border-2 border-gray-100">4584 USD</td>
              <td className="py-2 px-4 border-2 border-gray-100">19-12-2024 02:30Am</td>
              <td className="py-2 px-4 border-2 border-gray-100">complete</td>
              <td className="px-6 py-4 text-center border-2 border-gray-100">
                <button
                  className="bg-blue-500 text-white hover:bg-white hover:text-blue-600 hover:shadow-md rounded-md  py-1 px-3 text-[14px] transition-all"
                  onClick={handlePopUp}
                >
                  View
                </button>
              </td>
            </tr>

            {/* Just for Demo  Displaying  Remove Follwing Code  */}
            <tr className="bg-gray-200">
              <td className="py-3 px-4 border-2 border-gray-100">45</td>
              <td className="py-2 px-4 border-2 border-gray-100">54L3pl </td>
              <td className="py-2 px-4 border-2 border-gray-100">Rewriting</td>
              <td className="py-2 px-4 border-2 border-gray-100">
                45FDJJJSJSJ
              </td>
              <td className="py-2 px-4 border-2 border-gray-100">Mp Juliean</td>
              <td className="py-2 px-4 border-2 border-gray-100">9025532</td>
              <td className="py-2 px-4 border-2 border-gray-100">Mr Jon</td>
              <td className="py-2 px-4 border-2 border-gray-100">869USD</td>
              <td className="py-2 px-4 border-2 border-gray-100">19-12-2024 02:30Am</td>
              <td className="py-2 px-4 border-2 border-gray-100">complete</td>
              <td className="px-6 py-4 text-center border-2 border-gray-100">
                <button
                  className="bg-blue-500 text-white hover:bg-white hover:text-blue-600 hover:shadow-md rounded-md  py-1 px-3 text-[14px] transition-all"
                  onClick={handlePopUp}
                >
                  View
                </button>
              </td>
            </tr>
            {/* Just for Demo  Displaying  Remove Upper Code  */}
          </tbody>
        </table>

        {/* </div> */}
      </div>

      {popUp && ( 
     <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center mt-8 bg-gray-700 bg-opacity-75">
     <div className=" bg-blue-700 p-4 h-[610px]  w-[900px] m-8 relative rounded-tr-[110px]">
      
         <button
           className=" w-14 h-14 bg-red-600 rounded-full absolute -top-1 -right-1 text-white p-2 border  border-black"
           onClick={closePOp}
         >
           <ImCross size={35}/>         </button>
       <div className="mt-4 flex justify-end space-x-2 pr-16">
          {renterButtons()}
     
       </div>
     </div>
   </div>
)}
{msg && ( 
     <div className="absolute top-24 right-64  flex items-center justify-center mt-8 ">
     <div className=" bg-white p-8 z-50  w-[250px]   h-[250px]   m-8 relative rounded-2xl ">
{/* <div className=" "> */}
      <div className="bg-white w-20 h-20 absolute  -top-6 right-6 -rotate-45" ></div>
{/* </div> */}
      
<div className=" felx items-center justify-center  p-5 h-40 w-full"> 
<p>This is good For</p>
<hr/>
<button
           className=" absolute bottom-2 left-2  text-black p-2 border  "
           onClick={closeMag}
         >
           <BiSend size={35}/>
           </button>
</div>

      
     </div>
       
   </div>
)}


    </section>
  );
}
