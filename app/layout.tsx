import type { Metadata } from "next";
import { Inter } from "next/font/google";  // Import Inter font from Google Fonts
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"], // You can add other subsets if needed
});

export const metadata: Metadata = {
  title: "Mammothzy",
  description:
    "Mammothzy is a SaaS company that facilitates team bonding activities for HR professionals or team leaders",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased bg-gray-50 text-gray-900`} // Apply the Inter font here
        >
        {/* Navbar at the top */}
        <Navbar />
        {/* Sidebar and Main Content */}
        <div className="text-[#12151C] text-2xl font-bold mx-20 my-3">Create new Activity</div>
        <div className="flex flex-grow m-4">
          <Sidebar/>
          {/* Main content area */}
          <main className="flex-grow p-6">{children}</main>
        </div>
        <Footer/>
      </body>
    </html>
  );
}
