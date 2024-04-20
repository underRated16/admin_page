'use client'

import React, {useState} from "react"
import {useRouter} from "next/navigation"
import { CiSearch } from "react-icons/ci";

const Notice:React.FC = () => {
    const [age, setAge] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpenMode, setIsOpenMode] = useState(false);
    const [isOpenStatus, setIsOpenStatus] = useState(false);
  
    //  for offline payment data 
    const [isOpen3, setIsOpen3] = useState(false);
    const [isOpen4, setIsOpen4] = useState(false);
  
  
    const [selectedOption, setSelectedOption] = useState("");
    const [ispaymentTypeOption, setIsPaymentTypeOption] = useState("");
    const [ispaymentModeOption, setIsPaymentModeOption] = useState("");
    const [ispaymentStatusOption, setIsPaymentStatusOption] = useState("");
    // this is offline payment  hooks
    const [isContry, setIsContry]= useState("")
     const [isPaymentRecived,setIspaymentRecived] = useState("")
  
  
  
  
    const [selectedOptionMenu, setSelectedOptionMenu] = useState('online')
    const router=useRouter()
  
    const handlePopUp = ()=>{''}
   
    function handleclick(){
      router.replace("payment-checking-details")
    }
    // payment btn optoin of dropdown manu
    const paymentOptions:string[] = ["Online", "Offline"];
    const handleOptionClick = (option:string) => {
      setSelectedOption(option);
      setIsOpen(false);
    };
  // Payment Type
  const paymentTypeOption:string[] = ["Bank ","Mobile Wallet" ]
    const handlepaymentTypeClick = (option:string) => {
      setIsPaymentTypeOption(option);
      setIsOpen2(false);
    };
    // payment mood
    const paymentModeOption:string[] = ["All ","Sbi Bank","Cti Bank", ]
    const handlepaymentModeClick = (option:string) => {
      setIsPaymentModeOption(option);
      setIsOpenMode(false);
    };
    // payment Status
    const paymentStatusOption:string[] = ["All ","Pandding","accepted","Spam" ]
    const handlepaymentStatusClick = (option:string) => {
      setIsPaymentStatusOption(option);
      setIsOpenStatus(false);
    };
  
  
    //   this is offline payment data
  // Conutry optin 
  const countryOption:string[] = ["England","Pakistan" ]
    const handleContryeClick = (option:string) => {
      setIsContry(option);
      setIsOpen3(false);
    };
    // payment mood
    const paymentReciveOption:string[] = ["Mr Jack", "Mr Dani" ]
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
  
   const handleOptionChange =(event:React.ChangeEvent<HTMLSelectElement>)=>{
     setSelectedOptionMenu(event.target?.value)
   }
    return (
        <section className="min-h-screen  flex flex-col  items-center">
      <div className="w-full flex justify-start ">

       <h1 className="text-lg font-bold text-blue-800 text-start w-fit  mx-5 bg-gradient-to-t to-yellow-300 from-pink-500 p-2 rounded-tl-lg rounded-br-lg   ">Notice Page</h1>
      </div>
   <div className="flex gap-1 p-1 rounded-full  border-2 border-blue-300 outline-none w-[340px]  bg-indigo-200  ">
        <button className={`text-2xl  hover:scale-125  text-white`}>
          <CiSearch />
        </button>
        <input
          type="text"
          className={`outline-none border-none hover:border-none p-1  bg-indigo-200  text-white `}
          placeholder="Write to Search...."
        />
      </div>
      <div className="flex items-start ">


<select name="" id="" className="w-56  mt-11 mr-3 pl-2 ml-1 rounded-md text-white bg-indigo-500 h-9" onChange={handleOptionChange} value={selectedOptionMenu}>
  
<option value="online" className=" h-7 pl-1 text-black"> Payment</option>
  <option value="online" className="border p-1 my-1 text-black bg-white "> Online</option>
  <option value="offline" className="
  border my-1 bg-white  text-black"> Offline</option>

</select>
{selectedOptionMenu === 'online' && (
    <div className=" mt-10 grid grid-cols-4 space-x-2 gap-4">
       
      
        {/* payment Itmes Drop Manu */}

  
      {/* <div className="relative inline-block text-left">
            <div>
              <span className="rounded-md shadow-sm">
                <button
                  type="button"
                  className="inline-flex justify-between w-[10.5rem] px-4 py-2 text-sm font-medium outline-none  hover:text-gray-700 hover:bg-white border border-gray-300 rounded-md bg-indigo-500 text-white focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200 active:bg-indigo-600"
                  id="options-menu"
                  aria-haspopup="true"
                  aria-expanded="true"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  {selectedOption || "Payment"}
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
              <div className="origin-top-right absolute  mt-2 w-[10.5rem] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <div className="py-1">
                  {paymentOptions.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleOptionClick(option)}
                      className=" px-4 py-2 text-sm text-gray-700 hover:bg-blue-200 hover:text-blue-800 flex justify-between w-[100%]"
                    >
                      {option}
                     
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div> */}
{/* Date Manu */}
          <div className=" relative ">

             <input
        type="date"
        required
        // placeholder="Search Here"
        className=" py-1 bg-indigo-500 px-1 outline-none rounded-md shadow-sm w-full mt-1"
      />

        </div>
    {/* payment Type Drop Manu  */}
    <div className="relative inline-block  text-left">
            <div>
              <span className="rounded-md shadow-sm">
                <button
                  type="button"
                  className="inline-flex justify-between w-[10.5rem] px-4 py-2 text-sm font-medium outline-none  hover:text-gray-700 hover:bg-white border border-gray-300 rounded-md bg-indigo-500 text-white focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200 active:bg-indigo-600"
                  id="options-menu"
                  aria-haspopup="true"
                  aria-expanded="true"
                  onClick={() => setIsOpen2(!isOpen2)}
                >
                  {ispaymentTypeOption || "Payment Type"}
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

            {isOpen2 && (
              <div className="origin-top-right absolute  mt-2 w-[10.5rem] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <div className="py-1">
                  {paymentTypeOption.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handlepaymentTypeClick(option)}
                      className=" px-4 py-2 text-sm text-gray-700 hover:bg-blue-200 hover:text-blue-800 flex justify-between w-[100%]"
                    >
                      {option}
                     
                    </button>
                  ))}
                </div>
              </div>
            )}
      </div>

