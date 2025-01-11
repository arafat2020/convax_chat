"use client"
import React from 'react'
import { create } from 'zustand'
interface UseModelHook {
    component: React.ReactNode,
    title: React.ReactNode,
    setComponent: ({ }: {
        component: React.ReactNode,
        title: React.ReactNode
    }) => void,
    reset: () => void,
    open: boolean
}
export const useModal = create<UseModelHook>((set, get) => ({
    component: null,
    title:null,
    open: false,
    setComponent: ({
        component,
        title
    }) => set({
        component,
        open: true,
        title
    }),
    reset: () => set({
        component: null,
        open: false
    })
}))