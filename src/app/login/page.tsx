import Image from "next/image"
import Link from "next/link"

import { Button, buttonVariants } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { signIn } from "@/lib/nextAuth/auth"
import { cn } from "@/lib/utils"

const Login = () => {
  return (
    <div className="w-full lg:grid lg:min-h-[600px] xl:min-h-[800px]">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-4xl font-bold tracking-tighter leading-tight">Login</h1>
            <p className="text-balance text-muted-foreground">
              Select an auth provider below to login to your account
            </p>
          </div>
          <div className="grid gap-4 divide-y border-muted">
            <div className="">
              <LoginWithGoogle />
            </div>
            <div className="">
              <LoginWithFacebook />
            </div>
            <div className="">
              <LoginWithGithub />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login

const LoginWithGoogle = () => {
    return <form
      action={async () => {
        "use server"
        await signIn("google")
      }}
    >
      <button type="submit" className={cn(buttonVariants(), 'w-full py-6')}>Sign in with Google</button>
    </form>
}
const LoginWithFacebook = () => {
    return <form
      action={async () => {
        "use server"
        await signIn("google")
      }}
    >
      <button type="submit" className={cn(buttonVariants(), 'w-full py-6')}>Sign in with Facebook</button>
    </form>
}
const LoginWithGithub = () => {
    return <form
      action={async () => {
        "use server"
        await signIn("google")
      }}
    >
      <button type="submit" className={cn(buttonVariants(), 'w-full py-6')}>Sign in with Github</button>
    </form>
}
