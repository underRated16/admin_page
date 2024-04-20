"use client";
import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { TfiReload } from "react-icons/tfi";
import { GoScreenFull } from "react-icons/go";
import { RxCrossCircled } from "react-icons/rx";
import {FaBell } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import Image from "next/image";
import DarkMoodButton from "@/components/ui/DarkMoodContaxt";
import OrderProduct from "@/components/ui/Order/page";


const NavBar:React.FC = () => {
    const [showFullPage, setShowFullPage] = useState<boolean>(false); //for dark mood
    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
    const [isOrderDropdownOpen, setIsOrderDropdownOpen] = useState<boolean>(false);
    interface Notification {
        id: number;
        title: string;
        content: string;
      }
    const [notifications, setNotifications] = useState<Notification[]>([
      {
        id: 1,
        title: "New message",
        content: "You have a new message from John",
      },
      { id: 2, title: "Order update", content: "Your order has been shipped" },
      { id: 3, title: "Order update", content: "Your order has been shipped" },
      { id: 4, title: "Order update", content: "Your order has been shipped" },
      { id: 5, title: "Order update", content: "Your order has been shipped" },
      { id: 6, title: "Order update", content: "Your order has been shipped" },
      { id: 7, title: "Order update", content: "Your order has been shipped" },
    ]);
    const [isDarkMode, setIsDarkMode] = useState<boolean | undefined>(undefined);
  // const [toggleMode,setIsDarkMode]=useState();
  
    //  const { toggle1DarkMode}= useDarkMode();
  
    const handleButtonClick = () => {
      if (showFullPage) {
        document.exitFullscreen();
      } else {
        const rootElement = document.documentElement;
        if (rootElement.requestFullscreen) {
          rootElement.requestFullscreen();
        }
      }
  
      setShowFullPage(!showFullPage);
    };
  
      const toggleDarkMode = ()=>{
        setIsDarkMode(!isDarkMode)
    }
    const Refreshpage = () => {
      window.location.reload();
    };
     
    const handleNotificationClick = () => {
      setIsDropdownOpen(!isDropdownOpen);
      setIsOrderDropdownOpen(false);
    };
  
    const notificationCount = notifications.length;
  
    const handleOrderDropdown = () => {
      setIsOrderDropdownOpen(!isOrderDropdownOpen);
      setIsDropdownOpen(false);
    };
  
    // const handleMode = () => {
    //   setMode(!mode);
    // };
  
    return (
        <div className="flex flex-row-reverse rounded-r-md p-4 gap-6 -ml-8 bg-indigo-950 ">
      <button className={`text-2xl text-white hover:scale-125  `}>
        <CgProfile size={30} />
      </button>
      <div className=' p-2 bg-blue cursor-pointer ' onClick={Refreshpage}>refresh</div>
      <button
        onClick={handleNotificationClick}
        className={`text-2xl  hover:scale-125 text-white relative`}
      >
        <FaBell />
        {notificationCount > 0 && (
          <div className="absolute top-[-8px] right-[-4px] bg-red-500 text-xs text-white px-1 py-[1px] border border-white  rounded-full  ">
            {notificationCount}
          </div>
        )}
      </button>

      <button onClick={handleOrderDropdown} className={`text-2xl text-white `}>
        <FaShoppingCart />
        {notificationCount > 0 && (
          <div className="absolute top-[-8px] right-[-4px] bg-red-500 text-xs text-white px-1 py-[1px] border border-white  rounded-full  ">
            {notificationCount}
          </div>
        )}
      </button>

      <button className={`text-2xl text-white`} onClick={handleButtonClick}>
        <GoScreenFull />
        {notificationCount > 0 && (
          <div className="absolute top-[-8px] right-[-4px] bg-red-500 text-xs text-white px-1 py-[1px] border border-white  rounded-full  ">
            {notificationCount}
          </div>
        )}
      </button>
      <button className={`text-2xl text-white`} >
        <DarkMoodButton />
      </button>
      <button className=" text-white cursor-pointer " onClick={Refreshpage}>
        <TfiReload size={30} />
      </button>
      <div className="flex gap-1 p-1 border-2 border-white outline-none rounded-2xl  ">
        <button className={`text-2xl  hover:scale-125  text-white`}>
          <CiSearch />
        </button>
        <input
          type="text"
          className={`outline-none border-none hover:border-none w-[350px] bg-indigo-950 text-white pl-2 `}
          placeholder="Write to Search...."
        />
      </div>

      <div>
        {isDropdownOpen && (
          <div className="dropdown-content  absolute z-50  right-20 border-2 top-20 bg-gray-100  ">
            <header className="w-ful  bg-blue-700 flex justify-around items-center p-2">
              <h2 className="font-bold text-nowrap text-lg  text-white">
                Shopping Card
              </h2>
              <button className=" bg-[#4b4bb6] px-4 py-2 text-white font-bold">
                Items
              </button>
            </header>
            <div className="h-[450px] overflow-scroll ">
              {notifications.map((notification) => (
                <div key={notification.id} className="notification-item">
                  <div className="card flex gap-2  cursor-pointer hover:bg-blue-100">
                    <div className="w-14 h-14  rounded-md p-1 flex justify-center items-center">
                      <Image
                        src={
                          "https://render.fineartamerica.com/images/images-profile-flow/400/images/artworkimages/mediumlarge/2/1-elvis-presley-on-milton-berle-michael-ochs-archives.jpg"
                        }
                        alt=""
                        width={70}
                        height={70}
                        className="rounded-sm"
                      />
                    </div>
                    <div className="flex justify-between items-center w-full px-2  ">
                      <span>
                        <h2 className="Product-Name">{notification.title}</h2>
                        <span className="gap-2">{notification.content}</span>
                      </span>
                      <span className="items-end cursor-pointer ">
                        <RxCrossCircled size={10} />
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <footer className="w-full px-6 pt-2  gap-4 bg-white z-50 flex flex-col justify-center   absolute bottom-3 ">
              <div className="flex justify-between px-4 ">
                <h3 className="font-bold text-sm text-gray-600">Total</h3>
                <p className="font-bold text-sm text-gray-600">$500.0</p>
              </div>
              <button
                type="button"
                className="bg-blue-600 w-full rounded-md  p-2 text-white font-bold"
              >
                Proceed Cheakout
              </button>
            </footer>
          </div>
        )}
      </div>
      <div>
        {isOrderDropdownOpen && (
          <div className="dropdown-content absolute z-50 right-28 w-80 border-2 h-96 top-20 bg-gray-100 rounded-sm">
            {/* {notifications.map((notification) => ( */}
            <div /* key={notification.id} */ className=" notification-item">
              <OrderProduct />
            </div>
            {/* ))}  */}
          </div>
        )}
      </div>
    </div>
    );
};

export default NavBar;