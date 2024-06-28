"use client";
import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getCategories } from "./CategoryList";
import { Category } from "@prisma/client";

interface SelectCategoryProps {
  setCatSlug: React.Dispatch<React.SetStateAction<String | undefined>>
}
const SelectCategory = ({setCatSlug}: SelectCategoryProps) => {
  const [catList, setCatList] = React.useState<Category[] | undefined>();

  React.useEffect(() => {
    const getCat = async () => {
      const data = await getCategories();
      const categories: Category[] | undefined = data.categories;
      setCatList(categories);
    };
    getCat();
  }, []);

  return (
    <Select onValueChange={setCatSlug} defaultValue="style">
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select a category" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel >Categories</SelectLabel>
          {catList?.map((category) => {
            return (
              <SelectItem
                key={category.id}
                value={category.slug}
              >
                {category.title}
              </SelectItem>
            );
          })}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SelectCategory;
