import { CommentBox } from "@/components/CommentHandler";
import Menu from "@/components/Menu";
import Image from "next/image";

const BlogPost = () => {
  return (
    <div className="my-5 md:my-10">
      <div className="">
        <div className="grid md:grid-cols-2 gap-x-4">
          <div className="flex flex-col gap-8">
            <h1 className="text-4xl lg:text-5xl tracking-tighter leading-tight font-bold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h1>
            <div className="flex items-center gap-4">
              <div className="relative  aspect-square h-12 overflow-hidden rounded-full ">
                <Image
                  fill
                  src="/TheHoracle.jpg"
                  alt="theHoracle"
                  className="object-contain object-center size-full scale-110"
                />
              </div>
              <div className="text-sm">
                <p className="">theHoracle</p>
                <span className="text-muted-foreground">10.06.24</span>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden hidden md:block rounded-lg ">
            <Image
              fill
              src="/kids_about_to_ball.jpeg"
              alt="kids about to ball image"
              className="object-cover object-center size-full "
            />
          </div>
        </div>
        {/* content - */}
        <div className="mt-10 flex gap-12">
          <div className="flex-[4]">
            <div>
              <div className="flex flex-col gap-4">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. At
                  harum, suscipit nesciunt, deleniti unde rem quam sequi ex
                  ipsum recusandae odio aspernatur eligendi optio? Doloremque
                  sequi dolorem quam eaque distinctio hic et, tempore possimus
                  eveniet. Quae, repellendus quod consequatur quisquam harum ea
                  quaerat, tempore atque ex sunt rerum eius quis.
                </p>
                <h4 className="font-semibold">Lorem ipsum dolor sit amet.</h4>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. At
                  harum, suscipit nesciunt, deleniti unde rem quam sequi ex
                  ipsum recusandae odio aspernatur eligendi optio? Doloremque
                  sequi dolorem quam eaque distinctio hic et, tempore possimus
                  eveniet. Quae, repellendus quod consequatur quisquam harum ea
                  quaerat, tempore atque ex sunt rerum eius quis.
                </p>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. At
                  harum, suscipit nesciunt, deleniti unde rem quam sequi ex
                  ipsum recusandae odio aspernatur eligendi optio? Doloremque
                  sequi dolorem quam eaque distinctio hic et, tempore possimus
                  eveniet. Quae, repellendus quod consequatur quisquam harum ea
                  quaerat, tempore atque ex sunt rerum eius quis.
                </p>
                <h4 className="font-semibold">Lorem ipsum dolor sit amet.</h4>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. At
                  harum, suscipit nesciunt, deleniti unde rem quam sequi ex
                  ipsum recusandae odio aspernatur eligendi optio? Doloremque
                  sequi dolorem quam eaque distinctio hic et, tempore possimus
                  eveniet. Quae, repellendus quod consequatur quisquam harum ea
                  quaerat, tempore atque ex sunt rerum eius quis.
                </p>
              </div>
            </div>
            <div className="">
              <h2 className="font-semibold my-10 text-xl">Comments</h2>
              <CommentBox />
              <div className="my-10">
                {/* Users comments */}
                <ul className="divide-y border-muted-foreground flex flex-col gap-4">
                  <li className="flex flex-col gap-2">
                    <div className="flex gap-4 items-center">
                      <Image
                        src="/TheHoracle.jpg"
                        alt="Not the Horacle"
                        width={50}
                        height={50}
                        className="rounded-full "
                      />
                      <div className="flex flex-col">
                        <p className="font-semibold">Not theHoracle</p>
                        <span className="text-xs">10.06.24</span>
                      </div>
                    </div>
                    <p className="">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Velit quod accusantium esse, harum reiciendis voluptas
                      quia nulla! Esse optio quos quae quam eum saepe dolores,
                      accusamus perspiciatis porro laudantium eveniet!
                    </p>
                  </li>

                  <li className="flex flex-col gap-2 pt-4">
                    <div className="flex gap-4 items-center">
                      <Image
                        src="/TheHoracle.jpg"
                        alt="Not the Horacle"
                        width={50}
                        height={50}
                        className="rounded-full "
                      />
                      <div className="flex flex-col">
                        <p className="font-semibold">Not theHoracle</p>
                        <span className="text-xs">10.06.24</span>
                      </div>
                    </div>
                    <p className="">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Velit quod accusantium esse, harum reiciendis voluptas
                      quia nulla! Esse optio quos quae quam eum saepe dolores,
                      accusamus perspiciatis porro laudantium eveniet!
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <Menu />
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
