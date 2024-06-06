import ButtonWidget from '@/app/widgets/ButtonWidget';
import { DiscountAdvertShape, DiscountImage } from '@/constants/exports';
import Image from 'next/image';
import React from 'react'

const Discount = () => {
  return (
    <div className="wrapper">
      <div className="max-width flex items-center justify-between mobile:justify-center flex-wrap base:gap-8 ">
        <div className="flex-1 max-w-lg">
          <p className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white my-5">
            We Have <span className="text-primary">Excellent</span> Of{" "}
            <span className="text-primary flex-row-reverse">Quality</span> Pizza
          </p>
          <ButtonWidget
            text="SEE ALL MENU"
            accent="secondary"
            className="flex-row-reverse text-base font-semibold bg-secondary before:bg-primary text-white fill-white"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-arrow-right"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                />
              </svg>
            }
          />
        </div>
        <div className="flex-1 px- relative min-w-[340px] mobile:min-w-full">
          <div className="flex items-center justify-center text-center b-[red]  max-w-[200px] mobile:max-w-[150px] -lef16 absolute top-0">
            <p className='right-8 -mt-2 left-0 absolute text-5xl mobile:text-3xl font-bold' >
              <span className="text-secondary">40%</span>
              <br />
              Off
            </p>
            <Image
              src={DiscountAdvertShape}
              className="w-full h-full object-contain "
              alt="Discount Advert Shape"
            />
          </div>
          <div className="flex items-center justify-end pt-20 bg-red]">
            <Image
              src={DiscountImage}
              className="w-full h-full object-contain max-w-[520px]"
              alt="Discount Image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Discount