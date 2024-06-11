"use client";
import { myStore } from "@/app/zustand/zustand";
import { LogoDark } from "@/constants/exports";
import { NavbarLinks } from "@/interface/exports";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Menu from "./Menu";

const Navbar = () => {
  const navbarRef = useRef<HTMLDivElement | null>(null);
  const handleMenuClick = myStore((state: any) => state.handleMenuClick);
  const menuOpen = myStore((state: any) => state.menuOpen);
  const [cartPopUp,setCartPopUp]=useState<HTMLDivElement | boolean>(false);

  //    const SliderRef = useRef<HTMLDivElement | null>(null);

   useEffect(() => {
     const windowHeight = window.innerHeight;
     const myelement = document.getElementById("Hero_Text");
     const HandleScroll = () => {
       if (myelement) {
          const rect = myelement.getBoundingClientRect()
         const top = rect.top;
         if (window.screenY > top && navbarRef.current) {
           navbarRef.current.style.background = "#f4ecdf";
           navbarRef.current.style.position = "fixed";
           navbarRef.current.style.top = "0";
         } else {
           if (navbarRef.current) {
             navbarRef.current.style.position = "relative";
             navbarRef.current.style.background = "transparent";
           }
         }
       }
     };
     window.addEventListener("scroll", HandleScroll);
     return () => {
       window.removeEventListener("scroll", HandleScroll);
     };
   }, []);

   const HandleCartPopup = ()=>{
    setCartPopUp((cartPopUp)=>!cartPopUp)
   }

  return (
    <div
      ref={navbarRef}
      className="flex relative items-center justify-center w-full border-b border-[#EDDFC6] base:py-4 py-8 z-50 duration-1000"
    >
      <section
        className={`absolute hidden base:flex overflow-clip  duration-1000 inset-0 top-full ${
          menuOpen ? "h-[100vh]" : "h-0"
        } `}
      >
        <Menu />
      </section>
      <div className="max-width w-full flex items-center justify-between">
        <Link href="/" >
        <div className="max-w-[160px] mobile:max-w-[120px] flex-1">
          <Image
            src={LogoDark}
            alt="logo"
            className="w-full h-full object-contain"
            />
        </div>
            </Link>
        <div className="flex items-center justify-center gap-5 flex-1 base:hidden">
          {NavbarLinks.map((link, index) => (
            <p
              key={index}
              className="font-semibold text-lg cursor-pointer hover:text-secondary duration-500"
            >
              <Link href={``}>{`${link.text}`}</Link>
            </p>
          ))}
        </div>
        <div className="flex items-center justify-center gap-5 mobile:gap-2">
          <div className="flex items-center justify-center gap-2">
            <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center base:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                className="w-5 h-5"
                viewBox="0 0 16 16"
              >
                <path
                  // fill-rule="evenodd"
                  d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zm10.761.135a.5.5 0 0 1 .708 0l2.5 2.5a.5.5 0 0 1 0 .708l-2.5 2.5a.5.5 0 0 1-.708-.708L14.293 4H9.5a.5.5 0 0 1 0-1h4.793l-1.647-1.646a.5.5 0 0 1 0-.708z"
                ></path>
              </svg>
            </div>
            <div className="text-left base:hidden">
              <p className="text-[#5f5f5f] text-base font-bold">HOT LINE:</p>
              <p className="font-bold text-lg">+304-779-645</p>
            </div>
          </div>
          <div className="relative flex items-center justify-center flex-col">
            <div
              className="w-12  h-12 base:hidden rounded-full bg-primary flex items-center fill-white text-white justify-center relative"
              onMouseEnter={HandleCartPopup}
              onMouseLeave={HandleCartPopup}
            >
              <div className="w-full h-full flex items-center justify-center rounded-full relative cursor-pointer">
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 0.75H1C0.447715 0.75 0 1.19772 0 1.75V2.25C0 2.80228 0.447715 3.25 1 3.25H3.0119L5.73626 14.7312C6.18267 16.6125 7.84065 17.9508 9.76471 17.9987V18H17.5874C19.5362 18 21.2014 16.5956 21.5301 14.6747L22.7857 7.33734C22.9947 6.11571 22.0537 5 20.8143 5H5.99657L5.21623 1.7114C5.08251 1.14787 4.57918 0.75 4 0.75Z"
                    fill="white"
                  />
                  <path
                    d="M10 21C10 22.1046 9.10457 23 8 23C6.89543 23 6 22.1046 6 21C6 19.8954 6.89543 19 8 19C9.10457 19 10 19.8954 10 21Z"
                    fill="white"
                  />
                  <path
                    d="M21 21C21 22.1046 20.1046 23 19 23C17.8954 23 17 22.1046 17 21C17 19.8954 17.8954 19 19 19C20.1046 19 21 19.8954 21 21Z"
                    fill="white"
                  />
                </svg>
                <div className="absolute bg-[white] text-primary w-5 h-5 text-sm flex items-center justify-center  rounded-full top-0 right-0">
                  <p className="font-semibold">0</p>
                </div>
              </div>
              <div
                className={`bg-red py-6 px-9 shadow-lg right-2 items-center justify-center text-black absolute duration-1000 top-[200%] z-20 bg-white ${
                  cartPopUp ? "scale-[100%]" : "scale-0"
                }`}
              >
                {/* <span> */}
                <p className="font-bold text-3xl min-w-[230px]">Cart</p>
                <p className="text-sm mt-2 font-normal whitespace-nowrap">
                  No products in the cart.
                </p>
                {/* </span> */}
              </div>
            </div>
          </div>
          <div className="inline-flex items-center justify-center gap-2">
            <div className="cursor-pointer w-full h-full hidden base:inline-flex items-start justify-start gap-[1px] rounded-full relative">
              <svg
                className="w-7 h-7 mobile:w-6 mobile:h-6 fill-black"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 0.75H1C0.447715 0.75 0 1.19772 0 1.75V2.25C0 2.80228 0.447715 3.25 1 3.25H3.0119L5.73626 14.7312C6.18267 16.6125 7.84065 17.9508 9.76471 17.9987V18H17.5874C19.5362 18 21.2014 16.5956 21.5301 14.6747L22.7857 7.33734C22.9947 6.11571 22.0537 5 20.8143 5H5.99657L5.21623 1.7114C5.08251 1.14787 4.57918 0.75 4 0.75Z"
                  fill="black"
                />
                <path
                  d="M10 21C10 22.1046 9.10457 23 8 23C6.89543 23 6 22.1046 6 21C6 19.8954 6.89543 19 8 19C9.10457 19 10 19.8954 10 21Z"
                  fill="black"
                />
                <path
                  d="M21 21C21 22.1046 20.1046 23 19 23C17.8954 23 17 22.1046 17 21C17 19.8954 17.8954 19 19 19C20.1046 19 21 19.8954 21 21Z"
                  fill="black"
                />
              </svg>
              <div className=" bg-secondary text-white w-5 h-5 text-sm flex items-center justify-center  rounded-full top-0 right-0">
                <p className="font-semibold text-xs xs:text-base">0</p>
              </div>
            </div>
            <p className="text-xs xs:text-lg font-semibold hidden base:block">
              -$0.00
            </p>
          </div>
          <div className="flex mobile:hidden items-center justify-center ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mobile:w-4 mobile:h-4 bi bi-search"
              fill="black"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
            </svg>
          </div>
          <div className="hidden base:flex cursor-pointer">
            <div
              className="items-end flex justify-center flex-col gap-[2px] cursor-pointer relative transi transition-transform w-8 mobile:w-7 mobile:h-  h-8 p-1 "
              onClick={handleMenuClick}
            >
              {/* <div> */}
              <span
                className={`w-full h-[2px] bg-black duration-500 ${
                  menuOpen &&
                  "rotate-45 w-[80%] medium:w-[65%] absolute transition-transform"
                }`}
              ></span>
              <span
                className={`w-[80%] h-[2px] my-[2px] bg-black duration-500 ${
                  menuOpen && "hidden absolute transition-opacity "
                }`}
              ></span>
              <span
                className={`w-[80%] h-[2px] my-[2px] bg-black duration-500 ${
                  menuOpen && "hidden absolute transition-opacity "
                }`}
              ></span>
              <span
                className={`w-full h-[2px] bg-black duration-500 ${
                  menuOpen &&
                  "-rotate-45 w-[80%] medium:w-[65%] absolute transition-transform"
                }`}
              ></span>
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
