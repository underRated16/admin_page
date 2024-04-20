import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "../components/common/SideBar";
import NavBar from "../components/common/NavBar";
import ThemeProvider from '@/providers/ThemeProvider';
import SidebarProvider from "@/providers/SidebarProvider";
import Provider from "./provider"



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dashboard admin",
  description: "Dashboard admin build with nextjs ,typescript and tailwind",
 
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} `}>
        <ThemeProvider>
          <Provider>
            {children}
          </Provider >
        </ThemeProvider>
      </body>
    </html>
  );
}
