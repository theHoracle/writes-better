import Image from "next/image";
import Link from "next/link";
import { categories } from "./CategoryList";

const Footer = () => {
    const categoriesList = categories
    return <footer className="flex flex-col md:flex-row justify-between mt-12 py-4 text-sm">
        <div className="flex-1 flex flex-col gap-5">
            <div className="flex items-center gap-2 overflow-hidden">
                <Image
                src='/category/food.jpeg'
                alt=""
                width={50} height={50}
                className="rounded-full aspect-square" />
                <h1 className="font-bold text-2xl tracking-tighter flex-1  lg:text-3xl xl:text-4xl ">
                    writesSmart.
                </h1>
            </div>
            <p className="text-muted-foreground">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, doloribus.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, incidunt.
            </p>
            <div className="flex  items-center space-x-2  flex-1  ">
                <Link href='#'>
                <Image
                src='/social-icons/gmail-icon.svg'
                alt="Gmail"
                width={24}
                height={24} />
                </Link>
                <Link href='#'>
                <Image
                src='/social-icons/instagram-icon.jpg'
                alt="Gmail"
                width={24}
                height={24} />
                </Link>
                <Link href='#'>
                <Image
                src='/social-icons/whatsapp-icon.png'
                alt="Gmail"
                width={24}
                height={24} />
                </Link>
            </div>
            </div>

            {/* links */}
        <div className="flex-1 flex w-full py-6 md:py-0 justify-between px md:justify-center lg:justify-end  gap-8 md:gap-16 lg:gap-28 xl:gap-36">
        <div className="flex flex-col gap-2">
            <span className="font-semibold">Links</span>
            <Link href='#'>Home</Link>
            <Link href='#'>Blog</Link>
            <Link href='#'>About</Link>
            <Link href='#'>Contact</Link>
        </div>
        <div className="flex flex-col gap-2">
            <span className="font-semibold">Links</span>
            <Link href='#'>Home</Link>
            <Link href='#'>Blog</Link>
            <Link href='#'>About</Link>
            <Link href='#'>Contact</Link>
        </div>
        <div className="flex flex-col gap-2">
            <span className="font-semibold">Tags</span>
            <ul className="flex flex-col gap-2">
                {categoriesList.map((category, index) => {
                    return <Link href={`/${category.title}`} key={index}
                    className="capitalize"
                    >{category.title}</Link>
                })}
            </ul>
        </div>
    </div>
    </footer>
}
export default Footer;