"use client";
import { BlogsShape1, BlogsShape2 } from '@/constants/exports';
import { BlogsData } from '@/interface/exports';
import Image from 'next/image';
import React, { useState } from 'react'

const Blogs = () => {

    const [hovered,setHovered]=useState(0);
    const [btnhovered,setBtnHovered]=useState(0);
    
  return (
    <div
      className="wrapper "
      style={{
        background: `url(${BlogsShape1.src})`,
        backgroundPosition: "100% 40%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "200px",
      }}
    >
      <div
        className="wrapper"
        style={{
          background: `url(${BlogsShape2.src})`,
          backgroundPosition: "0 80%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "200px",
        }}
      >
        <div className="max-width center flex-col">
          <p className="text-secondary text-xl font-bold tablet:text-lg">NEW`S AND BLOG</p>
          <p className="text-4xl tablet:text-[28px] font-bold text-center max-w-lg">
            What’s Happening Your Near City & Town
          </p>
          <div className="flex items-center justify-center gap-8 pt-8 flex-wrap">
            {BlogsData.map((blog, i) => (
              <div
                className="rounded-xl flex-1 h-full min-w-[270px]  bg-white flex items-center justify-center flex-col "
                onMouseEnter={() => setHovered(i + 1)}
                onMouseOver={() => setHovered(i + 1)}
                onMouseLeave={() => setHovered(0)}
                onMouseOut={() => setHovered(0)}
                key={i}
              >
                <div className="w-full h-full flex-1 min-h-[320px] rounded-t-xl" style={{background:`url(${blog.Image.src})`,backgroundPosition:"center",backgroundSize:hovered===i+1 ? "120%":"100%",backgroundRepeat:"no-repeat",transitionDuration:"1s"}} >
                  {/* <Imaged
                    src={blog.Image}
                    alt={blog.Title}
                    className="w-full h-full rounded-t-xl"
                  /> */}
                </div>
                <div className="p-7 fle-1  ">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center justify-center gap-2">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-calendar3 fill-primary"
                          viewBox="0 0 16 16"
                        >
                          <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2M1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857z" />
                          <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
                        </svg>
                      </span>
                      <span className="Roboto text-sm mt-1 text-textLight">{blog.Date}</span>
                    </span>
                    <span className="inline-flex items-center justify-center gap-2">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-tag-fill fill-primary"
                          viewBox="0 0 16 16"
                        >
                          <path d="M2 1a1 1 0 0 0-1 1v4.586a1 1 0 0 0 .293.707l7 7a1 1 0 0 0 1.414 0l4.586-4.586a1 1 0 0 0 0-1.414l-7-7A1 1 0 0 0 6.586 1zm4 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
                        </svg>
                      </span>
                      <span className='Roboto text-sm text-textLight' >{blog.Category}</span>
                    </span>
                  </div>
                  <p className="text-xl tablet:text-lg font-bold my-3">{blog.Title}</p>
                  <p className="text-base font-medium text-textLight tablet:text-sm ">{blog.Description}</p>
                  <button
                    className="flex items-center gap-2 mt-3 justify-center border-none"
                    onMouseEnter={() => setBtnHovered(i + 1)}
                    onMouseOver={() => setBtnHovered(i + 1)}
                    onMouseLeave={() => setBtnHovered(0)}
                    onMouseOut={() => setBtnHovered(0)}
                  >
                    <p className={`text-xs font-bold text-textLight duration-300 ${btnhovered === i+1 ? "text-secondary scale-110":"text-black scale-100"}`}>READ MORE</p>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className={`bi bi-arrow-right duration-300 ${btnhovered===i+1 ? "fill-secondary delay-200 translate-x-4" : "fill-black translate-x-0"}`}
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blogs