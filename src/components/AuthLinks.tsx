import Link from "next/link"
import { buttonVariants } from "./ui/button"

const AuthLinks = () => {
    const status = false

    return <>
    {status ? (
        <Link href='/sign-in'
        className={buttonVariants()}>
            Sign in
        </Link>
    ) : (
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-2.5">
        <Link href='/new-post'>
            Write
        </Link>
        <Link href='/sign-out' className={buttonVariants({variant: 'destructive'})}>
            Sign out
        </Link>
        </div>
    )}
    </>
}
export default AuthLinks