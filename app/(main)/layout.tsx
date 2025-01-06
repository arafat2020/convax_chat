import React from 'react'

function MainLayout({children}:{children:React.ReactNode}) {
  return (
    <div className='w-screen h-screen'>
      {children}
    </div>
  )
}

export default MainLayout