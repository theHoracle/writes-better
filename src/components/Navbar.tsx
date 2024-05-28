import Image from "next/image"
import Link from "next/link"
import { ModeToggle } from "./ThemeToggle"
import AuthLinks from "./AuthLinks"
import MobileNav from "./MobileNav"

const Navbar = () => {
    return <nav className="flex items-center justify-between h-16 gap-3">
        <div className="md:flex items-center space-x-2 flex-1 hidden ">
            <Link href='#'>
            <Image
            src='/social-icons/gmail-icon.svg'
            alt="Gmail"
            width={24}
            height={24} />
            </Link>
            <Link href='#'>
            <Image
            src='/social-icons/instagram-icon.jpg'
            alt="Gmail"
            width={24}
            height={24} />
            </Link>
            <Link href='#'>
            <Image
            src='/social-icons/whatsapp-icon.png'
            alt="Gmail"
            width={24}
            height={24} />
            </Link>
        </div>
        <div className="font-bold text-2xl tracking-tighter flex-1 md:text-center  lg:text-3xl xl:text-4xl ">
            writesSmart.
        </div>
        <div className="flex items-center justify-end gap-3 flex-1 ">
            <ModeToggle />
            <MobileNav />
            <div className="md:flex items-center gap-2.5 text-sm hidden">
            <Link href='#'>Home</Link>
            <Link href='#'>About</Link>
            <Link href='#'>Contact</Link>
            <AuthLinks />
            </div>
        </div>
    </nav>
}

export default Navbar