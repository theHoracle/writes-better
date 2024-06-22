import Image from "next/image";
import Link from "next/link";
import { ModeToggle } from "./ThemeToggle";
import AuthLinks from "./AuthLinks";
import MobileNav from "./MobileNav";
import { auth } from "@/lib/nextAuth/auth";
import { buttonVariants } from "./ui/button";

const Navbar = async () => {
  const session = await auth();
  return (
    <nav className="flex z-40 items-center justify-between h-16 md:h-20 gap-3">
      <div className="lg:flex items-center space-x-2 flex-1 hidden ">
        <Link href="#">
          <Image
            src="/social-icons/gmail-icon.svg"
            alt="Gmail"
            width={24}
            height={24}
          />
        </Link>
        <Link href="#">
          <Image
            src="/social-icons/instagram-icon.jpg"
            alt="Gmail"
            width={24}
            height={24}
          />
        </Link>
        <Link href="#">
          <Image
            src="/social-icons/whatsapp-icon.png"
            alt="Gmail"
            width={24}
            height={24}
          />
        </Link>
      </div>
      <div className="font-bold text-2xl tracking-tighter flex-1 lg:text-center  lg:text-3xl xl:text-4xl ">
        writesSmart.
      </div>
      <div className="flex items-center justify-end gap-3 flex-1 ">
        <ModeToggle />
        <MobileNav user={session?.user} />
        <div className="md:flex items-center gap-0.5 text-sm hidden">
          <Link className={buttonVariants({variant: 'ghost'})} href="/">Home</Link>
          <Link className={buttonVariants({variant: 'ghost'})} href="/about">About</Link>
          <Link className={buttonVariants({variant: 'ghost'})} href="/contact">Contact</Link>
          <AuthLinks session={session} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
