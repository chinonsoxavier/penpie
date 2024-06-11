import ButtonWidget from "@/app/widgets/ButtonWidget";
import { myStore } from "@/app/zustand/zustand";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
const CollectionsCard = ({
  data,
  index,
}: any) => {
  const card = useRef<(HTMLDivElement | null)[]>([]);
  const collectionsPopup = myStore((state: any) => state.collectionsPopup);
  const handlecollectionPopup = myStore(
    (state: any) => state.handlecollectionPopup
  );
  const [Sizes, setSizes] = useState(data.Sizes);
  const [filterSizes, setFilteredSizes] = useState(data.Sizes[1]);
  const handleSelect = (popupSelection: any, e: any) => {
    e.stopPropagation();
    handlecollectionPopup(popupSelection);
  };
  useEffect(() => {
    setSizes(data.Sizes);
  }, []);

  return (
    <div
      ref={(e) => (card.current[index] = e)}
      className={`flex-1 group mobile:min-w-min duration-1000 hover:shadow-2xl hover:bg-interface2 min-w-[250px] max-h-[650px] h-full border border-[#EDDFC6] rounded-lg p-5 py-8 collections_card `}
      key={index}
    >
      <div className="w-full center relative">
        <div
          className={` duration-1000 w-full h-full absolute flex inset-0 items-center justify-center`}
        >
          <ButtonWidget
            className={`text-sm group-hover:scale-[100%] group-hover:opacity-100 duration-1000 scale-50 bg-secondary fill-white text-white transition-colors before:bg-primary font-semibold  opacity-0`}
            icon={
              <svg
                className="w-4 h-4"
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
            text="VIEW OPTIONS"
            accent="secondary"
          />
        </div>
        <Image
          src={data.Image}
          className=""
          alt={`collections Menu Image ${index}`}
        />
      </div>
      <p className="font-bold text-2xl base:text-xl ">{data.Name}</p>
      <p className="font-light text-lg base:text-base my-3">
        {data.Decription}
      </p>
      <div className="center gap-4 ">
        <div className="flex-1 overflow-yclip rounded-full">
          <div className="relative w-full">
            <div
              className={`bg-primary  absolute bottom-1 w-full rounded-3xl p-3 box-border duration-700 overflow-y-clip ${
                collectionsPopup === `popupSelection${index}`
                  ? "scale-[100%]"
                  : "scale-0 opacity-0"
              }`}
            >
              <div className="text-left">
                {Sizes.map((item: any, index: number) => (
                  <div
                    key={index}
                    onClick={(e) => {
                      setFilteredSizes(data.Sizes[index]), e.stopPropagation();
                    }}
                    className={`${
                      filterSizes.size === item.size
                        ? "bg-black text-white"
                        : "bg-white text-black"
                    } flex items-center justify-start my-1  text-left rounded-full my py-1 px-2 cursor-pointer hover:bg-black hover:text-white duration-700`}
                  >
                    <p className="mobile:text-xs">{item.size}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div
            className="flex items-center justify-start pl-4 w-ful py-1 bg-white z-10 relative border border-[#EDDFC6] rounded-full cursor-pointer"
            onClick={(e) => handleSelect(`popupSelection${index}`, e)}
          >
            <p className="font-medium text-[#5f5f5f]">{filterSizes.size}</p>
            <div className="center w-7 rounded-r-full  absolute right-0 h-full bg-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="white"
                className="bi bi-caret-down-fill"
                viewBox="0 0 16 16"
              >
                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
              </svg>
            </div>
          </div>
        </div>
        {/* {GetSize(data.Sizes)} */}
        <p className="text-secondary text-2xl base:text-xl font-semibold">
          ${filterSizes.price}
        </p>
      </div>
    </div>
  );
};

export default CollectionsCard;
