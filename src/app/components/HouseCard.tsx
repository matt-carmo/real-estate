import Image from "next/image";
import { IHouse } from "../utils/generate-random-houses";
export const HouseCard = (props: { house: IHouse }) => {
  const USDollar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  return (
    <li className="rounded-lg overflow-hidden  border border-[#E0DEF7]">
      <div className="aspect-[3/2] relative overflow-hidden rounded-t-lg">
        <Image
          src={`/${props.house.image_url}`}
          alt="House Image"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="px-8 py-4 flex flex-col h-[215px] justify-between bg-white">
        <div className="flex items-end pt-4">
          <h3 className="text-2xl font-bold text-primary">
            {USDollar.format(props.house.price)}
          </h3>

          <span className="mb-0.5 text-gray-500">/month</span>
        </div>
        <div className="flex flex-col gap-y-1.5">
          <h2 className="text-2xl font-bold text-primaryText">
            {props.house.name}
          </h2>
          <span className="text-primaryText/50">{props.house.address}</span>
        </div>
        <hr />
        <div className="flex gap-x-4 text-sm justify-between">
          <div className="text-primaryText flex gap-2">
            <Image src="/bed.png" width={20} height={20} alt="" />
            <span className="text-primaryText/70 font-medium">
              {props.house.beds} {props.house.beds === 1 ? "Bed" : "Beds"}
            </span>
          </div>
          <div className="text-primaryText flex gap-2">
            <Image src="/bath.png" width={20} height={20} alt="" />
            <span className="text-primaryText/70 font-medium">
              {props.house.baths} {props.house.baths === 1 ? "Bath" : "Baths"}
            </span>
          </div>
          <div className="text-primaryText flex gap-2">
            <Image src="/square-meters.png" width={20} height={20} alt="" />
            <span className="text-primaryText/70 font-medium">
              {props.house.dimensions}
            </span>
          </div>
        </div>
      </div>
    </li>
  );
};
