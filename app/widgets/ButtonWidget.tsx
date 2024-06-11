import React from "react";

const ButtonWidget = ({
  accent,
  border,
  className,
  text,
  icon,
  textColor,
}: any) => {
  return (
    <button
      className={`${className} overflow-hidden before:hover:left-0 before:right-0 before:z-10 z-20 hover:before:w-full before:absolute before:bg-current before:w-0 before:h-full before:rounded-full before:duration-1000 relative  base:py-2 gap-2 cursor-pointer px-10 border-${accent} py-3 rounded-full z-30 bg-${border}  ${
        border && `border-2 border-${accent} `
      }duration-1000 flex items-center justify-center`}
    >
      <div className="center relative z-20 text-inherit fill-secondary">{icon}</div>
      <p className="z-20 text-inherit whitespace-nowrap">{text}</p>
    </button>
  );
};

export default ButtonWidget;
