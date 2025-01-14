import React from 'react'
import { IoMenu } from 'react-icons/io5'

function Home() {
  return (
    <div className='flex-grow h-hull py-3'>
        <div className="w-full h-full rounded-md flex flex-col">
            <div className="h-[50px] font-semibold w-full font-sans bg-slate-800 rounded-md flex items-center space-x-3">
                <IoMenu className='ml-3 w-7 h-7'/>
                <h2 className='text-xl  ml-2 border-[2px] border-transparent border-r-slate-700/50 pr-3'>Friends</h2>
                <button className='bg-slate-700/50 p-1 rounded-md'>Active Friend</button>
                <button className='bg-slate-700/50 p-1 rounded-md'>All Friends</button>
                <button className='bg-slate-700/50 p-1 rounded-md'>Send Friend Request</button>
            </div>
            <div className='flex-grow w-full overflow-y-scroll scrollbar-hide'>
            </div>
        </div>
      </div>
  )
}

export default Home