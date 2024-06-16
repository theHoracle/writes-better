import { Category } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

export const categoriesColor = [
  "bg-red-200",
  "bg-blue-200",
  "bg-yellow-200",
  "bg-pink-200",
  "bg-gray-200",
  "bg-green-200",
];

export const getCategories = async () => {
  const res = await fetch("http://localhost:3000/api/categories");
  if (!res) throw new Error("Fetch failed");
  return res.json();
};

const CategoryList = async () => {
  const data = await getCategories();
  const categories: Category[] | undefined = data.categories;
  return (
    <div className="capitalize">
      <h1 className="font-semibold my-10 text-xl">Popular categories</h1>
      {categories && (
        <div className="grid grid-cols-2 grid-rows-3 md:grid-cols-3 md:grid-rows-2 lg:grid-cols-6 lg:grid-rows-1 gap-4">
          {categories?.map((category, index) => {
            return (
              <Link
                href={`/blog/cat=${category.title}`}
                key={category.id}
                className={`flex items-center justify-center gap-1.5 md:gap-3 rounded-md h-20 text-sm dark:text-gray-500 ${categoriesColor[index]}`}
              >
                <Image
                  src={category.img}
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
      )}
    </div>
  );
};
export default CategoryList;
