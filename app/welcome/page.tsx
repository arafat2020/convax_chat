"use client"
import { useUser } from '@clerk/clerk-react'
import { Loader2 } from 'lucide-react'
import React, { useState } from 'react'
import Logo from '../(main)/_components/Logo'
import { Button } from '@/components/ui/button'
import { initiateUser } from '@/action/initiateuser'
import { useUserLocal } from '@/components/UserContext'
import { Id } from '@/convex/_generated/dataModel'

function Welcome() {
    const {
        isLoaded,
        user
    } = useUser()
    const {
        profileId
    } = useUserLocal()
    const [loading, setLoad] = useState(false)
    function initiate() {
        setLoad(true)
        initiateUser({
            profileId: profileId as Id<"userProfile">,
            profilePic: user?.imageUrl || "",
            userName: user?.username ? user.username : `${user?.firstName} ${user?.lastName}`
        })
    }
    if (isLoaded) return (
        <div className='w-full h-full flex items-center justify-around bg-slate-950/50'>
            <div className='  flex flex-col items-center space-y-3'>
                <div className='w-16 p-3 rounded-md bg-slate-600/40'>
                    <Logo />
                </div>
                <h2 className='text-2xl font-sans font-semibold'>Welcome</h2>
                <span>Get Started as</span>
                <div className='flex items-center space-x-2'>
                    <img src={user?.imageUrl} alt={user?.username || ""} className='w-9 h-9 rounded-full' />
                    <span className='font-sans font-semibold'>{user?.username ? user.username : `${user?.firstName} ${user?.lastName}`}</span>
                </div>
                <Button disabled={loading} onClick={() => initiate()} variant="secondary">
                    {loading ? <span className='flex items-center space-x-2'><Loader2 className='animate-spin' /> <span>Redirecting to home page </span></span> : "Continue"}
                </Button>
            </div>
        </div>
    )

    return (
        <div className='w-full h-full flex items-center justify-around bg-slate-950/50'>
            <Loader2 className='w-14 h-14 animate-spin text-cyan-800' />
        </div>
    )
}

export default Welcome