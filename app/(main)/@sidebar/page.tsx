"use client"
import React from 'react'
import Logo from '../_components/Logo'
import { UserButton, useUser } from '@clerk/clerk-react'
import { FaPlus } from "react-icons/fa6";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { useModal } from '@/app/hooks/useModal';


function Sidebar() {
    const {
        user,
        isLoaded
    } = useUser()
    const {
        setComponent
    } = useModal()
    return (
        <div className='w-1/4 h-full p-3'>
            <div className="w-full h-full bg-slate-900 rounded-lg flex">
                <div className='w-[80px]  h-full bg-slate-800 rounded-md flex flex-col space-y-2 '>
                    <div className='min-w-[50px] p-3 '>
                        <Logo />
                    </div>
                    <div className='w-full flex-grow flex flex-col space-y-3 items-center'>
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger>
                                    <FaPlus
                                        role='button'
                                        className='w-10 h-10 p-3 bg-cyan-700 rounded-full'
                                        onClick={()=>setComponent({
                                            component:"test",
                                            title:"test"
                                        })}
                                    />
                                </TooltipTrigger>
                                <TooltipContent>
                                    Create New Server
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </div>

                </div>
                <div className="flex-grow">
                    <div className='w-full flex justify-between items-center space-x-2 p-2'>
                        <UserButton />
                        <p className='flex-grow line-clamp-1 text-slate-100 font-sans font-semibold'>{user?.username ? user.username : `${user?.firstName} ${user?.lastName}`}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar