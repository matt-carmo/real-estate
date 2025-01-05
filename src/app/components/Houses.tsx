"use client";
import { HouseCard } from "./HouseCard";

import { generateHouses, IHouse } from "../utils/generate-random-houses";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { locations } from "../utils/locations";
export const Houses = () => {
  // const searchParams = useSearchParams();
  const [page, setPage] = useState(1);
  const [totalHouses, setTotalHouses] = useState<IHouse[]>(
    generateHouses(1000)
  );

  const [filteredHouses, setFilteredHouses] = useState<IHouse[]>(totalHouses);
  const [houses, setHouses] = useState<IHouse[]>(filteredHouses.slice(0, 9));
  const searchParams = useSearchParams();
  const search = searchParams.get("search");

  useEffect(() => {
    const locationId = locations
      .filter(
        (location) =>
          location.location_name.toLowerCase() === search?.toLowerCase()
      )
      .map((location) => location.location_id)[0];

    if (search) {
      const filteredHouses = totalHouses.filter(
        (house) => house.location_id === locationId
      );

      setFilteredHouses(filteredHouses);
      setHouses([...filteredHouses.slice(0, 9)]);
    }
  }, [search]);

  // const [pages, ] = Math.ceil(totalHouses.length / 9);

  useEffect(() => {
    if (page === 1) return;
    setHouses([
      ...houses,
      ...filteredHouses.slice((Number(page) - 1) * 9, Number(page) * 9),
    ]);

    console.log(houses);
  }, [page]);

  return (
    <>
      <ul className="grid lg:grid-cols-3 gap-10">
        {houses.map((house) => (
          <HouseCard key={house.id} house={house} />
        ))}
      </ul>
      <button
        onClick={() => setPage(page + 1)}
        className="bg-[#100A55] text-white px-5 py-3 rounded-lg font-semibold mx-auto"
      >
        Browser more properties
      </button>
    </>
  );
};
