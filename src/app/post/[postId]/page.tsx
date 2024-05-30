import Comments from "@/components/Comments"
import Menu from "@/components/Menu"
import Image from "next/image"

const BlogPost = () => {
    return <div className="my-10">
        <div className="grid md:grid-cols-2 gap-x-10">
            <div className="">
                <h1 className="font-semibold leading-tight text-3xl md:text-4xl">
                    Lorem ipsum dolor sit amet, adipisicing elit. Deleniti, qui!
                </h1>
                <div className="flex items-center gap-3 mt-8">
                    <div className="relative overflow-hidden rounded-full h-10 aspect-square ">
                        <Image
                        src="/category/style.jpeg"
                        alt="Style"
                        fill
                        className="size-full object-cover object-center" />
                    </div>
                    <div className="flex flex-col text-sm text-muted-foreground">
                        <span className="font-medium">John Doe</span>
                        <span className="text-xs">15.06.2024</span>
                    </div>
                </div>
            </div>
            <div className="relative overflow-hidden rounded-md hidden md:block">
                <Image
                src="/category/travel.jpeg"
                alt="travel"
                fill
                className="size-full object-cover object-center"
                 />
            </div>
        </div>
        <div className="flex gap-12">
            <div className="flex-[4] mt-10">
                {/* description */}
                <div className="flex flex-col gap-3">
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, natus iusto. Voluptas voluptatibus minima ullam fuga vero nobis consequatur quia. Sed iusto sunt quam voluptas cupiditate, consequatur eius quas magni explicabo molestias mollitia dolore consequuntur atque nam excepturi ullam id ipsa vel quos pariatur! Dicta inventore totam, voluptate adipisci veniam atque ipsam dolor illo facere commodi, temporibus recusandae iure quisquam.
                 
                </p>
                <h4 className="text-lg font-semibold">Lorem, ipsum dolor.</h4>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, natus iusto. Voluptas voluptatibus minima ullam fuga vero nobis consequatur quia. Sed iusto sunt quam voluptas cupiditate, consequatur eius quas magni explicabo molestias mollitia dolore consequuntur atque nam excepturi ullam id ipsa vel quos pariatur! Dicta inventore totam, voluptate adipisci veniam atque ipsam dolor illo facere commodi, temporibus recusandae iure quisquam.
                 
                </p>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, natus iusto. Voluptas voluptatibus minima ullam fuga vero nobis consequatur quia. Sed iusto sunt quam voluptas cupiditate, consequatur eius quas magni explicabo molestias mollitia dolore consequuntur atque nam excepturi ullam id ipsa vel quos pariatur! Dicta inventore totam, voluptate adipisci veniam atque ipsam dolor illo facere commodi, temporibus recusandae iure quisquam.
                 
                </p>
                </div>
                <Comments />
            </div>
            <Menu />
        </div>
    </div>
}
export default BlogPost