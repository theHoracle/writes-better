import { auth } from "@/lib/nextAuth/auth";
import { prisma } from "@/lib/nextAuth/prisma";
import { NextRequest, NextResponse } from "next/server";

// Get all posts
export const GET = async (req: NextRequest) => {
  const { searchParams } = new URL(req.url);
  const page = searchParams.get("page") || "1";
  const cat = searchParams.get("cat") || "";
  const POST_PER_PAGE = 2;
  const query = {
    take: POST_PER_PAGE,
    skip: POST_PER_PAGE * (parseInt(page) - 1),
    where: {
      ...(cat && { catSlug: cat }),
    },
  };
  try {
    const [data, count] = await prisma.$transaction([
      prisma.post.findMany(query),
      prisma.post.count({
        where: query.where,
      }),
    ]);
    return NextResponse.json({ data, count }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Something went wrong!" },
      { status: 500 },
    );
  }
};



// add a post
export const POST = auth(async (req, res) => {
  const session = req.auth;
  if (!session) {
    return NextResponse.json({ message: "NOT AUTHENTICATED" }, { status: 401 });
  }

  try {
    const body = await req.text();
    const parsedBody = await JSON.parse(body)
    
    if(Object.values(parsedBody).some(value => value === false)) {
      return NextResponse.json({
        message: "MISSING REQUIRED FIELDS"
      }, {status: 404})
    }
    await prisma.post.create({
      data: {
        ...parsedBody,
        userEmail: session.user?.email,
      },
    });
    return NextResponse.json(
      { message: "POST ADDED SUCESSFULLY" },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json({ message: "SOMETHING WENT WRONG" }, { status: 500 });
  }
});
