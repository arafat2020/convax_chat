"use client"
import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogClose,
    DialogFooter
} from "@/components/ui/dialog"
import { Button } from './ui/button'
import { useModal } from '@/app/_hooks/useModal'


function Modal() {
    const {
        component,
        title,
        open,
        reset
    } = useModal()
    return (
        <Dialog open={open}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogDescription>
                        {component}
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter className="sm:justify-start">
                    <DialogClose asChild>
                        <Button type="button" variant="secondary" onClick={() => reset()}>
                            Close
                        </Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>

    )
}

export default Modal