import React from 'react'


function Navbar(props) {
    return (
        <div className='w-[100%] h-[65px]  flex items-center justify-between cursor-pointer bg-[#6366f1]'>
            <div onClick={props.HideSidebar} className="flex items-center">
                <svg style={{ display: props.SVGShow2 }} className='invert w-6 h-6' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
                <svg style={{ display: props.SVGShow }} xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-8 invert">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                <p className='font-poppins text-white text-[24px] font-semibold'>TodoList</p>
            </div>
            <div>
                <div onClick={props.DarkMode} style={{ backgroundColor: props.btnColorDark }} className=' mr-[12px] duration-0 justify-around w-[64px] h-[32px] flex items-center rounded-full'>
                    <div style={{ left: props.toggleRight }} className="flex items-end duration-500 relative z-[1]">
                        <svg style={{ opacity: props.opacity1 }} className='h-[32px] p-[6px] duration-500 relative z-20 ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
                            <circle cx="32" cy="32" r="14" fill="yellow" />
                            <line x1="32" y1="2" x2="32" y2="14" stroke="yellow" stroke-width="4" />
                            <line x1="32" y1="62" x2="32" y2="50" stroke="yellow" stroke-width="4" />
                            <line x1="2" y1="32" x2="14" y2="32" stroke="yellow" stroke-width="4" />
                            <line x1="62" y1="32" x2="50" y2="32" stroke="yellow" stroke-width="4" />
                            <line x1="8" y1="8" x2="16" y2="16" stroke="yellow" stroke-width="4" />
                            <line x1="56" y1="8" x2="48" y2="16" stroke="yellow" stroke-width="4" />
                            <line x1="8" y1="56" x2="16" y2="48" stroke="yellow" stroke-width="4" />
                            <line x1="56" y1="56" x2="48" y2="48" stroke="yellow" stroke-width="4" />
                        </svg>
                        <svg style={{ opacity: props.opacity2 }} className='h-[32px] relative duration-500 z-10 right-[28px] ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
                            <path d="M42,32a18,18,0,1,1-18-18,18,18,0,0,0,18,18Z" fill="lightgray" />
                        </svg>
                        <div style={{ right: props.toggleLeft }} className="bg-[#6366f1]  m-[6px] h-[20px] duration-500 w-[20px] relative z-[3] rounded-full"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
