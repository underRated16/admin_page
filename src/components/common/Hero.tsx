"use client";
import { Inter } from "next/font/google";
import Image from "next/image";
import dynamic from "next/dynamic";
import { CartesianGrid, XAxis, YAxis, Tooltip, Legend, LabelList, Bar,} from "recharts";
import { DashboardData } from "@/constants/dashboardData";
import { Data } from "@/constants/data";
import { RedialData } from "@/constants/redialData";
import { NotifyData } from "@/types/NotifyData"; 
import {ChartComponent} from "@/components/ui/Linechart";
import { useState } from "react";


const ReBar = dynamic(
  () => import("recharts").then((module) => module.BarChart),
  { ssr: false }
);

const inter = Inter({ subsets: ['latin'] })






const notification1 = {
  id: 1,
  title: "New message from John",
  content: "Hey, how's it going?",
  timestamp: 1672546820, // Unix timestamp
  // ...other fields as needed
};



const HeroSection: React.FC = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [titleDisabled, setTitleDisabled] = useState<boolean>(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [isOrderDropdownOpen, setIsOrderDropdownOpen] = useState<boolean>(false);

  const [notifications, setNotifications] = useState<NotifyData[]>([
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


  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [showFullPage, setShowFullPage] = useState<boolean>(false);

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

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
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



  const [showPaymentTable, setShowPaymentTable] = useState<boolean>(false);
  const hanleShowpayment = () => {
    setShowPaymentTable(!showPaymentTable);
  };
    return (
        <>
 <div className="w-full flex justify-start mt-1 mb-3 ">

<h1 className="text-lg font-bold text-blue-800 text-start w-fit  mx-3 bg-gradient-to-t to-yellow-300 from-pink-500 p-2 rounded-tl-lg rounded-br-lg   ">DashBoard</h1>
</div>
      <div className={`full-page-content px-8 -mx-4 dark:bg- `}>
        <>
          <div className="grid grid-cols-6 gap-4 ">
            {DashboardData.map((item, i) => (
              <div key={i} className="bg-gradient-to-tr from-[#3949ac]  to-purple-900 p-4 rounded-tl-3xl rounded-br-3xl shadow-yellow-200  shadow-xl">
                <p className="text-white flex justify-between gap-8">
                  <span>{item.name}</span>

                  {/* <item.icon className="w-10 h-10 bg-green-500 rounded-full p-2" /> */}
                </p>
                <p className="text-xl text-white">$73,265</p>

                <div className="relative pt-1">
                  <div className="relative w-full py-1">
                    <div className="h-2 bg-blue-200 rounded-full ">
                      <div
                        style={{ width: `88%` }}
                        className="h-2 bg-green-500 rounded-full"
                      ></div>
                    </div>
                    <div className="flex  items-center justify-between">
                      <div>
                        <p className="text-xs  inline-block py-1  text-gray-100 ">
                          Previous period
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs  inline-block text-gray-100">
                          88%
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 ml-6 w-[280px]">
            <ChartComponent  />
          </div>

          <div className="mt-10 grid grid-cols-5 gap-4 ">
            <div className="bg-blue-950 p-4 col-span-5 rounded-md">
              <div className="mb-5">
                <p className="text-gray-200 text-2xl font-bold">
                  {" "}
                  Revenew by customer type
                </p>

                <div className="flex flex-row justify-end ">
                  <div>
                    <label htmlFor="fromDate"> </label>
                    <input
                       type="date"
                       id="fromDate"
                       value={endDate ? endDate.toISOString().split("T")[0] : ""}
                       onChange={(e) => setEndDate(new Date(e.target.value))}
                    ></input>
                  </div>
                  <div>
                    <label
                      htmlFor="toDate"
                      className="text-2xl text-white ml-6"
                    >
                      
                      To
                    </label>
                    <input
                      className="ml-6 w-60 h-12"
                      type="date"
                      id="toDate"
                      value={endDate ? endDate.toISOString().split("T")[0] : ""}
                      onChange={(e) => setEndDate(new Date(e.target.value))}
                   ></input>
                  
                  </div>
                </div>
              </div>
              <ReBar
                width={1040}
                height={400}
                data={Data}
                margin={{ bottom: 50 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  stroke="red"
                  dataKey="name"
                  tick={{ fill: "#d4d4d4" }}
                  className="text-[12px] p-0 m-0 tracking-tighter break-all"
                  angle={-45}
                  textAnchor="end"
                />
                <YAxis
                  tick={{ fill: "#d4d4d4" }}
                  className="text-[10px] p-0 m-0"
                  stroke="red"
                />
                <Tooltip
                  labelStyle={{ color: "#898a83" }}
                  itemStyle={{ color: "#898a83" }}
                />
                <Legend
                  wrapperStyle={{ color: "purple" }}
                  layout="vertical" // Position the legend vertically
                  align="right"
                />
                <Bar dataKey="pv" fill="#8884d8" stackId="a" barSize={20} />
                <Bar
                  dataKey="pv"
                  fill="#FFC0CB"
                  stackId="a"
                  barSize={10}
                >
                  {" "}
                  <LabelList
                    position="top"
                    formatter={(value:number) => {
                      if (value >= 1000) {
                        return `${Math.floor(value / 1000)}k`;
                      } else {
                        return value; // Display the original value if less than 1000
                      }
                    }}
                  />{" "}
                </Bar>
              </ReBar>
            </div>
          </div>
        </>
      </div>
    </>
    );
};

export default HeroSection;