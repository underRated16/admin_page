import type {navItem}  from "@/types/navItem";

import { GiReceiveMoney } from "react-icons/gi";
import { GoSignOut } from "react-icons/go";
import { GrTechnology } from "react-icons/gr";
import { MdOutlinePayment } from "react-icons/md";
import { RiAdminFill } from "react-icons/ri";
import { AiTwotoneSetting } from "react-icons/ai";
import {
  BiCategoryAlt,
  BiNotepad,
  BiSolidDashboard,
  BiSolidBookContent,
} from "react-icons/bi";
import { BsBorderStyle, BsFillChatLeftTextFill } from "react-icons/bs";

export const NavItem:navItem[] =[
    { id: 1, title: "Dashboard", url: "/", icon: BiSolidDashboard },
  { id: 3, title: "All users", url: "/pages/allUsers", icon: GiReceiveMoney },
  { id: 2, title: "All Orders", url: "/pages/orders", icon: BsBorderStyle },
  { id: 15, title: "All Payments", url: "/pages/allpayments", icon: BsBorderStyle },

  {
    id: 14,
    title: " Online Payment C",
    url: "/pages/onlinepayment-checking",
    icon: MdOutlinePayment,
  },
  {
    id: 13,
    title: " Offline Payment C",
    url: "/pages/offlinepayment-checking",
    icon: MdOutlinePayment,
  },
  {
    id: 12,
    title: "Offline Refund P",
    url: "/pages/payment-checking2",
    icon: MdOutlinePayment,
  },
  
  { id: 9, title: "Offline Refund P", url: "/pages/notice", icon: BiNotepad },
  {
    id: 4,
    title: "LB342BLI",
    url: "/pages/services",
    icon: GrTechnology,
  },
  {
  id: 5,
  title: "TSTBSNOC",
    url: "/pages/category",
    icon: BiCategoryAlt,
},
{ id: 6, title: "APSLCCB", url: "/pages/footers", icon: BiSolidBookContent },
  { id: 7, title: "Live Chat", url: "/pages/livechat", icon: BsFillChatLeftTextFill },
  {
    id: 8,
    title: "Create Admin",
    url: "/pages/createAdmin",
    icon: RiAdminFill,
  },
  { id: 9, title: "Setting", url: "/pages/setting", icon: AiTwotoneSetting },
  { id: 10, title: "Logout", url: "/pages/logout", icon: GoSignOut },
];