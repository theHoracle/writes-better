import Category from "./Category";
import CategoryList, { categories } from "./CategoryList";
import MenuContainer from "./MenuContainer";

const Menu = () => {
  const blogCategories = categories
  return (
    <div className="flex-[2] hidden md:block">
      <div>
      <div className="my-10">
      <h4 className="text-muted-foreground text-xs">{"What's hot"}</h4>
      <h2 className="font-semibold text-xl leading-5">Trending</h2>
      </div>
      <div className="flex flex-col gap-4">
        {
          blogCategories.map((category, index) => {
            return <MenuContainer key={index} category={category.title} bgColor={category.bgColor} hideImage />
          })
        }
      </div>
        </div>

        {/* categories */}
        <div>
        <div className="my-10">
      <h4 className="text-muted-foreground text-xs">{"Discover by topics"}</h4>
      <h2 className="font-semibold text-xl leading-5">Categories</h2>
      </div>
      <div className="grid lg:grid-cols-3 lg:grid-rows-2 gap-3">
      {categories.map((category, index) => {
        return <Category key={index} category={category} hideImage />
      })}
      </div>
        </div>

        {/* editors section */}
      <div>
      <div className="my-10">
      <h4 className="text-muted-foreground text-xs">{"What's new"}</h4>
      <h2 className="font-semibold text-xl leading-5">Editors Picks</h2>
      </div>
      <div className="flex flex-col gap-4">
        {
          blogCategories.map((category, index) => {
            return <MenuContainer key={index} category={category.title} bgColor={category.bgColor} />
          })
        }
      </div>
        </div>
    </div>
  );
};
export default Menu;