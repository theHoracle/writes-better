'use client'

import { HamburgerMenuIcon, Cross1Icon, Cross2Icon } from "@radix-ui/react-icons"
import { useState } from "react"
import AuthLinks from "./AuthLinks"
import Link from "next/link"

const MobileNav = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="md:hidden">
            {!isOpen ? (
            <HamburgerMenuIcon className="h-5 w-5" onClick={() => setIsOpen(!isOpen)} />
        ) : (
               <Cross2Icon className="h-5 w-5" onClick={() => setIsOpen(!isOpen)}/>
            )}
            {isOpen &&
            <div className="absolute top-16 left-0 bg-background mobile-nav-height w-full flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-between  gap-12 text-xl row-span-1">
            <Link href='#'>Home</Link>
            <Link href='#'>About</Link>
            <Link href='#'>Contact</Link>
            <AuthLinks />
            </div>
            </div>
            } 
        </div>
    )
}
export default MobileNav