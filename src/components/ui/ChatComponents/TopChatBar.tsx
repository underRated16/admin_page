
"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { FaCog } from "react-icons/fa";
import Link from "next/link";
interface ChatBarProps{
    item:any;
    onClick:(value:number)=>void;
    index:number;
}
const TopChatBar:React.FC<ChatBarProps> = ({ item, onClick, index }) => {
  const [settingIcon, setSettingIcon] = useState(false);
  const [showSetting, setShowSetting] = useState(false);
  const boxRef = useRef<HTMLDivElement  | null>(null);

const handleClickOutside = (event: MouseEvent) => {
    if (boxRef.current && !boxRef.current.contains(event.target as Node)) {
      // Clicked outside the box
      setShowSetting(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div
      onMouseEnter={() => setSettingIcon(true)}
      onMouseLeave={() => setSettingIcon(false)}
      className="pt-1 pb-1 px-5 m-1 items-center relative  cursor-pointer bg-neutral-100 rounded-lg "
      onClick={() => onClick(index)}
      
    >
      <div className="w-10 h-10 rounded-[50%] relative">
        <Image src={item.img} alt="" fill className="rounded-[50%]" />
      </div>
      <div className="bg-emerald-400 rounded-[50%] w-2 h-2 z-999 absolute right-6 top-9"></div>

      <div  className="text-center">
        <h1 className="text-center">{item.name}</h1>
        {/* <h1 className="text-gray-500 text-[14px]">{item.lastMesg}</h1> */}
      </div>
      <div className="absolute right-0 top-[25%]">
        {/* <h3 className=" text-[12px]">{item.day}</h3> */}
        <button
          className={` text-[14px] mt-2 ml-1 ${
            showSetting || settingIcon ? "block" : "hidden"
          }`}
          onClick={() => setShowSetting(!showSetting)}
        >
          <FaCog />
        </button>

        <div
          ref={boxRef}
          className={`text-left shadow border border-solid border-gray-50 rounded-md absolute right-0 flex-col z-10 items-start w-40 ${
            showSetting ? "flex" : "hidden"
          } bg-white`}
        >
          <Link
            href=""
            className="p-4 w-[100%] text-[14px]  border-b border-solid border-gray-300"
          >
            Mute
          </Link>
          <Link
            href=""
            className="pt-4 w-[100%] pl-4 block text-[14px] "
          >
            Archive
          </Link>
          <Link
            href=""
            className="p-4 w-[100%] border-b border-solid border-gray-300 text-[14px] text-red-400"
          >
            Delete
          </Link>
          <Link
            href=""
            className="pt-2 pl-4 w-[100%] text-[14px] "
          >
            Mark as Read
          </Link>
          <Link
            href=""
            className="pt-2 pl-4 w-[100%] text-[14px] "
          >
            Something's Wrong
          </Link>
          <Link
            href=""
            className="pt-2 pl-4 w-[100%] text-[14px] "
          >
            Ignore Messages
          </Link>
          <Link
            href=""
            className="pt-2 pb-4 pl-4 w-[100%] text-[14px] "
          >
            Block Messages
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopChatBar;