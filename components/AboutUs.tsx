import ButtonWidget from '@/app/widgets/ButtonWidget';
import { AboutUsImage, AboutUsShape } from '@/constants/exports'
import Image from 'next/image'
import React from 'react'

const AboutUs = () => {
  return (
    <div
      className="wrapper"
     
    >
      <div className="center max-width flex-wrap gap-5">
        <div className="flex-1 center max-lg max-w-lg  min-w-[320px] mobile:min-w-[100%]">
          <Image
            src={AboutUsImage}
            alt="about us"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="flex-1 text-left max-w-lg">
          <p className="text-3xl md:text-4xl font-semibold large:text-5xl">
            Panpie, Burgers, And Best Pizzas in Town
          </p>
          <p className="text-xl md:text-2xl text-primary font-semibold my-5">
            We put 100% of love and dedication into our dishes
          </p>
          <p className='md:text-sm' >
            Piorem ipsum dolor sit amet consectetur adipiscing eliturabitur
            venenatis, nisl in bib endum commodo, sapien justo cursus are urna,
            quis porta mauris elit finibus nulla.
          </p>
          <ButtonWidget
            text="KNOW MORE"
            accent="secondary"
            className="flex-row-reverse text-base before:bg-primary bg-secondary Roboto text-white fill-white font-semibold mt-5"
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
      </div>
    </div>
  );
}

export default AboutUs