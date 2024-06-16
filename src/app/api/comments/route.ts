import { auth } from "@/lib/nextAuth/auth";
import { prisma } from "@/lib/nextAuth/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
import { comment } from "postcss";
import { json } from "stream/consumers";
import { URL } from "url";

// get all comnments of a single post

export const GET = async (req: NextRequest) => {
  const { searchParams } = new URL(req.url);
  const postSlug = searchParams.get("postSlug");
  try {
    const comments = await prisma.comment.findMany({
      where: {
        ...(postSlug && { postSlug: postSlug }),
      },
      include: { user: true },
    });
    console.log(comments);
    return NextResponse.json({ comments }, { status: 200 });
  } catch (error) {
    console.log("Post route error: ", error);
    return NextResponse.json(
      { message: "Something went wrong!" },
      { status: 500 },
    );
  }
};

// add new comment to a post

export const POST = auth( async (req) => {
  const session = req.auth
  if(!session) {
    console.log()
    return NextResponse.json({message: "NOT AUTHENTICATED"}, {status: 401})
  }

  try {
    const body = await req.text()
    const parsedBody = JSON.parse(body)

    // Log the request body to verify its content
    console.log("Parsed body:", parsedBody, "\n BOdy ->", body);

    // Destructure the fields from the request body
    const { commentDesc, postSlug } = parsedBody;

    if (!commentDesc || !postSlug) {
      return NextResponse.json({message: "MISSING REQUIRED FIELDS"}, {status: 400})
    }
      // Create a new comment in the database
      await prisma.comment.create({
        data: {
          desc: commentDesc,
          postSlug: postSlug,
          userEmail: session?.user?.email!, // Adding user email from the session
        },
      });
      return NextResponse.json({message: "COMMENT ADDED SUCESSFULLY"}, {status: 200})
  } catch (error) {
    console.log("Post route error: ", error);

    return NextResponse.json(
      { message: "Something went wrong!" },
      { status: 500 },
    );
  }
});
