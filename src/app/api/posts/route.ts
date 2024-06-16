import { prisma } from "@/lib/nextAuth/prisma";
import { NextRequest, NextResponse } from "next/server";

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
