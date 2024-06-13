import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";
import { Session } from "next-auth";
import { signOut } from "next-auth/react";
import NavbarAccountMenu from "./NavbarAccountMenu";

interface AuthLinksProps {
  session: Session | null;
}

const AuthLinks = ({ session }: AuthLinksProps) => {
  return (
    <>
      {!session ? (
        <Link href="/login" className={buttonVariants()}>
          Sign in
        </Link>
      ) : (
        <div className="">
          <NavbarAccountMenu user={session.user} />
        </div>
      )}
    </>
  );
};
export default AuthLinks;
