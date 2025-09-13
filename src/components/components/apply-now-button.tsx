"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { LoanApplicationModal } from "./loan_application"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

interface ApplyNowButtonProps {
    variant?: "default" | "outline" | "secondary" | "ghost" | "link" | "destructive"
    size?: "default" | "sm" | "lg" | "icon"
    className?: string
}

export function ApplyNowButton(ApplyNowButtonProps: ApplyNowButtonProps) {
    return (
        <>
            <Dialog>
                <form>
                    <DialogTrigger asChild>
                        <Button variant={ApplyNowButtonProps.variant} size={ApplyNowButtonProps.size} className={ApplyNowButtonProps.className}>
                            Apply Now
                        </Button>
                    </DialogTrigger>
                    <LoanApplicationModal />
                </form>
            </Dialog>
        </>
    )
}

