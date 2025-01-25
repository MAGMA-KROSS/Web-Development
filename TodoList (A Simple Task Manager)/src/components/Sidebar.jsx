import React, { useState, useEffect } from 'react';

function Sidebar(props) {
  const [sunColor, setsunColor] = useState("black")
  useEffect(() => {
    if (props.SidebarColorDark === "#2e3647") {
      setsunColor("yellow")
    } else {
      setsunColor("black")
    }
  }, [props.SidebarColorDark]);
  return (
    <div
      className="relative h-[100vh] font-poppins"
      style={{
        width: props.width,
        left: props.width === "0px" ? "-100%" : "0%",
        backgroundColor: props.SidebarColorDark,
        transition: `left 200ms ease, background-color 0ms ease`,
        boxShadow: props.SidebarColorDark === "#2e3647" ? "rgba(0, 27, 57, 0.68) 2px 68px 10px" : "rgba(194, 206, 219, 0.68) 2px 68px 10px",
        zIndex: 10,
      }}
    >
      <div
        style={{
          left: props.width === "0px" ? "-100%" : "0%",
          transition: "left 200ms ease",
          color: props.SidebarColorDark === "#2e3647" ? "white" : "#4a5568",

        }}
        className="absolute cursor-pointer  text-[#4a5568] bottom-0 w-[213px]"

      >
        <div onClick={props.allTask} className=" flex border-y border-cusBorder hover:bg-[#9596e0] items-center  h-[32px]">
          <svg
            className='h-[15px] ml-[18px]'
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="100" cy="100" r="80" fill="#2196F3" stroke="black" stroke-width="2" />
            <path
              d="M 80 50 Q 70 80 100 90 Q 120 100 140 80 Q 160 60 150 40 Q 130 20 100 30 Q 90 40 80 50 Z"
              fill="#4CAF50"
            />
            <path
              d="M 50 110 Q 60 130 90 120 Q 110 110 130 130 Q 150 150 140 170 Q 120 180 100 170 Q 80 160 60 140 Q 40 120 50 110 Z"
              fill="#4CAF50"
            />
          </svg>


          <p className="ml-[6px]">All Task</p>
        </div>
        <div onClick={props.WorkTask} className=" flex border-y border-cusBorder hover:bg-[#9596e0] items-center  h-[32px]">
          <svg
            className='h-[15px] ml-[18px]'
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <rect x="5" y="4" width="14" height="16" fill="#90A4AE" />
            <rect x="7" y="6" width="3" height="3" fill="white" />
            <rect x="14" y="6" width="3" height="3" fill="white" />
            <rect x="7" y="10" width="3" height="3" fill="white" />
            <rect x="14" y="10" width="3" height="3" fill="white" />
            <rect x="7" y="14" width="3" height="3" fill="white" />
            <rect x="14" y="14" width="3" height="3" fill="white" />
            <rect x="10" y="14" width="4" height="6" fill="#FBC02D" />
          </svg>

          <p className="ml-[6px]">Work</p>
        </div>
        <div onClick={props.CollegeTask} className="flex border-y border-cusBorder hover:bg-[#9596e0] items-center h-[32px]">
          <svg
            className='ml-[18px]'
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <rect x="3" y="10" width="18" height="11" fill="#90CAF9" />
            <polygon points="12,3 2,10 22,10" fill="#42A5F5" />
            <rect x="10" y="14" width="4" height="7" fill="#FBC02D" />
            <rect x="5" y="12" width="3" height="3" fill="white" />
            <rect x="16" y="12" width="3" height="3" fill="white" />
            <line x1="12" y1="3" x2="12" y2="8" stroke="black" stroke-width="2" />
            <polygon points="12,3 16,5 12,7" fill="#E53935" />
          </svg>

          <p className="ml-[6px]">College</p>
        </div>
        <div onClick={props.hometask} className="flex border-y border-cusBorder hover:bg-[#9596e0] items-center h-[32px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className='h-[15px] ml-[18px]'
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <polygon points="12,3 3,10 21,10" fill="#FF7043" />
            <rect x="6" y="10" width="12" height="10" fill="#FFCC80" />
            <rect x="8" y="12" width="3" height="3" fill="white" />
            <rect x="13" y="12" width="3" height="3" fill="white" />
            <rect x="10.5" y="14" width="3" height="6" fill="#FBC02D" />
          </svg>

          <p className="ml-[6px]">Home</p>
        </div>
        <div onClick={props.MyDayTask} className="flex border-y border-cusBorder hover:bg-[#9596e0] items-center h-[32px]">

          <svg style={{ opacity: props.opacity1 }} className='h-[15px] ml-[18px]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
            <circle cx="32" cy="32" r="14" fill={`${sunColor}`} />
            <line x1="32" y1="2" x2="32" y2="14" stroke={`${sunColor}`} stroke-width="4" />
            <line x1="32" y1="62" x2="32" y2="50" stroke={`${sunColor}`} stroke-width="4" />
            <line x1="2" y1="32" x2="14" y2="32" stroke={`${sunColor}`} stroke-width="4" />
            <line x1="62" y1="32" x2="50" y2="32" stroke={`${sunColor}`} stroke-width="4" />
            <line x1="8" y1="8" x2="16" y2="16" stroke={`${sunColor}`} stroke-width="4" />
            <line x1="56" y1="8" x2="48" y2="16" stroke={`${sunColor}`} stroke-width="4" />
            <line x1="8" y1="56" x2="16" y2="48" stroke={`${sunColor}`} stroke-width="4" />
            <line x1="56" y1="56" x2="48" y2="48" stroke={`${sunColor}`} stroke-width="4" />
          </svg>
          <p className="ml-[6px]">My Day</p>
        </div>
      </div>
    </div >
  );
}

export default Sidebar;
