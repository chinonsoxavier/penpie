"use client";
import { FreeDeliveryBg, FreeDeliveryImage, Smoke } from "@/constants/exports";
import Image from "next/image";
import React from "react";
import { useInView } from "react-intersection-observer";

const FreeDelivery = () => {
  const { ref, inView, entry } = useInView({
    threshold: 0,
  });

  return (
    <div className="wrapper">
      <div className="max-width ">
        <div className=" flex tablet:gap-2 tablet:flex-col tablet:items-start items-center gap-5 justify-between bg-secondary rounded-tr-[50px] rounded-bl-[50px]">
          <div
            className={`flex-1 overflow-x-clip max-w-[400px] min-w-[410px] mobile:min-w-[100%] relative before:bg-secondary before:opacity-50 before:rounded-bl-[50px] before:tablet:rounded-bl-none before:tablet:rounded-tr-[50px] before:absolute  before:inset-0 before:w-full before:h-full z-0`}
            style={{
              background: `url(${FreeDeliveryBg.src})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "200%",
              backgroundPosition: "165% 10px",
            }}
          >
            <div
              ref={ref}
              className={`w-full h-full center delay-1000 duration-[4000ms] relative z-10 -top-9 ${
                inView ? "translate-x-[10%]" : " translate-x-[-10%]"
              } `}
            >
              <Image
                src={Smoke}
                className="w-full h-full object-contain max-w-[90px] absolute top-20 left-5 duration-1000 freeDelivery_Smoke z-10"
                alt="smoke image"
              />
              <Image
                src={FreeDeliveryImage}
                alt="Free Delivery Image"
                className="w-full h-full object-contain relative z-20  "
              />
            </div>
          </div>
          <div
            className="flex flex-wrap justify-start tablet:flex-col tablet:items-start flex-1 w-full px-5 relative before:bg-secondary  before:opacity-80 before:rounded-tr-[50px]  tablet:before:rounded-bl-[50px] before:absolute  before:inset-0 before:w-full before:h-full z-0"
            style={{
              background: `url(${FreeDeliveryBg.src})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "120%",
              backgroundPosition: "170% 0",
              //   flex: "2 1 0%",
            }}
          >
            <div className="flex-1 py-10 text-left text-white ">
              <p className="text-2xl whitespace-nowrap mf:text-3xl large:text-4xl font-bold relative z-10">
                Get Free Delivery
              </p>
              <p className="mt-4 text-lg base:text-base max-w-sm relative z-10">
                As well known and we are very busy all days beforeso we can
                guarantee your seat.
              </p>
            </div>
            <div className="inline-flex py-10 tablet:py-0 tablet:pb-10 relative z-20">
              <div className="rounded-full  inline-flex items-center justify-center  bg-primary text-white p-3 tablet:gap-0 gap-2 h-min py-3">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="bi bi-telephone-fill w-6 h-6 tablet:h-4 tablet:w-6"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
                    />
                  </svg>
                </span>
                <span className="text-2xl whitespace-nowrap base:text-xl font-semibold">
                  Call:{" "}
                  <span className="text-xl md:text-2xl large:text-3xl font-bold">
                    +123666604
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeDelivery;
