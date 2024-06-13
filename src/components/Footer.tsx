import Image from "next/image";
import Link from "next/link";
import { getCategories } from "./CategoryList";
import { Category } from "@prisma/client";


const Footer = async () => {
  const data = await getCategories()
  const categories: Category[] | undefined = data.categories
  return (
    <footer className="flex flex-col md:flex-row gap-8 pt-10">
      <div className="flex-1">
        <div className="font-bold text-2xl tracking-tighter flex-1   lg:text-3xl xl:text-4xl ">
          <Link className="" href="/">
            writesSmart.
          </Link>
        </div>
        <p className="">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
          recusandae beatae enim error in esse alias? Nobis eos facere corporis
          omnis, minus corrupti repellat?
        </p>
        <div className="flex items-center my-4 space-x-2 flex-1  ">
          <Link href="#">
            <Image
              src="/social-icons/gmail-icon.svg"
              alt="Gmail"
              width={18}
              height={18}
            />
          </Link>
          <Link href="#">
            <Image
              src="/social-icons/instagram-icon.jpg"
              alt="Gmail"
              width={18}
              height={18}
            />
          </Link>
          <Link href="#">
            <Image
              src="/social-icons/whatsapp-icon.png"
              alt="Gmail"
              width={18}
              height={18}
            />
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-3 md:-mr-10 gap-x-10 my-8 flex-[2] text-xs md:text-sm">
        <div className="flex flex-col">
          <h6>Links</h6>
          <Link href="/">Home</Link>
          <Link href="/blogs">Blog</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className="flex flex-col">
          <h6>Categories</h6>
          {categories && <ul>
            {categories?.map((category, index) => {
              return (
                <li key={index}>
                  <Link href={`/${category.title}`} className="capitalize ">
                    {category.title}
                  </Link>
                </li>
              );
            })}
          </ul>}
        </div>
        <div className="flex flex-col">
          <h6>Socials</h6>
          <Link href="https://www.facebook.com">Facebook</Link>
          <Link href="https://www.x.com/theHoracle">X (twitter)</Link>
          <Link href="https://www.instagram.com">Instagram</Link>
          <Link href="https://www.github.com/theHoracle">Github</Link>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
