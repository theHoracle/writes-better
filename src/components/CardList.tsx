import Image from "next/image";
import { PaginationBar } from "./Pagination";
import Card from "./Card";

const CardList = () => {
  return (
    <div className="flex-[5]">
      <h2 className="font-semibold my-10 text-xl">Recent Post</h2>
      <div className="">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <PaginationBar />
    </div>
  );
};
export default CardList;
