import MenuList from "./MenuList";

const Menu = () => {
  return (
    <div className="flex-[2]">
      <MenuList key={1} topic="What's new" title="Most Popular" hideImage />
      
      <MenuList key={2} topic="Chosen by the Editors" title="Editor's Pick"/>
    </div>
  );
};
export default Menu;