"use client"
import React from 'react'
import Modal from '@/components/Modal'

function childrenLayout({ sidebar, children }: { sidebar: React.ReactNode, children: React.ReactNode }) {
  return (
    <div suppressHydrationWarning className='w-screen h-screen flex gap-3 bg-slate-950'>
        {sidebar}
        {children}
        <Modal/>
    </div>
  )
}

export default childrenLayout