"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

const SignIn = () => {
    return <div className="flex justify-center items-center my-14 ">
        <div className="bg-primary-foreground px-6 text-sm md:text-bases md:px-20 py-5 md:py-10 flex flex-col gap-16 rounded-lg ">
            <div className="p-4 md:p-6 flex items-center justify-center rounded-md cursor-pointer font-semibold md:font-bold bg-[#ff5555]">Sign in with Google</div>
            <div className="p-4 md:p-6 flex items-center justify-center rounded-md cursor-pointer font-semibold md:font-bold bg-black">Sign in as anonymus</div>
            <div className="p-4 md:p-6 flex items-center justify-center rounded-md cursor-pointer font-semibold md:font-bold bg-[#0B7BEA]">Sign in with Facebook</div>
        </div>
    </div>
}
export default SignIn