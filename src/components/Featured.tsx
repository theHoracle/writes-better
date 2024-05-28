import Image from "next/image"
import { Button } from "./ui/button"

const Featured = () => {
    return <div className="">
        <h1 className="font-medium text-3xl md:text-5xl lg:text-6xl"> <span className="font-bold">
       Read and Read,   </span> pronounced differently? Why?</h1>
        <div className="mt-8 flex items-center gap-12">
            <div className="relative hidden md:block flex-1 h-full rounded-md overflow-hidden min-h-80">
                <Image 
                src='/community_kids.jpeg'
                fill
                className="size-full object-cover object-center"
                alt="Some kids and children"/>
            </div>
            <div className="flex-1 flex flex-col gap-4">
                <h1 className="text-2xl md:text-3xl font-semibold leading-7 tracking-tight">Lets learn more about the English Language</h1>
                <p className="text-muted-foreground">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae accusamus sint expedita. Dolores laudantium sequi repellat provident? Repellendus adipisci accusantium pariatur nemo ducimus vero non, inventore maiores laborum?</p>
                <Button className="max-w-fit md:min-w-full">Read More</Button>
            </div>
        </div>
    </div>
} 
export default Featured