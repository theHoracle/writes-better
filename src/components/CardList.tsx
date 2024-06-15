import Image from "next/image";
import { PaginationBar } from "./Pagination";
import Card from "./Card";
import { Post } from "@prisma/client";

interface CardListProps {
  page: number
  cat: string
}

const getPosts = async (page: number, cat: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/posts?page=${page}&cat=${cat}`, {
    cache: "no-cache"
  } )
  if(!res) {throw new Error("Failed")}
  return res.json()
}

const CardList = async ({page, cat}: CardListProps) => {
  const {data, count} = await getPosts(page, cat)
  console.log("THe data :", data)
  const posts: Post[] = data

  const POST_PER_PAGE = 2
  const hasPrev = page > 1
  const hasNext = POST_PER_PAGE * page < count
  const totalPages = Math.ceil(count / POST_PER_PAGE)
  
  return (
    <div className="flex-[5]" id="posts">
      <h2 className="font-semibold my-10 text-xl">Recent Post</h2>
      <div className="flex flex-col">
        {
          posts?.map((post, index) => {
            return <Card key={post.id} post={post} />
          })
        }
      </div>
      <PaginationBar page={page} hasNext={!hasNext} hasPrev={!hasPrev} totalPages={totalPages} />
    </div>
  );
};
export default CardList;
