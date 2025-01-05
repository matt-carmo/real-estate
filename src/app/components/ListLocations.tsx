'use client';
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { HtmlHTMLAttributes, Suspense, useCallback, useEffect, useState } from "react";
import { locations } from "../utils/locations";


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
    
    <Suspense fallback={<div>Loading...</div>}


    ><ul className={`${props.className} ${isOpen ? "flex" : "hidden"} absolute left-0 z-20 w-full flex-col gap-2 bg-white p-4 rounded-lg mt-2 max-h-64 overflow-y-scroll`}>
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
    </Suspense>


  );
};
