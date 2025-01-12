"use client"
import React from 'react'
import Modal from '@/components/Modal'
import UserContext from '@/components/UserContext'
import { Toaster } from '@/components/ui/toaster'

function childrenLayout({ sidebar, children }: { sidebar: React.ReactNode, children: React.ReactNode }) {
  return (

    <UserContext>
      <div suppressHydrationWarning className='w-screen h-screen flex gap-3 bg-slate-950'>
        {sidebar}
        {children}
        <Toaster/>
        <Modal />
      </div>
    </UserContext>
  )
}

export default childrenLayout