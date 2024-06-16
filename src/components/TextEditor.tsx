"use client";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css"; // or 'quill.bubble.css' for the bubble theme
import { Brackets, FileVideo, Image, PlusCircle } from "lucide-react";
import { useRef, useState } from "react";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { Session } from "next-auth";
import { useRouter } from "next/navigation";

interface TextEditorProps {
  session: Session | null;
}

const TextEditor = ({ session }: TextEditorProps) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  const router = useRouter();
  if (!session) router.push("/login");

  if (session)
    return (
      <div className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Title"
          className="bg-background outline-none text-4xl lg:text-6xl font-bold tracking-tight"
        />
        <div className="flex relative items-start gap-4 h-[700px]">
          {/* quill editor  */}
          <button onClick={() => setOpen(!open)}>
            <PlusCircle className="" />
          </button>
          {open ? (
            <div className="space-x-4 flex absolute z-40 left-10 bg-transparent">
              <button className="border border-card-foreground rounded-full p-1">
                <Image aria-label="Add image" className="h-4 w-4" />
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
            className="w-full"
          />
        </div>
        <Button className="absolute top-24 right-5">Publish</Button>
      </div>
    );
  return null;
};

export default TextEditor;
