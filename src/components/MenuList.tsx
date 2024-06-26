import Link from "next/link";

import Image from "next/image";
import { categoriesColor, getCategories } from "./CategoryList";
import { Category } from "@prisma/client";

interface MenuListProps {
  topic: string;
  title: string;
  hideImage?: boolean | undefined;
}
const MenuList = async ({ title, topic, hideImage }: MenuListProps) => {
  const data = await getCategories();
  const categories: Category[] | undefined = data.categories;
  return (
    <div>
      <div className="my-8">
        <p className="text-xs text-muted-foreground leading-4">{topic}</p>
        <h2 className="font-semibold my-1 text-xl leading-4">{title}</h2>
      </div>
      {categories && (
        <div className="flex flex-col gap-2.5">
          {categories?.map((category, index) => {
            return (
              <MenuListItem
                key={category.id}
                bgColor={categoriesColor[index]}
                category={category.title}
                imageUrl={category.img}
                hideImage={hideImage}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MenuList;

interface MenuListItemProps {
  category: string;
  imageUrl: string;
  bgColor: string;
  hideImage?: boolean;
}

const MenuListItem = ({
  category,
  imageUrl,
  bgColor,
  hideImage,
}: MenuListItemProps) => {
  return (
    <div className="text-sm">
      <Link
        href={`/posts?category=${category}`}
        className="flex gap-2 items-center"
      >
        {!hideImage ? (
          <div className="relative flex-1 aspect-square rounded-full overflow-hidden">
            <Image
              src={imageUrl}
              alt={`${category} category`}
              className="object-cover object-center size-full"
              fill
            />
          </div>
        ) : null}
        <div className="flex-[4] flex flex-col gap-1">
          <div className="flex flex-col gap-0.5">
            <span
              className={`capitalize text-xs ${bgColor} dark:text-gray-500 max-w-fit px-1.5 py-0.5 text-center rounded-2xl`}
            >
              {category}
            </span>
            <h4 className="leading-4 ">
              Lorem ipsum dolor elit. Ad harm magni, fugiat illum repellat?
            </h4>
          </div>
          <div className="flex text-xs items-center gap-1">
            <p className="font-semibold">John Doe</p>
            <p className="text-muted-foreground"> - 10.06.24</p>
          </div>
        </div>
      </Link>
    </div>
  );
};
