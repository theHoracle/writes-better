import { prisma } from "@/lib/nextAuth/prisma"
import { NextRequest, NextResponse } from "next/server"
import { URL } from "url"

// get single post
interface Params {
    postId: string
}
export const GET = async (req: NextRequest, {params}: {params: Params}) => {
   const { postId } = params
   console.log(postId)
    try {
        const data = await prisma.post.findUnique({
            where: {
                id: postId
            }
        })
        console.log(data)
        return NextResponse.json({data}, {status: 200})
    } catch (error) {
        console.log("Post route error: ", error)
        
        return NextResponse.json({message: "Something went wrong!"}, {status: 500})
    }
}