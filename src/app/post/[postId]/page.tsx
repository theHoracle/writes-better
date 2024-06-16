import { CommentBox } from "@/components/CommentHandler";
import Menu from "@/components/Menu";
import { Post } from "@prisma/client";
import { User } from "next-auth";
import Image from "next/image";
import { notFound } from "next/navigation";
import sanitizeHtml from "sanitize-html";

interface BlogPostProps {
  params: {
    postId: string;
  };
}

const getPost = async (postId: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/posts/${postId}`);
    if (!res.ok) {
      throw new Error("Response is not OK!");
    }
    return res.json();
  } catch (error) {
    console.log("Error form the page: ", error);
  }
};

const BlogPost = async ({ params }: BlogPostProps) => {
  const { postId } = params;
  const data = await getPost(postId);
  const post: Post & { user: User } = data.post;

  if (!post) {
    return notFound();
  }
  console.log(post)

  const sanitizedHtml = sanitizeHtml(post.desc);
  console.log("Sanitized html: ", sanitizedHtml)

  return (
    <div className="my-5 md:my-10">
      <div className="">
        <div className="grid md:grid-cols-2 gap-x-4">
          <div className="flex flex-col gap-8">
            <h1 className="text-4xl lg:text-5xl tracking-tighter leading-tight font-bold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h1>
            <div className="flex items-center gap-4">
              <div className="relative  aspect-square h-12 overflow-hidden rounded-full ">
                <Image
                  fill
                  src={post.user.image || ""}
                  alt="theHoracle"
                  className="object-contain object-center size-full scale-110"
                />
              </div>
              <div className="text-sm">
                <p className="">{post.user.name}</p>
                <span className="text-muted-foreground">
                  {post.createdAt.toString().substring(0, 10)}
                </span>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden hidden md:block rounded-lg ">
            <Image
              fill
              src="/kids_about_to_ball.jpeg"
              alt="kids about to ball image"
              className="object-cover object-center size-full "
            />
          </div>
        </div>
        {/* content - */}
        <div className="mt-10 flex gap-12">
          <div className="flex-[4]">
          <div className="my-8">
            <div dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />
          </div>
            <div className="">
              <h2 className="font-semibold my-10 text-xl">Comments</h2>
              <CommentBox postSlug={post.slug} />
            </div>
          </div>
          <Menu />
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
