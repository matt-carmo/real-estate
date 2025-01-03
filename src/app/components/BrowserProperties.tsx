"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { ListLocations } from "./ListLocations";

type iFilter = "rent" | "buy" | "sell";

export const BrowserProperties = () => {
  const router = useRouter();

  const searchParams: URLSearchParams = useSearchParams();

  const filterSearch: string = searchParams.get("filter") || "rent";
  const [search, setSearch] = useState(searchParams.get("search") || "");
  const [selectedLocation, setSelectedLocation] = useState<string>("");
    const pathname = usePathname()

  const [choseFilter, setChoseFilter] = useState<string>(
    searchParams.get(filterSearch) || "rent"
  );
  useEffect(() => {
    setSelectedLocation(searchParams.get("search") || "");
    setChoseFilter(searchParams.get("filter") || "rent");
  }, [searchParams]);
  const setSearchValue = (event: React.ChangeEvent<HTMLInputElement>) => {
 
    setSearch(event.target.value);
    
  };

  const handleOpenSelect = (name: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString())

    params.set(name, value)
  
  //   setIsOpen(false)      
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };
  const handlechoseFilter = (filter: iFilter) => {
    
    router.push(`?search=${search}&filter=${filter}`, { scroll: false });
  };
  const handleLocation = () => {
    router.push(`?search=${selectedLocation}&filter=${choseFilter}#properties`, { scroll: false });
    const propertiesElement = document.getElementById("properties");
    
    if (propertiesElement) {
      propertiesElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="lg:w-8/12 w-full max-w-4xl relative">
      <ul className="flex justify-around  font-medium w-full  lg:w-5/12 rounded-t-lg bg-white ">
        <li className="w-full flex justify-center">
          <button
            onClick={() => handlechoseFilter("rent")}
            className={` ${`${
              choseFilter === "rent"
                ? "border-primary border-b-2 text-primary"
                : "border-gray-200  border-b"
            }`} p-3 w-full text-center`}
          >
            Rent
          </button>
        </li>
        <li className="w-full flex justify-center">
          <button
            onClick={() => handlechoseFilter("buy")}
            className={` ${`${
              choseFilter === "buy"
                ? "border-primary border-b-2 text-primary"
                : "border-gray-200 border-b"
            }`} p-3 w-full text-center`}
          >
            Buy
          </button>
        </li>
        <li className="w-full flex justify-center">
          <button
            onClick={() => handlechoseFilter("sell")}
            className={`${`${
              choseFilter === "sell"
                ? "border-primary border-b-2 text-primary"
                : "border-gray-200 border-b"
            }`} p-3 w-full text-center`}
          >
            Sell
          </button>
        </li>
      </ul>
      <div className="flex items-center shadow-xl shadow-primary/10 bg-white p-3 rounded-b-lg lg:rounded-e-lg">
        <div className="w-full">
          <input
            onChange={setSearchValue}
            onFocus={() => handleOpenSelect("searchIsOpen", "true")}
            onBlur={() => handleOpenSelect("searchIsOpen", "false")}
            type="text"
            value={search}
            placeholder="Location"
            className="w-full p-3 bg-white focus:outline-none placeholder-zinc-400 font-medium"
          />
          <h2 className="font-bold pl-3">{selectedLocation || "Search Location"}</h2>
        </div>
        <button
          onClick={() => handleLocation()}
          disabled={selectedLocation === ""}
          className={`${selectedLocation !== "" ? "bg-primary" : "bg-gray-400 opacity-70"} text-white px-5 py-3 rounded-lg`}
        >
          <FaMagnifyingGlass
            className="lg:hidden flex"
            color="#fff"
            size={16}
          />
          <h3 className="font-semibold lg:flex hidden text-nowrap">
            Browser Properties
          </h3>
        </button>
      </div>
      <ListLocations />
    </div>
  );
};
