'use client'
import React,{ ReactNode,FC} from 'react';


import Image from "next/image";
import LogoI from '../../../public/logo/i.png'
import LogoC from '../../../public/logo/c.png'
import Link from 'next/link';
import { useRouter } from 'next/router';
import  {NavItem}  from "@/constants/navItem";
import { useSidebarContext } from '@/providers/SidebarProvider';
type Props = {}

   
const Sidebar: FC<Props> = () => {
  const { openSidebar, setOpenSidebar } = useSidebarContext()
    // const router = useRouter();
    return (
        <nav className="relative  mr-8 h-full bg-indigo-950 ">
        <div
        className={`sm:none duration-175 linear fixed !z-50 flex min-h-full flex-col bg-white pb-10 shadow-2xl shadow-white/5 transition-all dark:!bg-navy-800 dark:text-white md:!z-50 lg:!z-50 xl:!z-0 
        ${openSidebar ? "translate-x-0" : "-translate-x-96"}`}
      ></div>
      
      <div className="fixed  h-full  bg-indigo-950">
         <Link href={"/"}>
        <div className="flex w-fit  mb-3 pt-2">
         <Image src={LogoI} alt="logo"  className="w-14 h-14 ml-4 cursor-pointer text-white" />
         <Image src={LogoC} alt="logo"  className="w-16 -ml-1 h-16 cursor-pointer text-white" />
        </div>
         </Link>
        

        {NavItem.map((item, index) => {
           return (
            <Link
              key={item.id}
              href={item.url}
              className={`flex flex-col items-start  m-1 ml-4  text-gray-900  border-gray-700 cursor-pointer hover:bg-indigo-800 rounded-full`}
            >
              <div className={`flex items-center justify-center p-1 `}>
                <item.icon className="w-4 h-4 text-white ml-2" />
                <span className={`p-2 text-sm text-left text-white `}>
                  {item.title}
                </span>
              </div>
            </Link>
            
          );
        })}
      </div>
    </nav>
    );
};

export default Sidebar;