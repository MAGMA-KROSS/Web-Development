
import React from 'react'

function Task(props) {

    return (
        <>
            <div className='bg-slate-500 text-slate-50 flex gap-[12px] '>
                <p className='w-[8%] text-center' >Sno</p>
                <p className='w-[45%] text-center'>Task</p>
                <p className='w-[20%] text-center' >Completion Date</p>
                <p className='w-[10%] text-center' >Priority</p>
                <p className='w-[15%] text-center ' >Category</p>
                <p className='w-[15%] text-center ' >Status</p>
            </div>
            
        </>
    )
}

export default Task
