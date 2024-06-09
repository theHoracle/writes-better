import { link } from "fs";
import Image from "next/image";
import Link from "next/link";

export const categories = [
  {
    title: "style",
    image: "/category/style.jpeg",
    bgColor: "bg-red-200",
  },
  {
    title: "travel",
    image: "/category/travel.jpeg",
    bgColor: "bg-blue-200",
  },
  {
    title: "language",
    image: "/category/language.jpeg",
    bgColor: "bg-yellow-200",
  },
  {
    title: "culture",
    image: "/category/culture.jpeg",
    bgColor: "bg-pink-200",
  },
  {
    title: "coding",
    image: "/category/coding.jpeg",
    bgColor: "bg-gray-200",
  },
  {
    title: "food",
    image: "/category/food.jpeg",
    bgColor: "bg-green-200",
  },
];

const CategoryList = () => {
  return (
    <div className="capitalize">
      <h1 className="font-semibold my-10 text-xl">Popular categories</h1>
      <div className="grid grid-cols-2 grid-rows-3 md:grid-cols-3 md:grid-rows-2 lg:grid-cols-6 lg:grid-rows-1 gap-4">
        {categories.map((category, index) => {
          return (
            <Link
              href={`/blog/cat=${category.title}`}
              key={index}
              className={`flex items-center justify-center gap-1.5 md:gap-3 rounded-md h-20 text-sm dark:text-gray-500 ${category.bgColor}`}
            >
              <Image
                src={category.image}
                height={32}
                width={32}
                alt={`${category.title} category`}
                className="rounded-[50%] h-[32px]"
              />
              {category.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default CategoryList;
