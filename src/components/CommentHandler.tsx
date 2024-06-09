import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";

export function CommentBox() {
  const user = false;
  if (user)
    return (
      <div className="grid w-full gap-2">
        <Textarea placeholder="Type your message here." />
        <Button>Post Comment</Button>
      </div>
    );
  return (
    <Link href="/login">
      <p className="py-4 w-full text-center bg-primary rounded-md ">
        Login to add a commnet
      </p>
    </Link>
  );
}
