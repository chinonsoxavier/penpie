"use client";
import { MainCategoriesShape } from '@/constants/exports';
import { MainCategoriesData } from '@/interface/exports';
import Image from 'next/image';
import React, { useState } from 'react'

const MainCategories = () => {

    const [hovered,setHovered]=useState(0);

  return (
    <div
      className="wrapper relative"
      style={{
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundPosition: "300px -300px",
      }}
    >
      <Image
        src={MainCategoriesShape}
        alt="Main Categories Shape"
        className="absolute -top-[200px] -left-10 object-contain"
      />
      <div className="px-3 w-full center gap-6 mobile:gap-3 flex-wrap">
        {MainCategoriesData.map((item, i) => (
          <div
            className="flex-1 p-1 min-w-[270px] h-[340px] relative border flex items-center justify-center mobile:h-[300px]"
            onMouseEnter={() => setHovered(i + 1)}
            onMouseOver={() => setHovered(i + 1)}
            onMouseLeave={() => setHovered(0)}
            onMouseOut={() => setHovered(0)}
          >
            <div
              className="flex-1 absolute w-full h-full duration-300 cursor-pointer bg-red-900"
              style={{
                background: `url(${item.imageBg.src})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: hovered === i + 1 ? "160%" : "150%",
                backgroundPosition: "center",
                transitionDuration:"1s"
              }}
            >
              
            </div>
            <p className="text-white absolute  font-bold text-[40px] tablet:text-[32px]">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainCategories