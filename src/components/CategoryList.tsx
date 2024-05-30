import { link } from "fs"
import Image from "next/image"
import Link from "next/link"
import Category from "./Category"


export const categories = [{
    title: "style",
    image: "/category/style.jpeg",
    bgColor: "bg-red-200" ,   
}, 
{
    title: "travel",
    image: "/category/travel.jpeg",
    bgColor: "bg-blue-200" ,
}, 
 {
    title: "language",
    image: "/category/language.jpeg",
    bgColor: "bg-yellow-200" ,
},
 {
    title: "culture",
    image: "/category/culture.jpeg",
    bgColor: "bg-pink-200" ,
},
{
    title: "coding",
    image: "/category/coding.jpeg",
    bgColor: "bg-gray-200" ,
}, {
    title: "food",
    image: "/category/food.jpeg",
    bgColor: "bg-green-200" ,
}]

interface CategoryListProps {
}
const CategoryList = ({}: CategoryListProps) => {
    
    return (
        <div className="capitalize">
            <h1 className="font-semibold my-10 text-xl">Popular categories</h1>
            <div className="grid grid-cols-2 grid-rows-3 md:grid-cols-3 md:grid-rows-2 lg:grid-cols-6 gap-4">
            {categories.map((category, index) => {
                return <Category key={index} category={category}  />
                })
            }
            </div>
        </div>
    )
}
export default CategoryList