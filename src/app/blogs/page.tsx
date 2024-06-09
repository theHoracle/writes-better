import CardList from "@/components/CardList";
import Menu from "@/components/Menu";

const Blogs = () => {
  return (
    <div>
      <h1 className="text-3xl mt-4 leading-tight tracking-tighter font-bold ">
        Styles Category
      </h1>
      <div className="flex gap-12">
        <CardList />
        <Menu />
      </div>
    </div>
  );
};

export default Blogs;
