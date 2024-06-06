"use client";
import { MenuLinks } from "@/interface/exports";
import { use, useState } from "react";

const Menu = () => {
  const [hovered, setHovered] = useState(0);
  const [dropdown, setDropdown] = useState(0);

  const handleMouseEvent = (e: number) => {
    setHovered(e);
  };
  const handleClickEvent = (e: number) => {
    setDropdown(e === dropdown ? 0 : e);
  };

  return (
    <div className="center h-min duration-1000 flex-col bg-[#eee] w-full delay-500">
      {MenuLinks.map((link, index) => (
        <div
          className="flx  cursor-pointer hover:bg-[#f3f3f3]  duration-500 items-center justify-between w-full border-b border-b-[#e9e9e9] p-3"
          onClick={() => handleClickEvent(index + 1)}
          onMouseEnter={() => handleMouseEvent(index + 1)}
          onMouseLeave={() => handleMouseEvent(0)}
        >
          <div className="inline-flex duration-500 w-full items-center justify-between">
            <p
              className={`${
                hovered === index + 1 ? "text-secondary" : "text-black"
              } Roboto text-[14px]`}
            >
              {link.text}
            </p>
            <div className="center">
              {dropdown === index + 1 ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className={`bi bi-dash duration-500 ${
                    dropdown === index + 1 ? "fill-secondary" : "fill-current"
                  }`}
                  viewBox="0 0 16 16"
                >
                  <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className={`${
                    hovered === index + 1 ? "fill-secondary" : "fill-current"
                  } bi bi-plus duration-500 w-5 h-5`}
                  viewBox="0 0 16 16"
                >
                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                </svg>
              )}
            </div>
          </div>
          {/* <div
            className={`duration-1000 overflow-clip ${
              dropdown === index + 1 ? "h-max min-h-16" : "h-0"
            }`}
          >
            {link.subMenu.map((sub_menu, index) => (
              <p className="font-semibold" key={index}>
                {sub_menu}
              </p>
            ))}
          </div> */}
        </div>
      ))}
    </div>
  );
};

export default Menu;