{/* payment Mode Drop Manu  */}
<div className="relative inline-block  text-left">
            <div>
              <span className="rounded-md shadow-sm">
                <button
                  type="button"
                  className="inline-flex justify-between w-[10.5rem] px-4 py-2 text-sm font-medium outline-none  hover:text-gray-700 hover:bg-white border border-gray-300 rounded-md bg-indigo-500 text-white focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200 active:bg-indigo-600"
                  id="options-menu"
                  aria-haspopup="true"
                  aria-expanded="true"
                  onClick={() => setIsOpenMode(!isOpenMode)}
                >
                  {ispaymentModeOption || " Mode Payment"}
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

            {isOpenMode && (
              <div className="origin-top-right absolute  mt-2 w-[10.5rem] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <div className="py-1">

                  {paymentModeOption.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handlepaymentModeClick(option)}
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
                <button
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
                </button>
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
)}

{/* offline  Payment Option  */}
{selectedOptionMenu === 'offline' && (
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
                  className="inline-flex justify-between w-[220px -ml-6  p-2 text-sm font-medium outline-none  hover:text-gray-700 hover:bg-white border border-gray-300 rounded-md bg-indigo-500 text-white focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200 active:bg-indigo-600"
                  id="options-menu"
                  aria-haspopup="true"
                  aria-expanded="true"
                  onClick={() => setIsOpen4(!isOpen4)}
                >
                  {isPaymentRecived ||  "Payment Recipient person"}
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
                <button
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
                </button>
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
)}

