"use client";
import "react-quill/dist/quill.bubble.css"; // or 'quill.bubble.css' for the bubble theme
import { Brackets, FileVideo, Image, PlusCircle } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { Session } from "next-auth";
import { useRouter } from "next/navigation";

import dynamic from "next/dynamic";
import { AddPostInfo } from "./AddPostInfo";
import uploadFile from "@/lib/firebase/upload-file";

interface TextEditorProps {
  session: Session | null;
}

const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false,
});

const TextEditor = ({ session }: TextEditorProps) => {

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("")
  const [imageFile, setImageFile] = useState<File | undefined>();
  const [mediaUrl, setMeidiaUrl] = useState('')

  const router = useRouter();
  if (!session) {
    router.push("/login");
  }

  useEffect(() => {
    const getImage = async () => {
      const imageUrl = (await uploadFile(imageFile)) as string
      if(imageUrl) setMeidiaUrl(imageUrl)
    }
    getImage()
  }, [imageFile]);

  return (
    <div className="flex flex-col gap-4">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="bg-background outline-none text-4xl lg:text-6xl font-bold tracking-tight"
      />
      <div className="flex relative items-start gap-4 h-[700px]">
        {/* quill editor  */}
        <button onClick={() => setOpen(!open)}>
          <PlusCircle className="" />
        </button>
        {open ? (
          <div className="space-x-4 flex absolute z-40 left-10 bg-transparent">
            <input
              type="file"
              name="image"
              id="image"
              className="hidden"
              onChange={(e) => setImageFile(e.target.files?.[0])}
            />
            <button className="border border-card-foreground rounded-full p-1">
              <label htmlFor="image">
                <Image aria-label="Add image" className="h-4 w-4" />
              </label>
            </button>
            <button className="border border-card-foreground rounded-full p-1">
              <Brackets aria-label="Add external file" className="h-4 w-4" />
            </button>
            <button className="border border-card-foreground rounded-full p-1">
              <FileVideo aria-label="Add video" className="h-4 w-4" />
            </button>
          </div>
        ) : null}
        <ReactQuill
          theme="bubble"
          value={value}
          onChange={setValue}
          placeholder="Tell your story!"
          className="w-full h-[700px]"
        />
      </div>
      <div className="absolute top-24 right-5">
        <AddPostInfo
        blogPost={value}
        img={mediaUrl}
        title={title}
        />
      </div>
    </div>
  );
};

export default TextEditor;
