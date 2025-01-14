"use client"
import React from 'react'
import Logo from './(main)/_components/Logo'

function Error({
    error,
    reset,
  }: {
    error: Error & { digest?: string }
    reset: () => void
  }) {
    return (
        <div className='flex-grow w-full p-3'>
            <div className="w-full h-full font-sans text-center flex justify-around items-center bg-slate-900  rounded-md">
                <div className='flex flex-col space-y-3'>
                    <div className='w-[100px] mx-auto'>
                        <Logo />
                    </div>
                    <h1 className='text-xl font-sans font-bold'>Something went wrong.</h1>
                    <code className='text-red-500 bg-slate-800/40 p-3 rounded-md'>{`${error}`}</code>
                </div>
            </div>
        </div>
    )
}

export default Error