import CardList from "@/components/CardList";
import CategoryList from "@/components/CategoryList";
import Featured from "@/components/Featured";
import Menu from "@/components/Menu";
import Image from "next/image";

interface HomeProps {
  searchParams: {
    page: string
    cat: string
  }
}

export default function Home({searchParams}: HomeProps) {
  const page = parseInt(searchParams.page) || 1
  const cat = searchParams.cat || ""
  return (
    <main className="">
      <Featured />
      <CategoryList  />
      <div className="flex gap-12">
        <CardList page={page} cat={cat} />
        <Menu />
      </div>
    </main>
  );
}
