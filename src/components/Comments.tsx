import Link from "next/link"
import { Button, buttonVariants } from "./ui/button"
import { Textarea } from "./ui/textarea"
import Image from "next/image"

const Comments = ( ) => {
    const authStatus = true
    let comments = [
        {author: "cockaler openak", img: "", date: "29.10.2024", 
        comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, alias temporibus. Ducimus ipsa molestias, ex dicta quas unde neque corpoeius. Molestiae."},
        {author: "cockaler openak", img: "", date: "29.10.2024", 
        comment: "Lorem ilit. Et, alias temporibus. Ducimus ipsa molestias, ex dicta quas unde neque corporis minus labore reiciendis sapiente asperiores quae quibusdam nemo eius. Molestiae."},
        {author: "cockaler openak", img: "", date: "29.10.2024", 
        comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, de neque corporis minus labore reiciendis sapiente asperiores quae quibusdam nemo eius. Molestiae."},
        {author: "cockaler openak", img: "", date: "29.10.2024", 
        comment: "Lorem ex dicta quas unde neque corporis minus labore reiciendis sapiente asperiores quae quibusdam nemo eius. Molestiae."},
    ]
    return <div className="mt-12">
        <h2 className="font-semibold text-xl leading-5 mb-6">Comments</h2>
        {authStatus ? (
            <div className="grid w-full gap-2">
            <Textarea placeholder="Type your comment here." />
            <Button>Add comment</Button>
          </div>
        ) : (
            <Link href='/sign-in' className={buttonVariants({variant: 'outline'})}>Login to write a comment</Link>
        )}
        <div>
            <ul className="my-10 flex divide-y flex-col gap-4">
                {comments.map((comment, index) => {
                    return <li key={index} className="text-sm flex flex-col pt-4 ">
                        <div className="flex items-center gap-4">
                            <div className="relative h-10 aspect-square overflow-hidden rounded-full ">
                            <Image
                            src="/category/culture.jpeg"
                            alt="Culture"
                            fill
                            className="size-full object-cover object-center" />
                            </div>
                        <div className="">
                            <span className="capitalize font-semibold">{comment.author} - </span>
                            <span className=" text-muted-foreground">30.05.2024</span>
                        </div>
                        </div>
                        <p className="">
                            {comment.comment}
                        </p>
                    </li>
                })}
            </ul>
        </div>
    </div>
}
export default Comments