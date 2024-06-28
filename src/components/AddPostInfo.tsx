import * as React from "react";

import { cn, slugify } from "@/lib/utils";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Label } from "@/components/ui/label";
import { Textarea } from "./ui/textarea";
import SelectCategory from "./SelectCategory";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Progress } from "./ui/progress";

interface AddPostInfoProps {
  blogPost: string
  title: string
  img: string
}
export function AddPostInfo({blogPost,img, title}: AddPostInfoProps) {
  const [open, setOpen] = React.useState(false);
  const [postCategory, setPostCategory] = React.useState<String | undefined>()
  const [postDesc, setPostDesc] = React.useState<String | undefined>('')
  const router = useRouter()
  
  const isDesktop = useMediaQuery("(min-width: 768px)");
  
  const handleSubmit = async () => {
    const postSlug = slugify(title)
    const res = await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({
        slug: postSlug,
        title: title,
        desc: postDesc,
        blogPost: blogPost,
        img: img,
        catSlug: postCategory, // using style as a default category
      })
    })
    if(!res.ok) {
      toast.error("An error occurred!")
      return 
    }

    // show user success
    toast.success("Post created successfully!", {
      action: {
        label: "Show",
        onClick: () => router.push(`/post/${postSlug}`)
      }
    })
  }

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="secondary"
          >Publish</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add post details</DialogTitle>
            <DialogDescription>
              Select a category for your post and a short description.
            </DialogDescription>
          </DialogHeader>
          <PostInfo 
          setPostCategory={setPostCategory}
          postDesc={postDesc}
          setPostDesc={setPostDesc}
          post={handleSubmit}
           />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="secondary">Publish</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Add post details</DrawerTitle>
          <DrawerDescription>
            Select a category for your post and a short description.
          </DrawerDescription>
        </DrawerHeader>
        <PostInfo 
        setPostCategory={setPostCategory}
        postDesc={postDesc}
        setPostDesc={setPostDesc}
        post={handleSubmit}
        className="px-4" />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

interface PostInfoProps extends React.ComponentProps<"form"> {
  setPostCategory: React.Dispatch<React.SetStateAction<String | undefined>>
  setPostDesc: React.Dispatch<React.SetStateAction<String | undefined>>
  postDesc: String | undefined
  post: () => void
}
const PostInfo: React.FC<PostInfoProps> = ({ className, setPostCategory, postDesc, setPostDesc, post }) => {
const [countText, setCountText] = React.useState<number>(postDesc!.length);

  const handleText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value;
    if (newText.length <= 400) {
      setPostDesc(newText);
    }
    setCountText(newText.length);
  };

  const valueProgress = (countText / 400) * 100;

  return (
    <form className={`grid items-start gap-4 ${className}`}>
      <div>
        <SelectCategory setCatSlug={setPostCategory} />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="post-description">Post description ({(400 - postDesc!.length)} characters left)</Label>
        <div className="relative overflow-hidden flex flex-col items-center justify-center">
          <Textarea
            id="post-description"
            defaultValue="This post is about..."
            value={(postDesc) as string}
            onChange={handleText}
          />
          <Progress
            value={valueProgress}
            className={`${valueProgress === 100 ? 'bg-red-500' : ''} h-0.5 absolute bottom-0`}
          />
        </div>
      </div>
      <Button onClick={post}>Save and Publish</Button>
    </form>
  );
};