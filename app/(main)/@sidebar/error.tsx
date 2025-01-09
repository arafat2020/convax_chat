'use client' // Error boundaries must be Client Components

import { useEffect } from 'react'

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error)
    }, [error])

    return (
        <div className='w-1/4 h-full p-3 text-slate-100'>
            <div className="w-full h-full bg-slate-900 rounded-lg flex items-center justify-around">
                <div className='w-full'>
                    <h2 className='text-2xl text-center'>Something went wrong!</h2>
                    <p className='mt-10 p-3'>
                        {`${{ error }}`}
                    </p>
                </div>
            </div>
        </div>
    )
}