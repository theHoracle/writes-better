"use client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Comment } from "@prisma/client";
import { User } from "next-auth";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import useSWR from "swr";

interface CommentBoxProps {
  postSlug: string;
}

const fetcher = async (url: string) => {
  const res = await fetch(url);

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message);
  }
  return data;
};

export function CommentBox({ postSlug }: CommentBoxProps) {
  const { data: session } = useSession();

  const { data, isLoading, mutate } = useSWR(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/comments?postSlug=${postSlug}`,
    fetcher,
  );

  const comments: (Comment & { user: User })[] = data?.comments;
  
  const [commentDesc, setCommentDesc] = useState("")

  const handleCommentSubmit = async () => {
    
    try {
      await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/comments`, {
        method: "POST",
        body: JSON.stringify({commentDesc, postSlug})
      })
      mutate()  
      setCommentDesc("")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      {session ? (
        <div className="grid w-full gap-2">
          <Textarea placeholder="Type your message here." value={commentDesc} onChange={e => setCommentDesc(e.target.value)} />
          <Button 
          onClick={handleCommentSubmit}
          >Post Comment</Button>
        </div>
      ) : (
        <Link href="/login">
          <p className="py-4 w-full text-center bg-primary rounded-md ">
            Login to add a comment
          </p>
        </Link>
      )}
      <div className="my-8">
        {/* Users comments */}
        <ul className="divide-y border-muted-foreground flex flex-col">
          {isLoading
            ? null
            : comments?.map((comment, index) => {
                return (
                  <li key={comment.id} className="flex py-4 flex-col gap-2">
                    <div className="flex gap-4 items-center">
                      <Image
                        src={comment.user.image || ""}
                        alt="User Image"
                        width={50}
                        height={50}
                        className="rounded-full "
                      />
                      <div className="flex flex-col">
                        <p className="font-semibold">{comment.user.name}</p>
                        <span className="text-xs">
                          {comment.createdAt.toString().substring(0, 10)}
                        </span>
                      </div>
                    </div>
                    <p className="">{comment.desc}</p>
                  </li>
                );
              })}
        </ul>
      </div>
    </div>
  );
}

