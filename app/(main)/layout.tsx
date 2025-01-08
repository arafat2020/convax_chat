import React from 'react'

function MainLayout({sidebar, main}:{sidebar:React.ReactNode, main:React.ReactNode}) {
  return (
    <div className='w-screen h-screen flex gap-3 bg-slate-950'>
      {sidebar}
      {main}
    </div>
  )
}

export default MainLayout