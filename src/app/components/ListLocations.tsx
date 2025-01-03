'use client';
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { HtmlHTMLAttributes, useCallback, useEffect, useState } from "react";

interface iLocation {
  location_name: string;
  location_id: number;
  parent_location_id?: number;
}
const locations: iLocation[] = [
  {
    location_name: "São Paulo",
    location_id: 1,
  },
  {
    location_name: "Presidente Prudente",
    location_id: 2,
    parent_location_id: 1,
  },
  {
    location_name: "Campinas",
    location_id: 3,
    parent_location_id: 1,
  },
  {
    location_name: "Assis",
    location_id: 4,
    parent_location_id: 2,
  },
  {
    location_name: "Marília",
    location_id: 5,
    parent_location_id: 2,
  },
  {
    location_name: "Ourinhos",
    location_id: 6,
    parent_location_id: 2,
  },
  {
    location_name: "Dracena",
    location_id: 7,
    parent_location_id: 2,
  },
  {
    location_name: "Adamantina",
    location_id: 8,
    parent_location_id: 2,
  },
  {
    location_name: "Teodoro Sampaio",
    location_id: 9,
    parent_location_id: 2,
  },
  {
    location_name: "Paraguaçu Paulista",
    location_id: 10,
    parent_location_id: 2,
  },
];
export const ListLocations = (props:{
    className?: HtmlHTMLAttributes<HTMLDivElement>["className"];
}) => {
  const [selectedLocation, setSelectedLocation] = useState<string>("");
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  
  const [isOpen, setIsOpen] = useState<boolean>(searchParams.get("searchIsOpen") === "true");
  // Get a new searchParams string by merging the current
  // searchParams with a provided key/value pair
  useEffect(() => {
      setIsOpen(searchParams.get("searchIsOpen") === "true");
  }, [searchParams])
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())

      params.set(name, value)
      params.set("searchIsOpen", "false")
    //   setIsOpen(false)      
      router.push(`${pathname}?${params.toString()}`, { scroll: false });
    },
    [searchParams]
  )


  return (
    <ul className={`${props.className} ${isOpen ? "flex" : "hidden"} absolute left-0 z-20 w-full flex-col gap-2 bg-white p-4 rounded-lg mt-2 max-h-32 overflow-y-scroll`}>
      {locations.map((location) => (
        <li
          key={location.location_id}
          className={`${location.parent_location_id ? "ml-4" : "font-semibold"} cursor-pointer hover:opacity-80 `}
        >
        <button onClick={() => createQueryString("search", location.location_name)}>
          {location.location_name}
        </button>
        </li>
        
      ))}
    </ul>
  );
};
