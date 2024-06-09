import Image from "next/image";
import { Button, buttonVariants } from "./ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

const Card = () => {
  return (
    <div className="grid grid-cols-2 mb-12 gap-x-8">
      <div className="relative h-60 overflow-hidden rounded-md">
        <Image
          fill
          src={`/kids_about_to_ball.jpeg`}
          className="size-full object-cover object-center"
          alt={``}
        />
      </div>
      <div className="text-xs flex flex-col gap-2 justify-center">
        <div>
          <span className="text-gray-400">28.05.2024 - </span>
          <span className="uppercase text-red-500 font-medium">Culture</span>
        </div>
        <h2 className="text-lg font-bold leading-5">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </h2>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore sunt
          expedita deserunt itaque? Quo neque soluta, sapiente inventore
          repellat reprehenderit nam, aliquam commodi optio, non doloribus
          facilis libero obcaecati quod?
        </p>
        <Link
          href={"#"}
          className={cn(
            buttonVariants({ variant: "link" }),
            "px-0 max-w-fit text-xs",
          )}
        >
          Read more &rarr;
        </Link>
      </div>
    </div>
  );
};
export default Card;
