"use client"

import { Button } from "@/components/ui/button";
import { ImagePlus, Import, PlusCircle, PlusIcon } from "lucide-react"
import { useState } from "react"
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const WritePage = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [quillValue, setQuillValue] = useState('')
    return <main>
        <div className="min-h-screen relative">
            <input type="text" placeholder="Title" className="border-0 bg-transparent p-12 outline-none placeholder:text-muted-foreground text-3xl w-full" />
            <div className="flex relative items-start h-full gap-3">
                <button className="size-9 aspect-square bg-transparent border  rounded-full flex items-center justify-center" onClick={() => setIsOpen(!isOpen)}>
                    <PlusCircle className="h-4 w-4" />
                </button>
                {
                    isOpen && <div className="absolute z-50 flex left-12 bg-background  items-center justify-center gap-4">
                        <button className="size-9 bg-transparent border rounded-full flex items-center justify-center">
                            <ImagePlus className="h-4 w-4" />
                        </button>
                        <button className="size-9 bg-transparent border rounded-full flex items-center justify-center">
                            <Import className="h-4 w-4" />
                        </button>
                        <button className="size-9 bg-transparent border rounded-full flex items-center justify-center">
                            <PlusIcon className="h-4 w-4" />
                        </button>
                    </div>
                }
                <ReactQuill theme="bubble" value={quillValue} onChange={setQuillValue} 
                            placeholder="What do you want to write today..." 
                            className="size-full"
                             />
            </div>
            <Button className="absolute top-8 right-5 px-2.5 py-5">Publish</Button>
        </div>
    </main>
}

export default WritePage