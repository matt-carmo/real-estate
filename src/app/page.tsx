import Image from "next/image";

import { FaAlignRight, FaBars, FaMagnifyingGlass } from "react-icons/fa6";
import { Header } from "./components/Header";
import { BrowserProperties } from "./components/BrowserProperties";
import { ListLocations } from "./components/ListLocations";
import { Suspense } from "react";
import { locations } from "./utils/locations";
import { generateHouses } from "./utils/generate-random-houses";
import { Houses } from "./components/Houses";
import { Filter } from "./components/Filter";

export default function Home() {


  return (
    <>
      <Header />
      <main className="mt-20">
        <section className="bg-gradient-to-b from-[#E0DEF7] to-transparent px-4 lg:px-0">
          <div className=" lg:bg-[url('/house.png')] bg-[length:720px] bg-w bg-no-repeat bg-right-bottom">
            <div className="container flex flex-col mx-auto max-w-[1200px] lg:pt-20 pt-10 gap-10 items-center lg:items-start">
              <div className="w-10/12 lg:max-w-xl flex flex-col gap-8 text-primaryText xl:text-start text-center">
                <h1 className="text-4xl lg:text-7xl font-semibold text-center">
                  Buy rent, or sell your property easily
                </h1>
                <h2 className="text-lg font-medium">
                  A great platform to buy, sell, or even rent your properties
                  without any commisions.
                </h2>
              </div>
              <Suspense fallback={<div>Loading...</div>}>
                <BrowserProperties />
              </Suspense>
              <div className="flex gap-x-4 lg:gap-x-20 mt-6">
                <div className="flex flex-col gap-3">
                  <Image
                    src="/icon-50k-plus-renters.png"
                    width={60}
                    height={60}
                    alt=""
                  />
                  <h3 className="font-semibold text-primary text-xl lg:text-2xl lg:mt-8 mt-2">
                    50k+ renters
                  </h3>
                  <h5 className="font-medium lg:text-lg text-sm">
                    believe in our service
                  </h5>
                </div>
                <div className="flex flex-col gap-3">
                  <Image
                    src="/icon-10k-plus-properties.png"
                    width={60}
                    height={60}
                    alt=""
                  />
                  <h3 className="font-semibold text-primary text-xl lg:text-2xl lg:mt-8 mt-2">
                    10k+ properties
                  </h3>
                  <h5 className="font-medium lg:text-lg text-sm">
                    and house ready for occupancy
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="flex flex-wrap max-w-[1200px] lg:mx-auto mx-4 bg-white lg:py-32 pt-20 pb-10 gap-x-32 ">
          <div className="w-[450px] bg-[#f7f7fd] border border-[#E0DEF7] rounded-lg px-8 pt-12 flex flex-col gap-6">
            <h2 className="font-bold text-3xl text-[#100A55]">
              The new way to find your new home
            </h2>
            <h5 className="text-[#100A55]">
              Find your dream place to live in with more than 10k+ properties
              listed.
            </h5>
            <div>
              <button className="bg-[#100A55] py-2 px-4 rounded-xl text-white font-medium">
                Browse Properties
              </button>
            </div>
            <img className="w-full" src="/Illustration.png" alt="" />
          </div>
          <div className="flex-1 py-10 lg:py-0 lg:flex lg:items-center">
            <ul className="grid lg:grid-cols-2 gap-x-4 gap-y-14">
              <li className="flex lg:flex-col lg:gap-y-4">
                <div className="w-48">
                  <Image src="/icon-house.png" width={60} height={60} alt="" />
                </div>
                <div className="flex flex-col lg:gap-y-4">
                  <h2 className="text-primaryText font-bold text-2xl">
                    Property Insurance
                  </h2>
                  <p className="text-[#4D5461]">
                    We offer our customer property protection of liability
                    coverage and insurance for their better life.
                  </p>
                </div>
              </li>
              <li className="flex lg:flex-col lg:gap-y-4">
                <div className="w-48">
                  <Image
                    src="/icon-arrow-down.png"
                    width={60}
                    height={60}
                    alt=""
                  />
                </div>
                <div className="flex flex-col lg:gap-y-4">
                  <h2 className="text-primaryText font-bold text-2xl">
                    Best Price
                  </h2>
                  <p className="text-[#4D5461]">
                    Not sure what you should be charging for your property? No
                    need to worry, let us do the numbers for you.
                  </p>
                </div>
              </li>
              <li className="flex lg:flex-col lg:gap-y-4">
                <div className="w-48">
                  <Image src="/icon-dollar.png" width={60} height={60} alt="" />
                </div>
                <div className="flex flex-col lg:gap-y-4">
                  <h2 className="text-primaryText font-bold text-2xl">
                    Lowest Commission
                  </h2>
                  <p className="text-[#4D5461]">
                    You no longer have to negotiate commissions and haggle with
                    other agents it only cost 2%!
                  </p>
                </div>
              </li>
              <li className="flex lg:flex-col lg:gap-y-4">
                <div className="w-48">
                  <Image
                    src="/icon-location.png"
                    width={60}
                    height={60}
                    alt=""
                  />
                </div>
                <div className="flex flex-col lg:gap-y-4">
                  <h2 className="text-primaryText font-bold text-2xl">
                    Overall Control
                  </h2>
                  <p className="text-[#4D5461]">
                    Get a virtual tour, and schedule visits before you rent or
                    buy any properties. You get overall control.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </section>
        <section
          id="properties"
          className="px-4 lg:px-0 bg-gradient-to-t from-[#F0EFFB] to-transparent justify-center flex flex-col pb-20"
        >
          <div className="max-w-[1200px] w-full mx-auto flex flex-col gap-10 pb-10">
            <div className="p-3 mx-auto text-center flex flex-col gap-4">
              <h2 className="text-4xl font-semibold text-primaryText">
                Based on your location
              </h2>
              <h5 className="text-primaryText">
                Some of our picked properties near you location.
              </h5>
            </div>
           <Suspense fallback={<div>Loading...</div>}>
           <Filter />
           <Houses />
           </Suspense>
          </div>
          
        </section>
        <section className="bg-[#100A55] text-white py-20 px-4 lg:px-0">
          <div className="max-w-[1200px] mx-auto  flex flex-col  gap-y-16">
            <div className="flex lg:flex-row flex-col gap-y-6 lg:gap-y-0 justify-between  text-center lg:text-left">
              <div className="max-w-[370px]">
                <h2 className="text-3xl font-bold">
                  We make it easy for
                  <span className="text-primary"> tenants</span> and{" "}
                  <span className="text-primary">landlords.</span>
                </h2>
              </div>
              <div className="max-w-[500px]">
                <p className="text-white/70">
                  Whether it’s selling your current home, getting financing, or
                  buying a new home, we make it easy and efficient. The best
                  part? you’ll save a bunch of money and time with our services.
                </p>
              </div>
            </div>
            <ul className="flex lg:flex-row flex-col gap-y-6 lg:gap-y-0 gap-x-6">
              <li className="bg-white/20 flex flex-col lg:flex-row max-w-[500px] gap-6 lg:gap-4 p-5 rounded-md">
                <div className="w-12 lg:w-auto">
                  <Image
                    src="/icon-vht.png"
                    width={100}
                    height={100}
                    className="w-36"
                    alt=""
                  />
                </div>
                <div className="flex flex-col gap-y-4">
                  <h4 className="font-semibold text-xl">Virtual home tour</h4>
                  <p className="text-white/70 text-sm">
                    You can communicate directly with landlords and we provide
                    you with virtual tour before you buy or rent the property.
                  </p>
                </div>
              </li>
              <li className="bg-white/20 flex flex-col lg:flex-row max-w-[500px] gap-6 lg:gap-4 p-5 rounded-md">
                <div className="w-12 lg:w-auto">
                  <Image
                    src="/icon-vht.png"
                    width={100}
                    height={100}
                    className="w-36"
                    alt=""
                  />
                </div>
                <div className="flex flex-col gap-y-4">
                  <h4 className="font-semibold text-xl">Virtual home tour</h4>
                  <p className="text-white/70 text-sm">
                    You can communicate directly with landlords and we provide
                    you with virtual tour before you buy or rent the property.
                  </p>
                </div>
              </li>
              <li className="bg-white/20 flex flex-col lg:flex-row max-w-[500px] gap-6 lg:gap-4 p-5 rounded-md">
                <div className="w-12 lg:w-auto">
                  <Image
                    src="/icon-vht.png"
                    width={100}
                    height={100}
                    className="w-36"
                    alt=""
                  />
                </div>
                <div className="flex flex-col gap-y-4">
                  <h4 className="font-semibold text-xl">Virtual home tour</h4>
                  <p className="text-white/70 text-sm">
                    You can communicate directly with landlords and we provide
                    you with virtual tour before you buy or rent the property.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <hr className="opacity-20 my-12" />

          <div className="flex lg:flex-row flex-col gap-y-12 justify-center gap-x-12">
            <div className="flex items-center justify-center flex-col gap-3">
              <div className="text-4xl font-semibold">7.4%</div>
              <div className="text-white/70">Property Return Rate</div>
            </div>
            <div className="flex items-center justify-center flex-col gap-3 lg:border-x-2 px-12 border-white">
              <hr className="bg-white w-12 mb-10 lg:hidden" />
              <div className="text-4xl font-semibold">3,856</div>
              <div className="text-white/70">Property in Sell & Rent</div>
              <hr className="bg-white w-12 mt-10 lg:hidden" />
            </div>
            <div className="flex items-center justify-center flex-col gap-3">
              <div className="text-4xl font-semibold">2,540</div>
              <div className="text-white/70">Daily Completed Transactions</div>
            </div>
          </div>
        </section>
        <section className="bg-[#F9F9FD] flex flex-col items-center py-16 gap-y-5 px-4 lg:px-0 text-center lg:text-left">
          <h4 className="text-2xl font-bold text-primary">No Spam Promise</h4>
          <h3 className="text-4xl font-bold">Are you a landlord?</h3>
          <p className="text-primaryText/50 font-medium">
            Discover ways to increase your home's value and get listed. No Spam.
          </p>
          <div className="flex flex-col lg:flex-row lg:bg-white py-3 w-full lg:w-auto rounded-lg gap-y-4 ">
            <input
              type="text"
              className="text-lg focus:outline-none lg:w-96 lg:pr-2 w-full py-4 lg:py-0  px-4 rounded-lg"
              placeholder="Enter your email address"
            />
            <button className="bg-primary text-white py-2 px-6 rounded-md text-lg w-full lg:w-auto">
              Submit
            </button>
          </div>
          <p className="text-primaryText/50">
            Join <span className="text-primary">10,000+</span> other landlords
            in our estatery community.
          </p>
        </section>
      </main>
    </>
  );
}
