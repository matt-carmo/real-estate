"use client";
import { FaBars } from "react-icons/fa6";
import Image from "next/image";
import { useState } from "react";
export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="fixed px-4 text-primaryText top-0 left-0 right-0 w-full z-10 flex items-center justify-between h-20 border-b-2 border-gray-100 bg-[#EDECFB]">
      <div className="w-full max-w-[1600px] mx-auto flex items-center justify-between">
        <div className="flex gap-4 items-center  ">
          <div className="flex items-center">
            <Image src="/logo.png" width={32} height={32} alt="logo" />
            <span className="text-xl font-bold text-[#100A55]">
              Real Estate
            </span>
          </div>

          <ul
            className={`lg:max-h-none flex flex-col lg:flex-row lg:static absolute lg:flex  top-20 left-0 lg:ml-20 right-0 bg-[#EDECFB] items-center  lg:py-0 z-20  gap-16 lg:h-auto transiction transition-height duration-200 text-lg font-medium ${
              isOpen ? "max-h-screen py-10" : " max-h-0 py-0 overflow-hidden"
            } `}
          >
            <li>
              <button>Rent</button>
            </li>
            <li>
              <button>Buy</button>
            </li>
            <li>
              <button>Sell</button>
            </li>
            <li>
              <button>Manage</button> <button>Property</button>
            </li>
            <li>
              <button>Resources</button>
            </li>
            <li className="lg:hidden w-10/12 flex flex-col gap-4">
              <button className=" font-semibold border-primaryText/10 border-2 px-4 py-2 rounded-lg w-full">
                Login
              </button>
              <button className="bg-primary text-white px-4 py-2 rounded-lg w-full">
                Sign Up
              </button>
            </li>
          </ul>
        </div>
        <div className="gap-2 items-center hidden lg:flex">
          <button className=" font-semibold border-primaryText/10 border-2 px-4 py-2 rounded-lg">
            Login
          </button>
          <button className="bg-primary text-white px-4 py-2 rounded-lg">
            Sign Up
          </button>
        </div>
        <div className="items-center  lg:hidden flex ">
          <button className="z-50 relative" onClick={toggleMenu}>
            <FaBars color="#000929" size={24} />
          </button>
        </div>
      </div>
    </header>
  );
};
