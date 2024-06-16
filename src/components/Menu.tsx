import Link from "next/link";
import CategoryList, { categoriesColor, getCategories } from "./CategoryList";
import MenuList from "./MenuList";
import { Category } from "@prisma/client";

const Menu = async () => {
  const data = await getCategories();
  const categories: Category[] | undefined = data.categories;

  return (
    <div className="hidden md:flex md:flex-col md:flex-[2] ">
      <MenuList key={1} topic="What's new" title="Most Popular" hideImage />
      {/* categories list */}
      {categories && (
        <div className="mt-8  grid grid-rows-6 md:grid-rows-3 md:grid-cols-2 lg:grid-rows-2 lg:grid-cols-3 gap-2">
          {categories?.map((category, index) => {
            return (
              <Link
                href={`/blog/cat=${category.title}`}
                key={index}
                className={`flex items-center justify-center gap-1.5 md:gap-3 lowercase rounded-md h-6 text-sm dark:text-gray-500 ${categoriesColor[index]}`}
              >
                {category.title}
              </Link>
            );
          })}
        </div>
      )}
      <MenuList key={2} topic="Chosen by the Editors" title="Editor's Pick" />
    </div>
  );
};
export default Menu;
