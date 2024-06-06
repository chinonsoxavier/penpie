import ButtonWidget from '@/app/widgets/ButtonWidget';
import { BurgerKingChicken, BurgerKingChickenShape1, BurgerKingChickenShape2 } from '@/constants/exports';
import Image from 'next/image';
import React from 'react'

const BurgerAdvert = () => {
  return (
    <div className="wrapper ">
      <div className="center max-width flex-wrap">
        <div className="absolute -left-20 top-0">
          <Image src={BurgerKingChickenShape1} alt="Hero slide03" className="top-0 " />
        </div>
        <div className="absolute -right-20  bottom-0 z-0">
          <Image src={BurgerKingChickenShape2} alt="Hero slide03" className="-0 " />
        </div>
        <div className="flex-1 text-left maxw-lg max-w-md">
          <p className="text-3xl sm:text-4xl md:text-5xl large:text-5xl lg:text-6xl font-bold">Chicken King Burger</p>
          <p className="my-5">
            Piorem ipsum dolor sit amet consectetur adipiscing eliturabitur
            venenatis, nisl in bib endum commodo, sapien justo
          </p>
          <ButtonWidget
            className="font-bold flex-row-reverse Roboto text-base bg-primary before:bg-secondary fill-white text-white hover:fill-black hover:text-black delay-300 transition-colors"
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
            text="ORDER NOW"
            accent="primary"
          />
        </div>
        <div className="flex-1 min-w-[410px] mobile:min-w-[100%]">
          <div className="center">
            <Image
              src={BurgerKingChicken}
              alt="Chicken King Burger "
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BurgerAdvert