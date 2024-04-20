"use client";
import React, { useState } from "react";
// import { chatData } from "../../../../lib/data/mokeData";
// import ChatsCard from "../../components/ChatComponents/ChatsCard";
// import TopChatBar from "../../components/ChatComponents/TopChatBar";
import { FaPhone, FaRegSmileBeam } from "react-icons/fa";
import { IoSendSharp } from "react-icons/io5";
import { FaInfoCircle } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { GrAttachment } from "react-icons/gr";
import { BiCheckDouble, BiTrash } from "react-icons/bi";
import { FaClock } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import Image from "next/image";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { Switch } from "@nextui-org/react";
import { BsForward, BsThreeDotsVertical } from "react-icons/bs";
import { RiShareForwardFill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { HiMiniSpeakerWave, HiMiniSpeakerXMark } from "react-icons/hi2";
import { MdCallEnd } from "react-icons/md";
import { IoMdMic, IoMdMicOff } from "react-icons/io";
import { FaRegCircleUser } from "react-icons/fa6";
import CallDaillingModal from "@/components/ui/modal/CallDaillingModal";
import { chatData } from "@/constants/userData";
import TopChatBar from "@/components/ui/ChatComponents/TopChatBar";
import ChatsCard from "@/components/ui/ChatComponents/ChatsCard";

export default function Chat() {
  const [isManuOpen, setIsManuOpen] = useState(false);
  const [userModal, setUserModal] = useState(false);

  const [deleted, setIsDeleted] = useState(false);
  const [deletedme, setIsDeletedme] = useState(false);

  const [showDropManu, setShowDropManu] = useState(false);
  const [showDropManuCall, setShowDropManuCall] = useState(false);
  const [showForwartManu, setShowForwardManu] = useState(false);
// call dialing state
const [isDailed, setIsDailed] = useState(false);

// mute status

const [MuteStatus, setMuteStatus]= useState(false)
const [SoundStatus, setSoundStatus]= useState(false)



const handleShowDropManuCall = () => {
    setShowDropManuCall(!showDropManuCall);
    setShowDropManu(false);
  };

const handlemuteStatus =()=>{
       setMuteStatus(!MuteStatus)
}
const handleSoundStatus =()=>{
 setSoundStatus(!SoundStatus)
}

  const handleShowDropManu = () => {
    setShowDropManu(!showDropManu);
    setShowForwardManu(false);
  };

  

  const handleForwardClick = () => {
    setShowForwardManu(!showForwartManu);
  };

  const handledeleteme = () => {
    setIsDeletedme(true);
    setIsManuOpen(!isManuOpen);
  };

  const handledelete = () => {
    setIsDeleted(true);
    setIsManuOpen(!isManuOpen);
  };
  const [isManuOpen2, setIsManuOpen2] = useState(false);
  //  const [isOpenPopUp, setIsOpenPopUp]= useState([])

  // const toggleMenu = (index:any) => {
  //   if (isOpenPopUp.includes(index)) {
  //     setIsOpenPopUp(isOpenPopUp?.filter(item => item !==index))
  //   }else {
  //     setIsOpenPopUp([...isOpenPopUp, index])
  //   }
  //   // setIsManuOpen(!isManuOpen);
  // };
  const [isOpenPopUp, setIsOpenPopUp] = useState<number[]>([]);
const toggleMenu = (index: any) => {
  if (isOpenPopUp.includes(index)) {
    setIsOpenPopUp(isOpenPopUp.filter(item => item !== index));
  } else {
    setIsOpenPopUp([...isOpenPopUp, index]);
  }
  // setIsMenuOpen(!isMenuOpen);
};

  const toggoleManu2 = () => {
    

      setIsManuOpen2(!isManuOpen2);
  
  };
  const [isSelected, setIsSelected] = React.useState(true);
  const [selectedKeys, setSelectedKeys] = React.useState(new Set(["text"]));

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );

  const [activeChat, setActiveChat] = useState(0);
  console.log(activeChat);
  const chatChange = (index:number) => {
    setActiveChat(index);
  };
  return (
    <div className="grid h-[87vh] grid-cols-[25%_1fr] -mt-5 pb-4 gap-x-5 -ml-1 -mr-3 -pb-2 bg-[#187D8B]">

      <div className="border-r border-solid border-gray-300 pr-2 ">
        <span className="flex">

       
        <form className="mt-2">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <div className="flex justify-between items-end">
              <input
                type="search"
                id="default-search"
                className="block w-full p-4 ps-10 h-8 text-sm placeholdeer-gray-300 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search messages or users"
              />
            
              
            </div>

            {/* <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button> */}
          </div>
        </form>
        <div className="mt-2">

<button
  className="text-blue-500 py-2 mx-1 bg-gray-200 px-4  dark:bg-black dark:text-white shadow-lg rounded-lg border border-solid cursor-pointer border-gray-300"
  
  >
  <FiSettings  onClick={handleShowDropManuCall} />
</button> 
  </div>
  
  </span>
  <div className=" text-white relative">
    <div className=" cursor-pointer relative w-full bg-gray-900 bg-opacity-60 p-2 rounded-xl my-2" onClick={() => setUserModal(!userModal)}
>
     All people
    </div>
   {userModal && <div className=" cursor-pointer absolute size-56 -right-56  rounded-xl top-0 bg-gray-900 bg-opacity-80 p-2 z-50 flex flex-col gap-2">
   <div className=" w-full bg-gray-900 bg-opacity-90 p-2 rounded-xl">
      Request help 10
    </div> <div className=" w-full bg-gray-900 bg-opacity-90 p-2 rounded-xl">
      Forward Request 5
    </div> <div className=" w-full bg-gray-900 bg-opacity-90 p-2 rounded-xl">
      Cancel users 6
    </div> <div className=" w-full bg-gray-900 bg-opacity-90 p-2 rounded-xl">
      Blocked users 8
    </div>
    </div>}
    <div className=" w-full bg-gray-900 bg-opacity-60 p-2 rounded-xl">
      All users
    </div>
  </div>
        <div className="flex flex-row mt-4  mr-5 ">
          {chatData.slice(0, 3).map((item:any, index:number) => (
            <TopChatBar
              key={index}
              item={item}
              index={index}
              onClick={chatChange}
            />
          ))}
        </div>
        <div className="h-[430px] overflow-y-scroll ">
        {chatData.map((item:any, index:number) => (

          <ChatsCard
            key={index}
            item={item}
            index={index}
            onClick={chatChange}
            
            />
            ))}
            </div>
      </div>
      <div className="w-full -ml-4 ">
      
      {/* [#3949ac]  */}
              {/* bg-[#39b7ea] */}
        <div className="flex justify-between  bg-[#39b7ea]   dark:bg-gray-500 dark:text-white -mr-4  items-center px-6 py-1 border-b border-solid border-gray-300 ">
          <div className="flex justify-between item-center ">
            <div className=" relative size-12 mr-3">
              <Image
                src={chatData[activeChat].img}
                alt=""
                fill
                className="rounded-[50%]  "
              />
            </div>
            <div>
              <h1>{chatData[activeChat].name}</h1>
              <h1 className="text-gray-500 dark:text-white text-[11px]">Active on Chat</h1>
            </div>
          </div>
          <div className="flex  gap-x-2">
            <button className="text-blue-500 py-2 px-4 shadow-lg bg-gray-100  dark:bg-black dark:text-white rounded-lg border border-solid border-gray-300"
            onClick={() => setIsDailed(true)}
            >
              <FaPhone />
            </button>
            <button className="text-blue-500 py-2 px-4 shadow-lg bg-gray-100  dark:bg-black dark:text-white rounded-lg border border-solid border-gray-300">

            <FaMinus/>
            </button>
            <div className="flex  gap-x-2">
              <button
                className="text-blue-500 py-2 px-4 shadow-lg bg-gray-300  dark:bg-black dark:text-white rounded-lg border border-solid cursor-pointer border-gray-300"
                onClick={handleShowDropManu}
              >
                <FiSettings />
              </button>
            </div>
          </div>
         
        </div>

        <div className=" h-[79%] bg-[#a6c0c7] rounded-b-md   dark:bg-gray-500 dark:text-white -mr-4   p-4">
          {chatData[activeChat].messages?.map((item:any, index:number) => {
            return item.sender === "You" ? (
              <div
                className="flex justify-end items-center gap-x-2 "
                key={index}
              >
                <div className="flex gap-1">
                  <div className="relative inline-block text-left ">
                    <div>
                      <button
                        type="button"
                        id="option-manu"
                        className="inline-flex  font-extrabold  p-1 mt-2  rounded-full justify-center w-full roumnded-md"
                        onClick={toggoleManu2}
                      >
                        <BsThreeDotsVertical size={25}/>
                      </button>
                      {isManuOpen2 && (
                        <div className="origin-top-right absolute z-10 right-0 mt-2 w-36  rounded-md shadow-sm bg-white ring-1 ring-black ring-opacity-5">
                          <div
                            role="manu"
                            aria-orientation="vertical"
                            aria-labelledby="opetion-menu"
                            className="py-1"
                          >
                            <button
                              role="manuitem"
                              className="block  px-4 py-2 text-sm text-gray-700  w-full text-left"
                            >
                              Copy
                            </button>{" "}
                           
                            <button
                              onClick={handledeleteme}
                              role="manuitem"
                              className="block px-4 py-2 text-sm text-gray-700  w-full text-left"
                            >
                              Delete
                            </button>{" "}
                          </div>{" "}
                        </div>
                      )}
                    </div>
                    <div className="mt-2"></div>
                  </div>
                  {deletedme ? (
                    " You delete this message"
                  ) : (
                    <h1 className="p-4 bg-blue-500 bg-opacity-35 text-[14px]  text-white rounded-se-[2rem] rounded-ss-[2rem] rounded-es-[2rem] ">
                      {console.log(chatData[activeChat].messages)}
                      {chatData[activeChat].messages[2].text}
                      <div className="flex  mt-2 justify-between">
                        <div className="flex">
                          <FaClock color="skyBlue" className="mr-1" />
                          <span className="text-white text-xs">10:00 </span>
                        </div>

                        <div>
                          {" "}
                          <BiCheckDouble color="blue" />
                        </div>
                      </div>
                    </h1>
                  )}
                </div>
              </div>
            ) : (
              <div
                key={index}
                className="flex justify-start items-center gap-x-2 mb-12 text-gray-600 text-[14px] "
              >
                <Image
                  src={chatData[activeChat].img}
                  alt="img"
                  width={50}
                  height={50}
                  className="rounded-[50%]"
                />
                <div className="flex gap-1 items-center">
                  {deleted ? (
                    <h1 className="p-4 bg-[#5b3b6d]  w-full text-white rounded-se-[3rem] rounded-ee-[3rem] rounded-ss-[3rem] ">
                      this message is deleted
                    </h1>
                  ) : (
                    <h1 className=" bg-white bg-opacity-10 p-4 flex  justify-center items-center  w-2/3 h-auto text-white  rounded-full ">
                      {/* {console.log(chatData[activeChat].messages)} */}

                      {chatData[activeChat].messages[2].text}
                      <div className="flex ">
                        <FaClock color="skyBlue" className="" />
                        <span className="text-white text-xs">10:00</span>
                      </div>
                      <div>
                        {" "}
                        <BiCheckDouble color="green" />
                      </div>
                    </h1>
                  )}
                  <div className="relative inline-block text-left ">
                    <div>
                      <button
                        type="button"
                        id="option-manu"
                        className="inline-flex font-extrabold  p-1  rounded-full justify-center w-full roumnded-md"
                        onClick={()=>toggleMenu(index)}
                      >
                        <BsThreeDotsVertical size={20} />
                      </button>
                      {isOpenPopUp.includes(index) && (
                        <div className="origin-top-right absolute right-0 mt-2 w-36  rounded-md shadow-sm bg-white ring-1 ring-black ring-opacity-5">
                          <div
                            role="manu"
                            aria-orientation="vertical"
                            aria-labelledby="opetion-menu"
                            className="py-1"
                          >
                            <button
                              role="manuitem"
                              className="block px-4 py-2 text-sm text-gray-700  w-full text-left"
                            >
                              Copy
                            </button>{" "}
                           
                            <button
                              role="manuitem"
                              onClick={handledelete}
                              className="block px-4 py-2 text-sm text-gray-700  w-full text-left"
                            >
                              Delete
                            </button>{" "}
                          </div>{" "}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="px-6  flex w-full h-[80px] outline-none items-center gap-2 ">
          <div className=" border-2 ps-1 rounded-full border-gray-500 w-full bg-gray-100  flex items-center pe-2">
            <button className="text-yellow-800 py-2 px-4  rounded-full   border-gray-300">
              <GrAttachment size={20} />
            </button>
            <input
              type="text"
              placeholder="type your message"
              className="w-full px-3 bg-gray-100 rounded-full text-black "
            />
            <FaRegSmileBeam  size={30}/>
          </div>
          <div className="h-12 w-12   rounded-full border-black text-white p-1 flex items-center justify-center">
            <IoSendSharp color="yellow" size={30} />
          </div>
        </div>
      </div>
      {/* call dailing modal */}
      <CallDaillingModal
        isVisible={isDailed}
        onClose={setIsDailed}
        className="mt-6 "
      >
        <div className=" md:mt-3 flex flex-col justify-between items-center text-white p-2 rounded  w-64 h-72">
          <div className="flex flex-col mt-3 gap-y-3 items-center">
            <div className="rounded-full">
              <FaRegCircleUser className=" text-6xl text-gray-500" />
            </div>
            <div className="text-xl mt-1">David Evle</div>
            <div className="flex gap-2 items-center justify-center w-full text-sm font-semibold  "> 
          <p>11 :</p>   <p>39 :</p>  <p>12</p>  
          </div>
          </div>
          
          <div className="flex justify-center space-x-4 mt-4 gap-5  ">
            <button className="bg-green-500 text-white px-3.5 py-3.5 rounded-full" onClick={handlemuteStatus}>
              {MuteStatus ? <IoMdMicOff size={20} /> : <IoMdMic size={20} />}
              
            </button>
            <button
              className="bg-red-500 text-white px-3.5 py-3.5 rounded-full"
              onClick={() => setIsDailed(false)}
            >
              <MdCallEnd size={20}/>
            </button>
            <button className="bg-yellow-500 rounded-full text-white px-3.5 py-3.5" onClick={handleSoundStatus}>
              {SoundStatus ? <HiMiniSpeakerXMark size={20} /> : <HiMiniSpeakerWave  size={20}/>  }
              
            </button>
          </div>
        </div>
      </CallDaillingModal>
      {showDropManu && (
        <div className="fixed top-32 right-10  flex items-start justify-end  ">
          <div className="bg-blue-900 text-white rounded-lg p-3 w-30 space-y-1">
            <div key={""}>
              <div
                className="flex justify-between mb-1"
                onClick={handleForwardClick}
              >
                <button>Forward</button>
                <span>
                  <RiShareForwardFill size={30} color="white" />
                </span>
              </div>
            </div>
            <div key="text">
              <span className="mr-5 font-medium text-white dark:text-gray-300">
                Mute
              </span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
              </label>
            </div>
            <div key="number">
              <span className=" mr-5 font-medium text-white dark:text-gray-300">
                Block
              </span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
              </label>
            </div>

            <div key="iteration">
              <div className="flex justify-between">
                <span>Delete</span>{" "}
                <span>
                  <BiTrash size={30} />{" "}
                </span>
              </div>{" "}
            </div>
          </div>
        </div>
      )}
      
      {showDropManuCall && (
        <div className="fixed top-28 left-60  flex items-start   ">
          <div className="bg-blue-900 text-white rounded-lg p-3 w-30 space-y-1">
            
            <div key="" className="flex  justify-between ">
              <span className="mr-5 font-medium text-white dark:text-gray-300">
                OutComming Call
              </span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
              </label>
            </div>
            <div key="" className="flex  justify-between ">
              <span className=" mr-5 font-medium text-white dark:text-gray-300">
                Incoming Call
              </span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
              </label>
            </div>
            <div key="" className="flex  justify-between ">
              <span className=" mr-5 font-medium text-white dark:text-gray-300">
                Notification
              </span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
              </label>
            </div>
          </div>
        </div>
      )}



      {showForwartManu && (
        <div className="fixed top-32 right-44 flex items-start justify-end  ">
          <div className="bg-gray-200 text-balck rounded-lg p-1 w-32">
            <ul className="rounded  ">
              <li className="flex gap-1 items-center   my-1 cursor-pointer">
                <span className="w-8 h-8 rounded-full p-1 flex justify-center items-center bg-blue-950 text-white">
                  {" "}
                  <CgProfile size={28} />
                </span>
                <p className="px-2">Mr Jack</p>
              </li>
              <li className="flex gap-1 items-center   my-1 cursor-pointer">
                <span className="w-8 h-8 rounded-full p-1 flex justify-center items-center bg-blue-950 text-white">
                  {" "}
                  <CgProfile size={28} />
                </span>
                <p className="px-2">Mr Jack</p>
              </li>
              <li className="flex gap-1 items-center   my-1 cursor-pointer">
                <span className="w-8 h-8 rounded-full p-1 flex justify-center items-center bg-blue-950 text-white">
                  {" "}
                  <CgProfile size={28} />
                </span>
                <p className="px-2">Mr Jack</p>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

//      export default Chat;


