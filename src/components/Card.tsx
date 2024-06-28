import Image from "next/image";
import { Button, buttonVariants } from "./ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Post } from "@prisma/client";

interface CardProps {
  post: Post;
}

const Card = ({ post }: CardProps) => {
  return (
    <div className="md:grid md:grid-cols-2 mb-12 gap-x-8">
      {post.img && <div className="relative hidden md:block h-60 overflow-hidden rounded-md">
        <Image
          fill
          src={post.img}
          className="size-full object-cover object-center"
          alt={`${post.slug}-image`}
        />
      </div>}
      <div className="text-xs flex flex-col gap-2 justify-center">
        <div>
          <span className="text-gray-400">
            {post.createdAt.toString().substring(0, 10)} -{" "}
          </span>
          <span className="uppercase text-red-500 font-medium">
            {post.catSlug}
          </span>
        </div>
        <h2 className="text-lg font-bold leading-5">
          {post.title}
        </h2>
        <p className="">
          {post.desc}
        </p>
        <Link
          href={`/post/${post.slug}`}
          className={cn(
            buttonVariants({ variant: "link" }),
            "px-0 max-w-fit text-xs",
          )}
        >
          Read more &rarr;
        </Link>
      </div>
    </div>
  );
};
export default Card;
