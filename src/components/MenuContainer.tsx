import Image from "next/image"
import Link from "next/link"
import MenuTextContainer from "./MenuTextContainer"

interface MenuContainerProps  {
    image?: string
    bgColor: string
    category: string
    hideImage?: boolean | undefined
}
const MenuContainer = ({bgColor, category, hideImage
}: MenuContainerProps) => {
    return (
            <Link href='/blog/' className="flex items-center gap-4">
              {!hideImage &&   <div className="relative flex-1 aspect-square rounded-full border-2 border-muted overflow-hidden">
                    <Image
                    src='/community_kids.jpeg'
                    alt='community kids'
                    fill
                    className="size-full object-cover object-center" />
                </div>}
                <div className="flex-[4]">
                <MenuTextContainer bgColor={bgColor} category={category} />
                </div>
            </Link>
    )
}
export default MenuContainer