import CardList from "@/components/CardList";
import CategoryList from "@/components/CategoryList";
import Featured from "@/components/Featured";
import Menu from "@/components/Menu";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Featured />
      <CategoryList />
      <div className="flex gap-12">
        <CardList />
        <Menu />
      </div>
  
    </main>
  );
}
