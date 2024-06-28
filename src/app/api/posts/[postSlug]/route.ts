import { prisma } from "@/lib/nextAuth/prisma";
import { NextRequest, NextResponse } from "next/server";

// get single post
interface Params {
  postSlug: string;
}
export const GET = async (req: NextRequest, { params }: { params: Params }) => {
  const { postSlug } = params;
  try {
    const post = await prisma.post.findUnique({
      where: {
        slug: postSlug
      },
      include: { user: true },
    });
    return NextResponse.json({ post }, { status: 200 });
  } catch (error) {
    console.log("Post route error: ", error);
    return NextResponse.json(
      { message: "Something went wrong!" },
      { status: 500 },
    );
  }
};
