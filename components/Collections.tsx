"use client";
import { CategoriesMenu, CollectionsData } from "@/interface/exports";
import React, { useEffect,useRef, useState } from "react";
import CollectionsCard from "./CollectionsCard";
import { myStore } from "@/app/zustand/zustand";
import { FrenchFriesShape } from "@/constants/exports";

const Collections = () => {
 
  const [collectionSelected, setCollectionSelected] = useState<
    HTMLDivElement | string
  >("ALL");
  const [filteredCollections, setFilteredCollections] = useState<
    HTMLDivElement | any
  >([]);
  const CollectionsCardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    collectionSelected === "ALL"
      ? setFilteredCollections(CollectionsData)
      : setFilteredCollections(
          CollectionsData.filter(
            (filter: any) => filter.Category === collectionSelected
          )
        );
  }, [collectionSelected]);

  const containerRef = useRef<HTMLDivElement | null>(null);
  var Height = 0;
  const handleClick = (category: any) => {
    setCollectionSelected(category);
  };

  useEffect(() => {
    if (CollectionsCardRefs.current) {
      CollectionsCardRefs.current.forEach((element) => {
        if (element) {
          console.log(element.dataset.filterCategory);
          if (
            element.dataset.filterCategory !== collectionSelected &&
            collectionSelected !== "ALL"
          ) {
            let animation;
            element.animate([{ duration: 20000, fill: "forwards" }]);
            element.style.animationDuration = "1000ms";
            console.log("first");

            animation = element.animate(
              [
                {
                  display: "none",
                },
              ],
              {
                duration: 350,
                delay: 0,
                fill: "forwards",
              }
            );
            animation = element.animate(
              [
                {
                  transform: "scale(0)",
                },
              ],
              {
                duration: 350,
                delay: 0,
                fill: "forwards",
              }
            );
          } else {
            let animation;
            animation = element.animate(
              [
                {
                  display: "flex",
                },
              ],
              {
                duration: 350,
                delay: 0,
                fill: "forwards",
              }
            );
            animation = element.animate(
              [
                {
                  transform: "scale(1)",
                },
              ],
              {
                duration: 300,
                delay: 350,
                fill: "forwards",
              }
            );
            element.style.animationDuration = "1000ms";
          }
        }
      });
    }
  }, [collectionSelected]);

  if (containerRef.current) {
    const cards = containerRef.current.children;
    Height = Math.max(...Array.from(cards).map((card) => card.clientHeight));
  }

  const bodyRef = useRef<HTMLDivElement | null>(null);
  const handlecollectionPopup = myStore(
    (state: any) => state.handlecollectionPopup
  );

  bodyRef.current?.addEventListener("click", () => {
    handlecollectionPopup("");
  });

  return (
    <div
      className="wrapper"
      ref={bodyRef}
      style={{
        background: `url(${FrenchFriesShape.src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "200px",
        backgroundPositionY: "bottom",
        backgroundPositionX: "left",
      }}
    >
      <div className="max-width center flex-col">
        <p className="text-lg base:text-base leading-3 font-medium Roboto text-secondary">
          FRESH FROM PENPIE
        </p>
        <h1 className="mt-[10px] text-3xl large:text-4xl lg:text-[42px] leading-[45px] max-w-xl text-center font-bold">
          We Offer People Best Way To Eat Best Food
        </h1>
        <div className="center gap-7 my-10 tablet:my-5 tablet:gap-4 flex-wrap">
          {CategoriesMenu.map((categoryMenu, index) => (
            <div
              onClick={() => handleClick(categoryMenu.Name)}
              key={index}
              className={`center text-center duration-1000 text-sm cursor-pointer font-semibold rounded-full py-2 px-5 ${
                collectionSelected === categoryMenu.Name
                  ? "bg-primary shadow-2xl text-white"
                  : "border Roboto border-[#EDDFC6]"
              }`}
            >
              <p className="font-semibold tablet:text-sm text-[17px]">{categoryMenu.Name}</p>
            </div>
          ))}
        </div>

        <div
          className="flex items-start justify-start duration-1000 w-full gap-5 flex-wrap"
          ref={containerRef}
        >
          {CollectionsData.map((data, index) => (
            <div
              data-filter-category={data.Category}
              className={`collections_Card flex-1 min-w-[250px] max-w-[560px] ${data.Category}`}
              key={index}
              ref={(e) => (CollectionsCardRefs.current[index] = e)}
            >
              <CollectionsCard
                data={data}
                key={index}
                index={index}
                maxHeight={Height}
                collectionSelected={collectionSelected}
                filter={collectionSelected}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collections;