</div>
      
          
     
        <div>
      {/* <div className="flex ... mt-10 "> */}
       <table className="table my-8 mr-1 border border-gray-500  ">
            <thead >
              <tr className="bg-blue-700 text-white">
              <th className="py-2 px-4  border-2">No</th>
              <th className="py-2 px-4  border-2">Refund ID</th>
          <th className="py-2 px-4  border-2">Project Name</th>
          {/* <th className="py-2 px-4  border-2">Transaction Id</th> */}
          {/* <th className="py-2 px-4  border-2">Account Name</th> */}
          <th className="py-2 px-4  border-2">Refused Method</th>
          <th className="py-2 px-4  border-2">Account Name</th>
          <th className="py-2 px-4  border-2">Refused Amount</th>
        <th className="py-2 px-4  border-2">Refused Day</th>
        <th className="py-2 px-4  border-2">Status</th>
        <th className="py-2 px-4  border-2">see</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gray-200">
              <td className="py-3 px-4 border-2 border-gray-100">45</td>
              <td className="py-2 px-4 border-2 border-gray-100">45FDJJJSJSJ</td>
          <td className="py-2 px-4 border-2 border-gray-100">web dev</td>
          {/* <td className="py-2 px-4 border-2 border-gray-100">R55HIJ</td>
          <td className="py-2 px-4 border-2 border-gray-100">45FDJJJSJSJ</td> */}
          <td className="py-2 px-4 border-2 border-gray-100">Bank</td>
          <td className="py-2 px-4 border-2 border-gray-100">sbi Bank</td>
          <td className="py-2 px-4 border-2 border-gray-100">465 USD</td>
        <td className="py-2 px-4 border-2 border-gray-100">8=12= 23:02.23 AM</td>
        <td className="py-2 px-4 border-2 border-gray-100">sending</td>
        <td className="px-6 py-4 text-center border-2 border-gray-100">
                  <button className="bg-blue-500 text-white hover:bg-white hover:text-blue-600 hover:shadow-md rounded-md  py-1 px-3 text-[14px] transition-all" onClick={handlePopUp}>
                    View
                  </button>
                </td>
              </tr>

              {/* Just for Demo  Displaying  Remove Follwing Code  */}
              <tr className="bg-gray-200">
              <td className="py-3 px-4 border-2 border-gray-100">46</td>
          <td className="py-2 px-4 border-2 border-gray-100">Mr Jack</td>
          <td className="py-2 px-4 border-2 border-gray-100">Rewriting</td>
          {/* <td className="py-2 px-4 border-2 border-gray-100">45FDJJJSJSJ</td>
          <td className="py-2 px-4 border-2 border-gray-100">Bank</td> */}
          <td className="py-2 px-4 border-2 border-gray-100">mobile banking</td>
          <td className="py-2 px-4 border-2 border-gray-100">tsd Bank</td>
          <td className="py-2 px-4 border-2 border-gray-100">65 USD</td>
          <td className="py-2 px-4 border-2 border-gray-100">18=12= 23:02.23 AM</td>
        <td className="py-2 px-4 border-2 border-gray-100">panding</td>
        <td className="px-6 py-4 text-center border-2 border-gray-100">
                  <button className="bg-blue-500 text-white hover:bg-white hover:text-blue-600 hover:shadow-md rounded-md  py-1 px-3 text-[14px] transition-all" onClick={handlePopUp}>
                    View
                  </button>
                </td>
              </tr>
              <tr className="bg-gray-200">
              <td className="py-3 px-4 border-2 border-gray-100">47</td>
          <td className="py-2 px-4 border-2 border-gray-100">Mr Jack</td>
          <td className="py-2 px-4 border-2 border-gray-100">Rewriting</td>
          <td className="py-2 px-4 border-2 border-gray-100">45FDJJJSJSJ</td>
          <td className="py-2 px-4 border-2 border-gray-100">Bank</td>
          <td className="py-2 px-4 border-2 border-gray-100">18=12= 23:02.23 AM</td>
          <td className="py-2 px-4 border-2 border-gray-100">Online</td>
        <td className="py-2 px-4 border-2 border-gray-100">8=12= 23:02.23 AM</td>
        <td className="px-6 py-4 text-center border-2 border-gray-100">
                  <button className="bg-blue-500 text-white hover:bg-white hover:text-blue-600 hover:shadow-md rounded-md  py-1 px-3 text-[14px] transition-all" onClick={handlePopUp}>
                    View
                  </button>
                </td>
              </tr>
              {/* Just for Demo  Displaying  Remove Upper Code  */}
            </tbody>
         
          </table> 
   
    {/* </div> */}
    </div>
    </section>
    );
};

export default Notice;