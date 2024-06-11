"use client";
import { ClientsReviewsImage, ClientsSlide1, ClientsSlide2 } from "@/constants/exports";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const ClientsReviews = () => {
  const [pagination, setPagination] = useState(0);
  const sliderRef = useRef<HTMLDivElement | null>(null);
  // const []

  const handlePaginationClick = (newPag: number, currentPag: number) => {
    setPagination(newPag);
    if (currentPag-newPag===1 || currentPag - newPag === -1 ) {
      if (sliderRef.current) {
        let animation:any;
           animation = sliderRef.current.animate(
             [
               {
                 transform: `translate3d(-${
                   newPag * 100
                 }%,0,0)`,
               },
             ],
             {
               duration: 1000,
               delay: 0,
               fill: "forwards",
             }
           );
        // sliderRef.current.style.transitionDuration = "1s";
        //             sliderRef.current.style.transition = "ease-in-out";

        // sliderRef.current.style.transform = `translateX(-${currentPag * 100}%)`;
      }
    } else {
      // alert("worked")
      //  setPagination(newPag);
      if (sliderRef.current) {
                let animation: any;
                animation = sliderRef.current.animate(
                  [
                    {
                      transform: `translate3d(-${(newPag === 0 ? newPag + 1 : newPag-1) * 100}%,0,0)`,
                    },
                  ],
                  {
                    duration: 0,
                    delay: 0,
                    fill: "forwards",
                  }
                );
        setTimeout(() => {
          if (sliderRef.current) {
                        let animation: any;
                        animation = sliderRef.current.animate(
                          [
                            {
                              transform: `translate3d(-${newPag * 100}%,0,0)`,
                            },
                          ],
                          {
                            duration: 1000,
                            delay: 0,
                            fill: "forwards",
                          }
                        );
          }
        }, 1);
      }
    }
    //  setPagination(newPag)
  };

  return (
    <div className="wrapper">
      <div className="max-width flex items-center justify-between gap-8 flex-wrap ">
        <div className="flex-1 max-w-[580px] center min-w-[320px] mobile:min-w-[100%] relative">
          <div className="absolute max-w-[32%] w-full  t-0 z-0 translate-x-[110%] translate-y-[50%]">
            <Image
              alt="Clients Slide 01"
              src={ClientsSlide2}
              className="w-full h-full object-contain"
            />
          </div>
          <Image
            src={ClientsReviewsImage}
            alt="Clients reviews Image"
            className="w-full h-full relative opcity-0 z-10"
          />
          <div className="absolute max-w-[40%] w-full -translate-x-[100%] translate-y-[100%]">
            <Image
              alt="Clients Slide 02"
              src={ClientsSlide1}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <div className="flex-1 max-w-[450px] ">
          <div className="text-left relative">
            <p className="text-secondary text-lg base:text-base font-medium">
              TESTIMONIALS
            </p>
            <p className="text-2xl md:text-3xl large:text-4xl  font-bold mt-2">
              What Our Client Says
            </p>
            <div className="overflow-clip">
              <div
                className={`trans overflow-x-clip snap-x flex h-min items-center justify-start duraion-1000`}
              >
                <div
                  className="w-full flex items-center justify-start duraton-1000"
                  ref={sliderRef}
                >
                  <div className="text-left cursor-grab se select-none flex-1 min-w-[100%] pl-0">
                    <p className="my-6">
                      <i className="mobile:text-base text-xl">
                        “ Make a type specimen book. It has survived not only
                        five centuries, but also the leap into electronic
                        typesetting, remaining esmake a type specimen
                      </i>
                    </p>
                    <p className="text-xl base:text-lg font-semibold mb-1">
                      Jenifar Willy{" "}
                    </p>
                    <p>
                      <i className="mobile:text-base text-xl">CEO, PsdBoss </i>
                    </p>
                  </div>
                  <div className="text-left cursor-grab se select-none flex-1 min-w-[100%] pl-0">
                    <p className="my-6">
                      <i className="mobile:text-base text-xl">
                        “ Make a type specimen book. It has survived not only
                        five centuries, but also the leap into electronic
                        typesetting, remaining esmake a type specimen
                      </i>
                    </p>
                    <p className="text-2xl base:text-xl font-semibold mb-1">
                      Jenifar Willy{" "}
                    </p>
                    <p>
                      <i className="mobile:text-base text-xl">CEO, PsdBoss </i>
                    </p>
                  </div>
                  <div className="text-left cursor-grab se select-none flex-1 min-w-[100%] pl-0">
                    <p className="my-6">
                      <i className="mobile:text-base text-xl">
                        “ Make a type specimen book. It has survived not only
                        five centuries, but also the leap into electronic
                        typesetting, remaining esmake a type specimen
                      </i>
                    </p>
                    <p className="text-xl base:text-lg font-semibold mb-1">
                      Jenifar Willy{" "}
                    </p>
                    <p>
                      <i className="mobile:text-base text-xl">CEO, PsdBoss </i>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-start gap-2 mt-5 z-20 relative">
              <div
                onClick={() => handlePaginationClick(0, pagination)}
                className={`duration-500 hover:bg-secondary rounded-full cursor-pointer ${
                  pagination === 0
                    ? "h-1 w-5 bg-secondary"
                    : "h-3 w-3 bg-[#c2c2c2] "
                }`}
              ></div>
              <div
                onClick={() => handlePaginationClick(1, pagination)}
                className={`duration-500 hover:bg-secondary rounded-full cursor-pointer ${
                  pagination === 1
                    ? "h-1 w-5 bg-secondary"
                    : "h-3 w-3 bg-[#c2c2c2] "
                }`}
              ></div>
              <div
                onClick={() => handlePaginationClick(2, pagination)}
                className={`duration-500 hover:bg-secondary rounded-full cursor-pointer ${
                  pagination === 2
                    ? "h-1 w-5 bg-secondary"
                    : "h-3 w-3 bg-[#c2c2c2] "
                }`}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientsReviews;
