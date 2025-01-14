"use client"
import { toggleActiveAction } from '@/action/profile'
import { useUserLocal } from '@/components/UserContext'
import { Switch } from '@/components/ui/switch'
import { api } from '@/convex/_generated/api'
import { Id } from '@/convex/_generated/dataModel'
import { cn } from '@/lib/utils'
import { useQuery } from 'convex/react'
import React, { useState } from 'react'

function Profile() {
    const { userId, profileId } = useUserLocal()
    const user = useQuery(api.userProfile.getProfile, {
        clerkId: userId
    })
    const [loading, setLoading] = useState(false)
    async function toggle() {
        setLoading(true)
        await toggleActiveAction({
            userId: profileId as Id<"userProfile">,
            status: user?.status === "active" ? "inactive" : "active"
        })
        setLoading(false)
    }
    return (
        <div className='flex-grow h-hull py-3 font-sans'>
            <div className='w-1/3 h-auto p-3 flex flex-col items-center bg-slate-900/50 rounded-md'>
                <img src={user?.profilePic} alt={user?.userName || ""} className='w-16 h-16 rounded-full' />
                <h2 className='text-2xl font-semibold mt-3'>{user?.userName}</h2>
                <div className='flex space-x-3 mt-3'>
                    <span className={cn("px-2 uppercase font-semibold border rounded-full transition duration-300",
                        user?.status === "active" && "border-green-600"
                    )}> {user?.status} </span> <Switch checked={user?.status === "active"}
                        onCheckedChange={() => toggle()} />
                </div>
            </div>
        </div>
    )
}

export default Profile