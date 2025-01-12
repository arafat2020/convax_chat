"use client"
import Logo from "@/app/(main)/_components/LogoTwo";
import { api } from "@/convex/_generated/api";
import { useUser } from "@clerk/clerk-react";
import { useQuery } from "convex/react";
import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the context value type
interface AppContextType {
    userId: string;
    profileId: string
}

// Create the context with a default value
const AppContext = createContext<AppContextType | undefined>(undefined);

interface AppProviderProps {
    children: ReactNode;
}
function Loader() {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-900">
            <div className="text-center">
                <div className="flex justify-center">
                    <div className="w-16 h-16 border-4 border-t-transparent border-blue-500 rounded-full animate-spin"></div>
                </div>
                <h1 className="mt-6 text-lg font-semibold text-gray-300">
                    Getting things ready...
                </h1>
            </div>
        </div>
    )
}
const UserContext: React.FC<AppProviderProps> = ({ children }) => {
    const {
        isLoaded,
        user
    } = useUser()
    const data = useQuery(api.userProfile.getProfile, { clerkId: user?.id ? user.id : "" })
    return (
        <AppContext.Provider value={{
            userId: user?.id ? user.id : "",
            profileId: data?._id ? data._id : ""
        }}>
            {isLoaded && data ? children : <Loader />}
        </AppContext.Provider>
    )
}

export default UserContext

export const useUserLocal = () => {
    const context = useContext(AppContext);

    if (!context) {
        throw new Error("useAppContext must be used within an AppProvider");
    }

    return {
        userId: context.userId,
        profileId: context.profileId
    };
};
