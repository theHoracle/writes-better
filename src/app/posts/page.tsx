import CardList from "@/components/CardList";
import Menu from "@/components/Menu";

interface BlogProps {
  searchParams: {
    page: string;
    cat: string;
  };
}

const Blogs = ({ searchParams }: BlogProps) => {
  const page = parseInt(searchParams.page) || 1;
  const cat = searchParams.cat || "";
  return (
    <div>
      <h1 className="text-3xl mt-4 leading-tight tracking-tighter font-bold ">
        Styles Category
      </h1>
      <div className="flex gap-12">
        <CardList page={page} cat={cat} />
        <Menu />
      </div>
    </div>
  );
};

export default Blogs;
