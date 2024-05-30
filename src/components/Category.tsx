import Image from "next/image"
import Link from "next/link"

interface CategoryProps {
    category: any
    hideImage?: boolean | undefined
}

const Category = ({category, hideImage}: CategoryProps) => {
    return <Link href={`/blog/cat=${category.title}`} className={`flex items-center justify-center gap-1.5 md:gap-3 rounded-md w-full min-w-28 ${hideImage ? 'min-w-fit px-3 py-1 h-fit' : null} h-20 text-sm ${category.bgColor}`}>
    {!hideImage && <Image
     src={category.image}
     height={32}
     width={32}
     alt={`${category.title} category`} 
     className="rounded-[50%] h-[32px]" />}
     {category.title}
 </Link>
}
export default Category