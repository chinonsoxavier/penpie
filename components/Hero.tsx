"use client";
import ButtonWidget from "@/app/widgets/ButtonWidget";
import {
  HeroImage,
  HeroSlide01,
  HeroSlide02,
  HeroSlide03,
  HeroSlide04,
} from "@/constants/exports";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const Hero = () => {
  const elementRef = useRef<HTMLDivElement | null>(null);
  const [cursorX, setCursorX] = useState(0);
  const [distance, setDistance] = useState(0);
  const SlideOneRef=useRef<HTMLDivElement | null>(null);
  const SlideTwoRef=useRef<HTMLDivElement | null>(null);
  const [elementDistance, setElementDistance] = useState(0);
  useEffect(() => {
    const handleMouseMove = (event: any) => {
      setCursorX(event.clientX);
      
      if (elementRef.current) {
        const elementRect = elementRef.current.getBoundingClientRect();
        const elementCenterX = elementRect.left + elementRect.width / 2;

        setDistance(Math.round((event.clientX / elementRect.right)*100)); 
        // alert("works")// Calculate absolute distance
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [elementRef]); // Dependency array ensures recalculation on elementRef change


  useEffect(() => {
   let animation: any=null;
   let animation2: any=null;
   let animation3: any=null; 
   let animation4: any=null;
    const handleMouseMove = (e:any)=>{

      if(e.clientX > cursorX){
        if (SlideOneRef.current && SlideTwoRef.current){
         
          animation = SlideOneRef.current.animate(
            [
              {
                transform: `translate3d(-20%,0,0)`,
              },
            ],
            {
              duration: 10000,
              delay: 0,
              fill: "forwards",
            }
          );
          animation2 = SlideTwoRef.current.animate([
            {
              transform:`translate3d(20%,0,0)`
            }
          ],
        {
          duration:10000,
          delay:0,
          fill:"forwards"
        });

        }
      }else{
        if (SlideOneRef.current && SlideTwoRef.current){
                
                  animation3 = SlideOneRef.current.animate(
                    [
                      {
                        transform: `translate3d(0%,0,0)`,
                      },
                    ],
                    {
                      duration: 5000,
                      delay: 0,
                      fill: "forwards",
                    }
                  );
                  animation4 = SlideTwoRef.current.animate(
                    [
                      {
                        transform: `translate3d(0%,0,0)`,
                      },
                    ],
                    {
                      duration: 5000,
                      delay: 0,
                      fill: "forwards",
                    }
                  );
               }
      };
    };
 window.addEventListener("mousemove", handleMouseMove);

 return () => window.removeEventListener("mousemove", handleMouseMove);  }, [cursorX])
  

  const SliderRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="wrapper overflow-x-clip h-full">
      <div className="max-width flex h-max items-center relative justify-start z-10 flex-wrap">
        <div className="absolute left-[-250px] top-0">
          <Image src={HeroSlide03} alt="Hero slide03" className="top-0 " />
        </div>
        <div className="absolute  left-[-350px] bottom-0 z-0">
          <Image src={HeroSlide04} alt="Hero slide03" className="-0 " />
        </div>
        <div className="h-full py-14 text-left 4 flex-1 max-w-lg min-w-[250px]">
          <div
            ref={SliderRef}
            className="h-10 pl-4 pr-12 base:h-7 base:before:w-7 base:before:h-7  bg-secondary w-min before:rotate-45 relative before:absolute before:bg-none before:right-[-20px] before:w-10 before:h-10 before:bottom-0 before:top-0 before:bg-[#f4ecdf]  text-center flex items-center justify-center"
            id="Hero_Text"
          >
            <p className="text-sm large:text-lg font-normal font whitespace-nowrap Roboto text-white">
              Free Home Delivery In 24 Minutes
            </p>
          </div>
          <h1 className="text-4xl large:text-5xl lg:text-7xl font-extrabold my-7">
            ENJOY YOUR PIZZA IN TOWN!
          </h1>
          <div className=" -ml-20 tablet:block hidden  relative flex-1 tablet:min-w-[100%] min-w-[600px]">
            <div className=" center h-full w-full">
              <div className="h-full w-full flex items-center relative z-20 justify-center">
                <Image
                  src={HeroImage}
                  className="w-full h-full object-cntain"
                  alt="Hero Image"
                />
              </div>
            </div>
          </div>

          <div className="text-left">
            <div className="text-center flex items-center justify-start gap-2">
              <svg
                className="flex-shrink-0 base:h-4 base:w-4"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_82_4624)">
                  <circle cx="12" cy="12" r="12" fill="#f43127"></circle>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5.50114 12.7402C5.8868 12.3595 6.27246 11.9788 6.64135 11.6147C7.74803 12.7071 8.83793 13.783 9.94461 14.8754C12.4262 12.4257 14.9079 9.97607 17.3727 7.54297C17.7584 7.92366 18.1441 8.30435 18.5129 8.66849C15.6457 11.4988 12.7951 14.3126 9.92784 17.143C8.45227 15.6864 6.95994 14.2133 5.48438 12.7568L5.50114 12.7402Z"
                    fill="white"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_82_4624">
                    <rect width="24" height="24" rx="12" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>
              <p className="font-medium base:text-lg text-sm text-left whitespace-nowrap">
                Down aorem ipsum dolor
              </p>
            </div>
            <div className="text-center flex items-center justify-start gap-2 my-3">
              <svg
                className="flex-shrink-0 base:h-4 base:w-4"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_82_4624)">
                  <circle cx="12" cy="12" r="12" fill="#f43127"></circle>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5.50114 12.7402C5.8868 12.3595 6.27246 11.9788 6.64135 11.6147C7.74803 12.7071 8.83793 13.783 9.94461 14.8754C12.4262 12.4257 14.9079 9.97607 17.3727 7.54297C17.7584 7.92366 18.1441 8.30435 18.5129 8.66849C15.6457 11.4988 12.7951 14.3126 9.92784 17.143C8.45227 15.6864 6.95994 14.2133 5.48438 12.7568L5.50114 12.7402Z"
                    fill="white"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_82_4624">
                    <rect width="24" height="24" rx="12" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>
              <p className="font-medium  base:text-lg text-sm text-left whitespace-nowrap">
                Sit amet consectetur adipiscing
              </p>
            </div>
            <div className="text-center flex items-center justify-start gap-2">
              <svg
                className="flex-shrink-0 base:h-4 base:w-4"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_82_4624)">
                  <circle cx="12" cy="12" r="12" fill="#f43127"></circle>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5.50114 12.7402C5.8868 12.3595 6.27246 11.9788 6.64135 11.6147C7.74803 12.7071 8.83793 13.783 9.94461 14.8754C12.4262 12.4257 14.9079 9.97607 17.3727 7.54297C17.7584 7.92366 18.1441 8.30435 18.5129 8.66849C15.6457 11.4988 12.7951 14.3126 9.92784 17.143C8.45227 15.6864 6.95994 14.2133 5.48438 12.7568L5.50114 12.7402Z"
                    fill="white"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_82_4624">
                    <rect width="24" height="24" rx="12" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>
              <p className="font-medium  base:text-lg text-sm text-left whitespace-nowrap">
                Eliteytellus luctus nec
              </p>
            </div>
            <ButtonWidget
              accent="primary"
              icon={
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 0.75H1C0.447715 0.75 0 1.19772 0 1.75V2.25C0 2.80228 0.447715 3.25 1 3.25H3.0119L5.73626 14.7312C6.18267 16.6125 7.84065 17.9508 9.76471 17.9987V18H17.5874C19.5362 18 21.2014 16.5956 21.5301 14.6747L22.7857 7.33734C22.9947 6.11571 22.0537 5 20.8143 5H5.99657L5.21623 1.7114C5.08251 1.14787 4.57918 0.75 4 0.75Z"
                    fill="currentColor"
                  />
                  <path
                    d="M10 21C10 22.1046 9.10457 23 8 23C6.89543 23 6 22.1046 6 21C6 19.8954 6.89543 19 8 19C9.10457 19 10 19.8954 10 21Z"
                    fill="currentColor"
                  />
                  <path
                    d="M21 21C21 22.1046 20.1046 23 19 23C17.8954 23 17 22.1046 17 21C17 19.8954 17.8954 19 19 19C20.1046 19 21 19.8954 21 21Z"
                    fill="currentColor"
                  />
                </svg>
              }
              className="mt-7 bg-primary before:bg-white transition-colors delay-200 text-white hover:text-black hover:fill-black fill-white"
              text="ORDER NOW"
            />
          </div>
        </div>
        <div
          className=" -ml-20 tablet:hidden  relative flex-1 tablet:min-w-[100%] min-w-[500px]"
          ref={elementRef}
        >
          <div className=" center h-full relative w-full">
            <div
              ref={SlideOneRef}
              className={`absolute max-w-[300px] w-full z-20 left-[80%] left top-0`}
              // style={{
              //   left: `${distance > 0 && 570 - distance}px`,
              //   position: "absolute",
              //   transitionDuration: "1s",
              // }}
            >
              <Image
                src={HeroSlide01}
                className="w-full h-full object-contain"
                alt="Hero_Slide01"
              />
            </div>
            <div className="h-full w-full flex items-center relative z-20 justify-center">
              <Image
                src={HeroImage}
                className="w-full h-full object-cntain"
                alt="Hero Image"
              />
            </div>
            <div
              ref={SlideTwoRef}
              className="max-w-[300px] absolute z-10 left-[15%] bottom-0 duration-1000"
              // style={{
              //   left: `${distance > 0 && 20 + (distance - 10)}px `,
              //   position: "absolute",
              //   transitionDuration: "1s",
              // }}
            >
              <Image
                src={HeroSlide02}
                className="w-full h-full object-contain"
                alt="Hero_Slide01"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
