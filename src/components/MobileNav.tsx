"use client";

import {
  HamburgerMenuIcon,
  Cross1Icon,
  Cross2Icon,
} from "@radix-ui/react-icons";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";
import { User } from "next-auth";
import { signOut } from "next-auth/react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";

interface MobileNavProps {
  user: User | undefined;
}

const MobileNav = ({ user }: MobileNavProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();
  const mobileNavRef = useRef<HTMLDivElement | null>(null);

  // remove main scroll when nav is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    }
    document.body.classList.remove("overflow-hidden");
  });

  // close navmenu on pathname change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);
  // if we navigate to same page, still close navmenu
  const closeOnCurrent = (href: string) => {
    if (pathname === href) {
      setIsOpen(false);
    }
  };
  useOnClickOutside(mobileNavRef, () => setIsOpen(false));

  const navItems = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "About",
      link: "/about",
    },
    {
      title: "Contact",
      link: "/contact",
    },
    {
      title: "Posts",
      link: "/posts",
    },
  ];
  return (
    <div className="md:hidden">
      {!isOpen ? (
        <HamburgerMenuIcon
          className="h-5 w-5"
          onClick={() => setIsOpen(!isOpen)}
        />
      ) : (
        <Cross2Icon className="h-5 w-5" onClick={() => setIsOpen(!isOpen)} />
      )}
      {isOpen && (
        <div
          ref={mobileNavRef}
          className="fixed top-20 right-0 bg-background z-50 mobile-nav-height w-1/2 min-w-64 py-5 px-4 flex flex-col border-l border-gray-300"
        >
          <div>
            <ul className="flex flex-col divide-y border-gray-300 gap-2 peer-[1]:pt-1">
              {navItems.map((nav, index) => {
                return (
                  <li key={index} className="pt-2">
                    <Link href={nav.link}>{nav.title}</Link>
                  </li>
                );
              })}
            </ul>
            <div className="pt-4">
              {user ? (
                <div className="flex flex-col gap-4">
                  <Link
                    href="/write"
                    className={cn(buttonVariants({ variant: "outline" }))}
                  >
                    Write
                  </Link>
                  <Button
                    variant="destructive"
                    onClick={() => signOut()}
                    className="w-full"
                  >
                    Sign out
                  </Button>
                </div>
              ) : (
                <div>
                  <Link
                    href="/login"
                    className={cn(buttonVariants(), "w-full")}
                  >
                    Sign in
                  </Link>
                </div>
              )}
            </div>
          </div>
          <div></div>
        </div>
      )}
    </div>
  );
};
export default MobileNav;
