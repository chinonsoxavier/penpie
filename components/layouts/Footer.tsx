import { Logo } from '@/constants/exports';
import Image from 'next/image';
import React from 'react'

const Footer = () => {
  return (
    <div className="bg-[#1a1a1a] wrapper mobile:py-10 py-20 text-[#c8c9cc]">
      <div className="max-width flex items-start justify-evenly gap-10 flex-wrap">
        <div className="flex-1">
          <div className="w-full max-w-[220px] h-full inline-flex items-start justify-start">
            <Image src={Logo} className="w-full h-full" alt="footer logo" />
          </div>
          <p className="font-semibold text-lg mobile:text-base duration-1000 hover:text-white hover:translate-x-1 my-5">
            128 6th Ave,New York, NY 10015 United States, Dcca-1212
          </p>
          <div className="inline-flex items-start justify-center gap-2">
            <div className="flex items-center justify-center border border-[#c8c9cc] hover:bg-secondary duration-100 w-10 h-10 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-facebook fill-white"
                viewBox="0 0 16 16"
              >
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
              </svg>
            </div>
            <div className="flex items-center justify-center border border-[#c8c9cc] hover:bg-secondary duration-100 w-10 h-10 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-twitter-x fill-white"
                viewBox="0 0 16 16"
              >
                <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
              </svg>
            </div>
            <div className="flex items-center justify-center border border-[#c8c9cc] hover:bg-secondary duration-100 w-10 h-10 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-linkedin fill-white"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
              </svg>
            </div>
            <div className="flex items-center justify-center border border-[#c8c9cc] hover:bg-secondary duration-100 w-10 h-10 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-pinterest fill-white"
                viewBox="0 0 16 16"
              >
                <path d="M8 0a8 8 0 0 0-2.915 15.452c-.07-.633-.134-1.606.027-2.297.146-.625.938-3.977.938-3.977s-.239-.479-.239-1.187c0-1.113.645-1.943 1.448-1.943.682 0 1.012.512 1.012 1.127 0 .686-.437 1.712-.663 2.663-.188.796.4 1.446 1.185 1.446 1.422 0 2.515-1.5 2.515-3.664 0-1.915-1.377-3.254-3.342-3.254-2.276 0-3.612 1.707-3.612 3.471 0 .688.265 1.425.595 1.826a.24.24 0 0 1 .056.23c-.061.252-.196.796-.222.907-.035.146-.116.177-.268.107-1-.465-1.624-1.926-1.624-3.1 0-2.523 1.834-4.84 5.286-4.84 2.775 0 4.932 1.977 4.932 4.62 0 2.757-1.739 4.976-4.151 4.976-.811 0-1.573-.421-1.834-.919l-.498 1.902c-.181.695-.669 1.566-.995 2.097A8 8 0 1 0 8 0" />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <p className="text-2xl text-white font-bold mb-8 mobile:text-xl">Hot Menu</p>
          <ul className="gap-3 flex flex-col  items-start">
            <li className="font-semibold inline-flex items-center justify-center">
              {" "}
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-caret-right-fill fill-[#c8c9cc]"
                  viewBox="0 0 16 16"
                >
                  <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                </svg>
              </span>{" "}
              <span className="text-lg mobile:text-base duration-1000 cursor-pointer hover:text-white hover:translate-x-1 whitespace-nowrap">
                BBQ Pizza TinTin
              </span>
            </li>
            <li className="font-semibold inline-flex items-center justify-center">
              {" "}
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-caret-right-fill fill-[#c8c9cc]"
                  viewBox="0 0 16 16"
                >
                  <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                </svg>
              </span>{" "}
              <span className="text-lg mobile:text-base duration-1000 cursor-pointer hover:text-white hover:translate-x-1 whitespace-nowrap">
                Burger Kingo{" "}
              </span>
            </li>
            <li className="font-semibold inline-flex items-center justify-center">
              {" "}
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-caret-right-fill fill-[#c8c9cc]"
                  viewBox="0 0 16 16"
                >
                  <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                </svg>
              </span>{" "}
              <span className="text-lg mobile:text-base duration-1000 cursor-pointer hover:text-white hover:translate-x-1 whitespace-nowrap">
                Chessey Pizza
              </span>
            </li>
            <li className="font-semibold inline-flex items-center justify-center">
              {" "}
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-caret-right-fill fill-[#c8c9cc]"
                  viewBox="0 0 16 16"
                >
                  <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                </svg>
              </span>{" "}
              <span className="text-lg mobile:text-base duration-1000 cursor-pointer hover:text-white hover:translate-x-1 whitespace-nowrap">
                Chocolate Donuts
              </span>
            </li>
            <li className="font-semibold inline-flex items-center justify-center">
              {" "}
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-caret-right-fill fill-[#c8c9cc]"
                  viewBox="0 0 16 16"
                >
                  <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                </svg>
              </span>{" "}
              <span className="text-lg mobile:text-base duration-1000 cursor-pointer hover:text-white hover:translate-x-1 whitespace-nowrap">
                Chicken Sandwich
              </span>
            </li>
          </ul>
        </div>
        <div className="flex-1">
          <p className="text-2xl text-white font-bold mb-8 mobile:text-xl">
            Opening Hours
          </p>
          <ul className="gap-3 flex flex-col  items-start">
            <li className="font-semibold gap-2 inline-flex items-center justify-center">
              <span>Monday</span>
              <span className="text-white whitespace-nowrap">
                :10:00am-05:00pm
              </span>
            </li>
            <li className="font-semibold gap-2 inline-flex items-center justify-center">
              <span>Tuesday</span>
              <span className="text-white whitespace-nowrap">
                :10:20am-05:30pm
              </span>
            </li>
            <li className="font-semibold gap-2 inline-flex items-center justify-center">
              <span>Wednessday</span>
              <span className="text-white whitespace-nowrap">
                :10:30am-05:50pm
              </span>
            </li>
            <li className="font-semibold gap-2 inline-flex items-center justify-center">
              <span>Thursday</span>
              <span className="text-white whitespace-nowrap">
                :11:00am-07:10pm
              </span>
            </li>
            <li className="font-semibold gap-2 inline-flex items-center justify-center">
              <span>Friday</span>
              <span className="text-primary">:Closed</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex mobile:flex-col items-center w-full mobile:gap-4 mt-14 max-width justify-center">
        <hr className="w-full h-[1px] border-none bg-[#2e2e2e]" />
        <p className="text-center whitespace-nowrap mobile:whitespace-normal px-4 tablet:px-0 text-xs md:text-base large:text-lg  mobile:text-base ">
          © 2024 pampie. All Rights Reserved By DreamImp
        </p>
        <hr className="w-full h-[1px] border-none bg-[#2e2e2e]" />
      </div>
    </div>
  );
}

export default Footer