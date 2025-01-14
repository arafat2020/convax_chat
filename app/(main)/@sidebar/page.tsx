"use client"
import React from 'react'
import Logo from '../_components/Logo'
import { UserButton, useUser } from '@clerk/clerk-react'
import { FaPlus } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { useModal } from '@/app/_hooks/useModal';
import CreateServer from '@/components/CreateServer';
import { useQuery } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { useUserLocal } from '@/components/UserContext';
import { Id } from '@/convex/_generated/dataModel';
import Link from 'next/link';
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import { Loader2 } from 'lucide-react';
import { FaUserFriends } from "react-icons/fa";


function Sidebar() {
    const {
        user,
        isLoaded
    } = useUser()
    const {
        setComponent
    } = useModal()
    const { profileId } = useUserLocal()
    const servers = useQuery(api.server.getServerForUser, {
        userId: profileId as Id<"userProfile">
    })


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
                                        onClick={() => setComponent({
                                            component: <CreateServer />,
                                            title: "test"
                                        })}
                                    />
                                </TooltipTrigger>
                                <TooltipContent>
                                    Create New Server
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                        {
                            servers?.map(e => (
                                <TooltipProvider key={e._id}>
                                    <Tooltip>
                                        <TooltipTrigger>
                                            <Link href={`/server/${e._id}`}>
                                                <Avatar>
                                                    <AvatarImage src={e.avatar} alt={e.name} />
                                                    <AvatarFallback>
                                                        <Loader2 className='animate-spin' />
                                                    </AvatarFallback>
                                                </Avatar>
                                            </Link>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            {e.name}
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            ))
                        }
                    </div>

                </div>
                <div className="flex-grow">
                    {
                        isLoaded && user ?
                            <div className='w-full flex justify-between items-center space-x-2 p-2'>
                                <UserButton />
                                <p className='flex-grow line-clamp-1 text-slate-100 font-sans font-semibold'>{user?.username ? user.username : `${user?.firstName} ${user?.lastName}`}</p>
                            </div> : <div className='w-full flex justify-between items-center space-x-2 p-2 animate-pulse'>
                                <div className="h-6 w-6 bg-gray-700 rounded"></div>
                                <div className='flex-grow h-4 bg-gray-700 rounded'></div>
                            </div>
                    }
                    <Link href={"/profile"} className='flex space-x-2 items-center w-full p-1 my-1'>
                        <IoPerson className='w-7 h-7 p-1 rounded-full text-slate-300 bg-slate-800/70'/> <span className='flex-grow text-slate-300 font-sans font-semibold bg-slate-800/50 p-1 rounded-md'>Profile</span>
                    </Link>
                    <Link href={"/"} className='flex space-x-2 items-center w-full p-1 my-1  '>
                        <FaUserFriends className='w-7 h-7 p-1 text-slate-300 rounded-full bg-slate-800/70'/> <span className='flex-grow text-slate-300 font-sans font-semibold bg-slate-800/50 p-1 rounded-md'>Friends</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Sidebar