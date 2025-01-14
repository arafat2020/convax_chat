import React from 'react'
import Modal from '@/components/Modal'
import { Toaster } from '@/components/ui/toaster'
import { isReady } from '@/action/isReady'

async function childrenLayout({ sidebar, children }: { sidebar: React.ReactNode, children: React.ReactNode }) {
  await isReady()
  return (
      <div suppressHydrationWarning className='w-screen h-screen flex space-x-3 bg-slate-950'>
        {sidebar}
        {children}
        <Toaster/>
        <Modal />
      </div>
  )
}

export default childrenLayout