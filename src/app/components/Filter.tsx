'use client';
import { Suspense } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { ListLocations } from "./ListLocations";
import Image from "next/image";
import useHandleNavigation from "../hooks/useHandleNavigation";
import { useSearchParams } from "next/navigation";

export const Filter = () => {
    
    const { handleOpenSelect } = useHandleNavigation();
    const search = useSearchParams().get("search");

  return (
    <div className="flex justify-between flex-col lg:flex-row gap-y-4 lg:gap-y-0">
      <div className="bg-[#f7f7fd] order-1 lg:order-2 lg:max-w-80 border border-[#E0DEF7] items-center justify-center flex gap-4 px-4 py-2 rounded-lg">
        <button className="flex items-center gap-2 w-full lg:w-auto bg-white py-2 px-3 rounded-lg border-[#E0DEF7] border">
          <Image src="/icon-rent.png" width={20} height={20} alt="" />
          <span>Rent</span>
        </button>
        <button className="flex items-center gap-2 w-full lg:w-auto  py-2 px-3 rounded-lg border-[#E0DEF7] opacity-40">
          <Image src="/icon-buy.png" width={20} height={20} alt="" />
          <span>Buy</span>
        </button>
        <button className="flex items-center gap-2 w-full lg:w-auto py-2 px-3 rounded-lg border-[#E0DEF7] opacity-40">
          <Image src="/icon-sell.png" width={20} height={20} alt="" />
          <span>Sell</span>
        </button>
      </div>
      <div className="relative flex gap-3 py-2 lg:py-0 px-4 border border-[#E0DEF7] bg-[#f7f7fd] rounded-md items-center">
        <FaMagnifyingGlass className=" flex" color="#7065F0" size={30} />
        <input
          type="text"
          onFocus={() => handleOpenSelect("searchIsOpen", "true")}
          placeholder={"Search by location"}
          value={search || ""}
        //   disabled={true}

          className="w-full px-1 py-2 bg-transparent focus:outline-none"
        />
        <Suspense fallback={<div>Loading...</div>}>
          {/* <BrowserProperties /> */}
          <ListLocations  className="top-14" />
        </Suspense>
      </div>
    </div>
  );
};
